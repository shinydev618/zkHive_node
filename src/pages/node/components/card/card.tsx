import { NotificationManager } from "react-notifications";
import { Card as CardComponent } from "./style";
import { Props } from "./types";
import axios from "axios";
import { useAccount } from "wagmi";

export const Card = ({ src, value, title, isButton, buttonTitle }: Props) => {
  const { isConnected, address } = useAccount();
  const handleClaim = async () => {
    if (!isConnected) {
      return NotificationManager.warning(
        "Please connect wallet first.",
        "",
        5000
      );
    }

    try {
      await axios
        .post(
          (process.env.REACT_APP_URL_API_ZKHIVENODE as any) +
            "/submitClaimRequest",
          {
            user: address,
          }
        )
        .then((res) => {
          console.log("resclaim:", res.data);
        });
    } catch (error) {
      console.log("error of claim", error);
    }
    // return NotificationManager.warning("Coming soon.", "", 5000);
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
