export type Props = {
  priceType: "basic" | "advanced" | "full";
  onClick: () => void;
  items: string[];
  title: string;
  buttonTitle: string;
};
