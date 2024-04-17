import { useEffect, useState } from "react";
import { PricePlans as PricePlansComponent } from "./style";
import { CheckIcon } from "../../../../icons";
import { PriceCard } from "./components";
import { Props } from "./types";

export const PricePlans = ({ setStep }: Props) => {
  const [selectPrice, setSelectPrice] = useState<
    "basic" | "advanced" | "full" | undefined
  >();

  useEffect(() => {
    if (selectPrice) {
      setStep(1);
    }
  }, [selectPrice]);
  return (
    <PricePlansComponent>
      <div className="price_title_wrapper">
        <h1>Choose zkHive Node plan below</h1>
      </div>
      <div className="price_grid_buttons">
        <button>
          <span style={{ color: selectPrice === "basic" ? "black" : "" }}>
            {selectPrice === "basic" && <CheckIcon />} Basic
          </span>
          <img
            src={
              selectPrice === "basic"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button>
          <span style={{ color: selectPrice === "advanced" ? "black" : "" }}>
            {selectPrice === "advanced" && <CheckIcon />} Advanced
          </span>
          <img
            src={
              selectPrice === "advanced"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button>
          <span style={{ color: selectPrice === "full" ? "black" : "" }}>
            {selectPrice === "full" && <CheckIcon />} Full
          </span>
          <img
            src={
              selectPrice === "full"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
      </div>
      {!selectPrice && (
        <div className="price_grid_cards">
          <PriceCard
            onClick={() => setSelectPrice("basic")}
            priceType="basic"
          />
          <PriceCard
            onClick={() => setSelectPrice("advanced")}
            priceType="advanced"
          />
          <PriceCard onClick={() => setSelectPrice("full")} priceType="full" />
        </div>
      )}
    </PricePlansComponent>
  );
};
