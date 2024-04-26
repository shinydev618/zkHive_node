import { SupplyUI } from "./style";
import { Props } from "./types";
import { useAccount } from "wagmi";
import { NotificationManager } from "react-notifications";
import { getBalance } from "../../../../libs/fucntions";
import { useEffect, useState } from "react";

export const Supply = ({ setStep }: Props) => {
  const [supply, setSupply] = useState(0);

  const getSupply = async (address: any) => {
    const { myBalanceZKHive, totalSupply }: any = await getBalance(address);
    setSupply((myBalanceZKHive / totalSupply) * 100);
  };

  const { isConnected, address } = useAccount();
  const handleNextStep = async () => {
    if (!isConnected) {
      return NotificationManager.warning(
        "Please connect wallet first.",
        "",
        5000
      );
    }

    try {
      const { myBalanceZKHive, totalSupply }: any = await getBalance(address);

      if ((myBalanceZKHive / totalSupply) * 100 < 0.25) {
        NotificationManager.warning(
          `You hold ${
            myBalanceZKHive / totalSupply
          }% total supply now. It should be greater than 0.25%.`,
          "",
          5000
        );
        return setStep(1);
      }
      setStep(3);
    } catch (error) {
      console.log("error of next step:", error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      getSupply(address);
    }
  }, [isConnected, address]);
  return (
    <SupplyUI data-aos="fade-up">
      <div className="supply_title_wrapper">
        <h1>Supply ( {supply.toFixed(2)}% )</h1>
      </div>
      <div className="supply_grid_buttons">
        <button onClick={() => handleNextStep()}>
          <span>Next</span>
          <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
        </button>
        <p className="supply_text">
          Your staked amount is sufficient to purchase a node.
        </p>
      </div>
    </SupplyUI>
  );
};
