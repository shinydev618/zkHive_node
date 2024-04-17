import { Card as CardComponent } from "./style";
import { Props } from "./types";
export const Card = ({ src, value, title }: Props) => {
  return (
    <CardComponent className="card ribbon-outset border">
      <div className="content">
        <h1>{value}</h1>
        <p>{title}</p>{" "}
      </div>
      <img src={src} alt="" />
    </CardComponent>
  );
};
