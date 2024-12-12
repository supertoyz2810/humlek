import { api } from "@/config/api/axios.config"
import { ApiEndpointList } from "@/constants/api-endpoint.constant"
import { LoginWithGoogleInputType, LoginWithGoogleOutputType } from "@/types/auth/auth.types";

const AuthServices = {
  loginWithGoogle: async (
    data: LoginWithGoogleInputType
  ): Promise<LoginWithGoogleOutputType> => {
    try {
      const res = await api.post(ApiEndpointList.auth.LOGIN_WITH_GOOGLE, {
        accessToken: data.accessToken,
        idToken: data.idToken,
        refreshToken: "haha",
      });
      return res.data;
    } catch (error) {
        return {
          data: { token: "" },
          pagingData: "",
          metaData: {
            status: "error",
            errorCode: "500",
            message: "An error occurred during login",
            errors: [],
          },
        };
    }
  },
};

export default AuthServices;