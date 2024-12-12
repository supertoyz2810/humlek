import { CafeCategoryProps } from "./cafe-category.types";

type CafeCommentProps = {
  content: string;
  createDate: string;
};

type CafeThemeColor = {
  primaryColor: string;
  secondaryColor: string;
}

export type CafeLocationProps = {
  city: string;
  street: string;
  district: string;
  ward: string;
}

export type CafeDetailProps = {
  title: string;
  content: string;
  thumbnail: string;
  phoneNumber: string;
  contentImg: string[];
  cafeLocation: CafeLocationProps;
  cafeCategory: CafeCategoryProps[];
  cafeTheme: CafeThemeColor;
};

export type CafeProps = {
  id: string;
  username: string;
  createDate: string;
  cafeDetails: CafeDetailProps;
  cafeComments: CafeCommentProps[];
  totalLike: number;
  totalDislike: number;
  totalComment: number;
  totalShare: number;
  isTodayMenu: boolean;
  isOnPromotion: boolean;
  isHoldingEvents: boolean;
};
