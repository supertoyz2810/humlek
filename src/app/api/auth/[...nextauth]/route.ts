import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AuthServices } from "../../service";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        console.log(credentials);
        if (!credentials) return null;
        try {
          const { username, password } = credentials;
          console.log(username, password);
          // Call database to login
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET_KEY,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async signIn({ user, account, credentials }): Promise<any> {
      if (account?.provider === "google") {
        try {
          const dataInput = {
            accessToken: account?.access_token || "",
            idToken: account?.id_token || "",
            refreshToken: "haha",
          };
          const res = await AuthServices.loginWithGoogle(dataInput);
          if (res.metaData.status === "ok") {
            // Store the access token in the user object
            user.accessToken = res.data.token;
            return true;
          }
          return false;
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    // Customize the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    // Customize the session data
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.expires = token.exp;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
