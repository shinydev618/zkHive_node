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
  "Malware Scans",
  "Medium Priority",
  "$zkHive Rewards",
];

const PriceList3 = [
  "Anti Virus Support",
  "AntiMalware Support",
  "Cloud Support",
  "Malware Scans",
  "Malwares Scans",
  "High Priority",
  "$zkHive Rewards",
];

export const PricePlans = ({ setStep, step }: Props) => {
  const [selectPrice, setSelectPrice] = useState<
    "Basic" | "Advanced" | "Full" | undefined
  >();
  const [selected, setSelected] = useState("Full");
  useEffect(() => {
    if (selectPrice) {
      setStep(1);
    }
  }, [selectPrice]);

  useEffect(() => {
    if (step === 0) {
      setSelectPrice(undefined);
    }
  }, [step]);

  const changeSelected = (value: string) => {
    if (window.innerWidth < 1000) {
      setSelected(value);
    }
  };

  return (
    <PricePlansComponent>
      <div className="price_title_wrapper">
        <h1>Choose zkHive Node plan below</h1>
      </div>
      <div className={`price_grid_buttons`}>
        <button
          id="item-0"
          data-aos="zoom-in"
          onClick={() => changeSelected("Basic")}
        >
          <span style={{ color: selectPrice === "Basic" ? "black" : "" }}>
            {selectPrice === "Basic" && <CheckIcon />} Basic
          </span>
          <img
            src={
              selectPrice === "Basic"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button
          id="item-1"
          data-aos="zoom-in"
          onClick={() => changeSelected("Advanced")}
        >
          <span style={{ color: selectPrice === "Advanced" ? "black" : "" }}>
            {selectPrice === "Advanced" && <CheckIcon />} Advanced
          </span>
          <img
            src={
              selectPrice === "Advanced"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
        <button
          id="item-2"
          data-aos="zoom-in"
          onClick={() => changeSelected("Full")}
        >
          <span style={{ color: selectPrice === "Full" ? "black" : "" }}>
            {selectPrice === "Full" && <CheckIcon />} Full
          </span>
          <img
            src={
              selectPrice === "Full"
                ? "/assets/images/price-plan-button-fill.png"
                : "/assets/images/price-plan-button.png"
            }
            alt=""
          />
        </button>
      </div>
      {!selectPrice ? (
        <div className="price_grid_cards">
          <PriceCard
            selected={selected}
            title="Basic zkNode"
            buttonTitle="0.2 ETH"
            items={PriceList1}
            onClick={() => setSelectPrice("Basic")}
            priceType="Basic"
          />
          <PriceCard
            selected={selected}
            selectPrice={selectPrice}
            title="Advanced zkNode"
            buttonTitle="0.5 ETH"
            items={PriceList2}
            onClick={() => setSelectPrice("Advanced")}
            priceType="Advanced"
          />
          <PriceCard
            selected={selected}
            selectPrice={selectPrice}
            title="Full zkNode"
            buttonTitle="1 ETH"
            items={PriceList3}
            onClick={() => setSelectPrice("Full")}
            priceType="Full"
          />
        </div>
      ) : (
        ""
      )}
    </PricePlansComponent>
  );
};
