import { useEffect, useState } from "react";
import { PricePlans as PricePlansComponent } from "./style";
import { CheckIcon } from "../../../../icons";
import { PriceCard } from "./components";
import { Props } from "./types";

const PriceList1 = [
  "Anti Virus Support",
  "Viruses Scans",
  "Files Scans",
  "Low Priority",
  "$zkHive Rewards",
];

const PriceList2 = [
  "Anti Virus Support",
  "AntiMalware Support",
  "Viruses Scans",
  "Mawares Scans",
  "Medium Priority",
  "$zkHive Rewards",
];

const PriceList3 = [
  "Anti Virus Support",
  "AntiMalware Support",
  "Cloud Support",
  "Mawares Scans",
  "Malwares Scans",
  "High Priority",
  "$zkHive Rewards",
];

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
        <h1 data-aos="fade-up">Choose zkHive Node plan below</h1>
      </div>
      <div className="price_grid_buttons">
        <button id="item-0" data-aos="fade-up">
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
        <button id="item-1" data-aos="fade-up">
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
        <button id="item-2" data-aos="fade-up">
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
        <a href="#" id="item-3" className="compare_plans">
          {" "}
          Compare plans
        </a>
      </div>
      {!selectPrice && (
        <div className="price_grid_cards">
          <PriceCard
            title="Basic zkNode"
            buttonTitle="0.2 ETH"
            items={PriceList1}
            onClick={() => setSelectPrice("basic")}
            priceType="basic"
          />
          <PriceCard
            title="Advanced zkNode"
            buttonTitle="0.5 ETH"
            items={PriceList2}
            onClick={() => setSelectPrice("advanced")}
            priceType="advanced"
          />
          <PriceCard
            title="Full zkNode"
            buttonTitle="1 ETH"
            items={PriceList3}
            onClick={() => setSelectPrice("full")}
            priceType="full"
          />
        </div>
      )}
    </PricePlansComponent>
  );
};
