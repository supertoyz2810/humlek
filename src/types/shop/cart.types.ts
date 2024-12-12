export type CartProps = {
  id: string;
  productName: string;
  productSize: "M" | "L" | "";
  productAmount: number;
  productPrice: number;
  productType: "drink" | "food";
};
