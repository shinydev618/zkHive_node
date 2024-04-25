import { Card as CardComponent } from "./style";
import { Props } from "./types";
export const Card = ({ src, value, title, isButton, buttonTitle }: Props) => {
  return (
    <CardComponent className="card ribbon-outset border">
      <div className="content">
        <h1>{value}</h1>
        <p>{title}</p>
        {isButton && (
          <div className="button_wrapper">
            <button className="claim_button">
              <span>{buttonTitle}</span>
              <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
            </button>
          </div>
        )}
      </div>
      <img src={src} alt="" />
    </CardComponent>
  );
};
