export type LoginInputType = {
  username: string;
  password: string;
};

export type LoginWithGoogleInputType = {
  accessToken: string;
  idToken: string;
};

export type LoginWithGoogleOutputType = {
  data: { token: string };
  pagingData: string;
  metaData: {
    status: string;
    errorCode: string;
    message: string;
    errors: []
  };
}