import { log } from "console";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handler: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials) return null;
        try {
          const { username, password } = credentials;
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
    // Customize the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    // Customize the session data
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
