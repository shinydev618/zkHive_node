import { Props } from "./types";
import { Checked as CheckedUI } from "./style";
import { CheckIcon } from "../../../../icons";
import { useEffect, useState } from "react";
export const Checked = ({ setStep }: Props) => {
  const [isCheck, setIsChek] = useState(false);

  useEffect(() => {
    if (isCheck) {
      setStep(2);
    }
  }, [isCheck]);

  return (
    <CheckedUI>
      <div className="checked_title_wrapper">
        <h1 data-aos="fade-up">
          Do you hold at least a 0.25% Supply of SVPN tokens?
        </h1>
      </div>
      <div className="checked_grid_buttons">
        <button data-aos="fade-up" onClick={() => setIsChek(true)}>
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
