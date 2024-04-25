import { Props } from "./types";
import { Checked as CheckedUI } from "./style";

import { useEffect, useState } from "react";
export const Checked = ({ setStep, step }: Props) => {
  const [isCheck, setIsChek] = useState(false);

  useEffect(() => {
    if (isCheck) {
      setStep(2);
    }
  }, [isCheck]);

  useEffect(() => {
    if (step === 1) {
      setIsChek(false);
    }
  }, [step]);

  return (
    <CheckedUI data-aos="fade-up">
      <div className="checked_title_wrapper">
        <h1>Do you hold at least a 0.25% Supply of ZKHIVE tokens?</h1>
      </div>
      <div className="checked_grid_buttons">
        <button onClick={() => setIsChek(true)}>
          <span>Checked</span>
          <img
            src={
              isCheck
                ? "/assets/images/price-plan-button-green-fill.png"
                : "/assets/images/price-plan-button-fill.png"
            }
            alt=""
          />
        </button>
      </div>
    </CheckedUI>
  );
};
