import { useAccount, useBalance } from "wagmi";
import { PurchaseUI } from "./style";
import { Props } from "./types";
import { NotificationManager } from "react-notifications";
import { getBalance } from "../../../../libs/fucntions";

export const Purchase = ({ setStep }: Props) => {
  const { isConnected, address } = useAccount();

  const ethBalance: any = useBalance({
    address: address,
  });

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
      if (myBalanceZKHive / totalSupply < 0.25) {
        NotificationManager.warning(
          `You hold ${
            myBalanceZKHive / totalSupply
          }% total supply now, it should be greater than 0.25%.`,
          "",
          5000
        );
        // return setStep(1);
      }

      console.log("ethBalance:", ethBalance.data.formatted);
      if (ethBalance.data.formatted < 0.5) {
        return NotificationManager.warning(
          `Your ETH balance is ${ethBalance}, it should be greater than 0.3ETH.`,
          "",
          5000
        );
      }
      // setStep(4);
    } catch (error) {
      console.log("error of next step:", error);
    }
  };

  return (
    <PurchaseUI data-aos="fade-up">
      <div className="purchase_title_wrapper">
        <h1>You need to pay a yearly fee of 0.3 ETH to purchase the node.</h1>
      </div>
      <div className="purchase_grid_buttons">
        <button onClick={() => handleNextStep()}>
          <span>Pay with ETH</span>
          <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
        </button>
        {/* <button className="pay_with_token">
      <span style={{ color: "#FBDA00" }}>Pay with tokens</span>
      <img src={"/assets/images/price-plan-button.png"} alt="" />
    </button> */}
      </div>
      <p className="last_text">
        By clicking on “Pay Now”, a Metamask pop-up will appear for processing
        the payment of 0.3 ETH to zkHive Node.
      </p>
    </PurchaseUI>
  );
};
