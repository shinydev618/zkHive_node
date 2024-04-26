import { useEffect, useState } from "react";
import { PricePlans as PricePlansComponent } from "./style";
import { CheckIcon } from "../../../../icons";
import { PriceCard } from "./components";
// import { Props } from "./types";

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

export const PricePlans = ({ setStep, step, plan, setPlan }: any) => {
  const [selected, setSelected] = useState("full");
  useEffect(() => {
    if (plan) {
      setStep(1);
    }
  }, [plan]);

  useEffect(() => {
    if (step === 0) {
      setPlan(undefined);
    }
  }, [step]);

  const changeSelected = (value: string) => {
    if (window.innerWidth < 1000) {
      setSelected(value);
    }
  };

  return (
    <PricePlansComponent data-aos="fade-up">
      <div className="price_title_wrapper">
        <h1>Choose zkHive Node plan below</h1>
      </div>
      <div className={`price_grid_buttons`}>
        <button id="item-0" onClick={() => changeSelected("basic")}>
          <span style={{ color: plan === "basic" ? "black" : "" }}>
            {plan === "basic" && <CheckIcon />} Basic
          </span>
          <img
            src={
              plan === "basic"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button id="item-1" onClick={() => changeSelected("advanced")}>
          <span style={{ color: plan === "advanced" ? "black" : "" }}>
            {plan === "advanced" && <CheckIcon />} Advanced
          </span>
          <img
            src={
              plan === "advanced"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button id="item-2" onClick={() => changeSelected("full")}>
          <span style={{ color: plan === "full" ? "black" : "" }}>
            {plan === "full" && <CheckIcon />} Full
          </span>
          <img
            src={
              plan === "full"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
      </div>
      {!plan ? (
        <div className="price_grid_cards">
          <PriceCard
            selected={selected}
            title="Basic zkNode"
            buttonTitle="0.2 ETH"
            items={PriceList1}
            onClick={() => setPlan("basic")}
            priceType="basic"
          />
          <PriceCard
            selected={selected}
            selectPrice={plan}
            title="Advanced zkNode"
            buttonTitle="0.5 ETH"
            items={PriceList2}
            onClick={() => setPlan("advanced")}
            priceType="advanced"
          />
          <PriceCard
            selected={selected}
            selectPrice={plan}
            title="Full zkNode"
            buttonTitle="1 ETH"
            items={PriceList3}
            onClick={() => setPlan("full")}
            priceType="full"
          />
        </div>
      ) : (
        ""
      )}
    </PricePlansComponent>
  );
};
