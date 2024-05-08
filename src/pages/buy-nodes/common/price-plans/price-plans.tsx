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

export const PricePlans = ({
  setStep,
  step,
  plan,
  setPlan,
  setETHPay,
}: any) => {
  const [selected, setSelected] = useState("Full");
  useEffect(() => {
    if (plan) {
      setStep(1);
    }
  }, [plan]);

  useEffect(() => {
    if (step === 0) {
      setPlan(undefined);
      setETHPay(0);
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
        <button id="item-0" onClick={() => changeSelected("Basic")}>
          <span style={{ color: plan === "Basic" ? "black" : "" }}>
            {plan === "Basic" && <CheckIcon />} Basic
          </span>
          <img
            src={
              plan === "Basic"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button id="item-1" onClick={() => changeSelected("Advanced")}>
          <span style={{ color: plan === "Advanced" ? "black" : "" }}>
            {plan === "Advanced" && <CheckIcon />} Advanced
          </span>
          <img
            src={
              plan === "Advanced"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button id="item-2" onClick={() => changeSelected("Full")}>
          <span style={{ color: plan === "Full" ? "black" : "" }}>
            {plan === "Full" && <CheckIcon />} Full
          </span>
          <img
            src={
              plan === "Full"
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
            onClick={() => {
              setETHPay(0.2);
              setPlan("Basic");
            }}
            priceType="Basic"
          />
          <PriceCard
            selected={selected}
            selectPrice={plan}
            title="Advanced zkNode"
            buttonTitle="0.5 ETH"
            items={PriceList2}
            onClick={() => {
              setETHPay(0.5);
              setPlan("Advanced");
            }}
            priceType="Advanced"
          />
          <PriceCard
            selected={selected}
            selectPrice={plan}
            title="Full zkNode"
            buttonTitle="1 ETH"
            items={PriceList3}
            onClick={() => {
              setETHPay(1);
              setPlan("Full");
            }}
            priceType="Full"
          />
        </div>
      ) : (
        ""
      )}
    </PricePlansComponent>
  );
};
