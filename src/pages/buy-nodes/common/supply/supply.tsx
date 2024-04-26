import { SupplyUI } from "./style";
import { Props } from "./types";
import { useAccount } from "wagmi";
import { NotificationManager } from "react-notifications";
import { getBalance } from "../../../../libs/fucntions";

export const Supply = ({ setStep }: Props) => {
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

      // if (myBalanceZKHive / totalSupply < 0.25) {
      //   NotificationManager.warning(
      //     `You hold ${
      //       myBalanceZKHive / totalSupply
      //     }% total supply now. It should be greater than 0.25%.`,
      //     "",
      //     5000
      //   );
      //   return setStep(1);
      // }
      setStep(3);
    } catch (error) {
      console.log("error of next step:", error);
    }
  };

  return (
    <SupplyUI data-aos="fade-up">
      <div className="supply_title_wrapper">
        <h1>Supply (0.45%)</h1>
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
