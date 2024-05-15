import { Props } from "./types";
import { Checked as CheckedUI } from "./style";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { NotificationManager } from "react-notifications";
import { getBalance } from "../../../../libs/fucntions";

export const Checked = ({ setStep, step }: Props) => {
  const { isConnected, address } = useAccount();
  const [isCheck, setIsChek] = useState(false);

  const handleCheck = async () => {
    if (!isConnected) {
      return NotificationManager.warning(
        "Please connect wallet first.",
        "",
        5000
      );
    }
    try {
      const { myBalanceZKHive, totalSupply }: any = await getBalance(address);
      // console.log("myBalanceZKHive:", myBalanceZKHive);
      // console.log("totalSupply:", totalSupply);

      // console.log("hold %:", myBalanceZKHive / totalSupply);
      if ((myBalanceZKHive / totalSupply) * 100 < 0.02) {
        return NotificationManager.warning(
          `You hold ${myBalanceZKHive} $ZKHIVE.`,
          "",
          5000
        );
      }

      setIsChek(true);
    } catch (error) {
      console.log("error of handleCheck", error);
    }
  };

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
        <h1>Do you hold at least 20,000 $ZKHIVE?</h1>
      </div>
      <div className="checked_grid_buttons">
        <button onClick={() => handleCheck()}>
          <span>{isCheck ? "Checked" : "Check"}</span>
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
