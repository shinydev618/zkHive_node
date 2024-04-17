import { CheckIcon } from "../../../../../../icons";
import { PriceCard as PriceCardComponent } from "./style";
import { Props } from "./types";
export const PriceCard = ({ priceType, onClick }: Props) => {
  return (
    <PriceCardComponent
      style={{
        borderColor: priceType === "full" ? "#FBDA00" : "",
        background: priceType === "full" ? "#1D1D03" : "transparent",
      }}
    >
      <img src="/assets/images/logo.png" alt="" />
      <h2>Basic zkNode</h2>
      <hr />
      <p>Services included</p>
      <ul>
        <li>
          <CheckIcon style={{ color: "#08F02D" }} />{" "}
          <span>Anti Virus Support</span>
        </li>
      </ul>
      <button
        onClick={onClick}
        style={{
          background: priceType === "full" ? "#FBDA00" : "transparent",
          color: priceType === "full" ? "#000000" : "",
        }}
      >
        0.2 ETH
      </button>
    </PriceCardComponent>
  );
};
