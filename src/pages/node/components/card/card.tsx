import { NotificationManager } from "react-notifications";
import { Card as CardComponent } from "./style";
import { Props } from "./types";

export const Card = ({ src, value, title, isButton, buttonTitle }: Props) => {
  const handleClaim = async () => {
    return NotificationManager.warning("Coming soon.", "", 5000);
  };

  return (
    <CardComponent className="card ribbon-outset border">
      <div className="content">
        <h1>{value}</h1>
        <p>{title}</p>
        {isButton && (
          <div className="button_wrapper">
            <button
              className="claim_button"
              onClick={() => {
                handleClaim();
              }}
            >
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
