import {
  useAccount,
  useBalance,
  usePublicClient,
  useSendTransaction,
} from "wagmi";
import { PurchaseUI } from "./style";
import { Props } from "./types";
import { NotificationManager } from "react-notifications";
import { getBalance, shortFloat } from "../../../../libs/fucntions";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import axios from "axios";

export const Purchase = ({ setStep, ethPay, plan }: Props) => {
  const { isConnected, address } = useAccount();
  const publicClient = usePublicClient();

  const ethBalance: any = useBalance({
    address: address,
  });
  const { sendTransactionAsync } = useSendTransaction();

  const [isProcess, setProcess] = useState(false);

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
          }% total supply now, it should be greater than 0.25%.`,
          "",
          5000
        );
        return setStep(2);
      }

      if (isProcess) {
        return NotificationManager.warning(
          "Please wait while processing.",
          "",
          5000
        );
      }

      // console.log("ethBalance:", ethBalance.data.formatted);
      if (ethBalance.data.formatted < ethPay) {
        return NotificationManager.warning(
          `Your ETH balance is ${shortFloat(
            parseFloat(ethBalance.data.formatted),
            2
          )}, it should be greater than ${ethPay} ETH.`,
          "",
          5000
        );
      }

      setProcess(true);
      const resPaymentAddress = await axios.get(
        (process.env.REACT_APP_URL_API_ZKHIVENODE as any) + "/getPaymentLink",
        {
          params: {
            user: address,
            nodeType: plan,
          },
        }
      );
      console.log("resPaymentAddress:", resPaymentAddress.data.paymentAddress);

      const hash = await sendTransactionAsync({
        // to: process.env.REACT_APP_ADDRESS_WALLET_PAY as any,
        to: resPaymentAddress.data.paymentAddress as any,
        // value: parseEther((0.01).toString() as any) as any,
        value: parseEther(ethPay.toString()) as any,
      });
      // console.log("hash:", hash);
      const txReceipt = await publicClient?.waitForTransactionReceipt({ hash });
      // console.log("txReceipt?.status:", txReceipt?.status);

      if (txReceipt?.status === "success") {
        await axios
          .post(
            (process.env.REACT_APP_URL_API_ZKHIVENODE as any) +
              "/submitPayment",
            {
              user: address,
              txId: hash,
            }
          )
          .then((res) => {
            // console.log(res.data);
            if (res.data !== null || res.data !== undefined) {
              setStep(4);
            }
            setProcess(false);
          });
      } else {
        setProcess(false);
      }
    } catch (error) {
      console.log("error of next step:", error);
      setProcess(false);
      // return NotificationManager.warning(`${error}`, "", 5000);
    }
  };

  return (
    <PurchaseUI data-aos="fade-up">
      <div className="purchase_title_wrapper">
        <h1>
          You need to pay a yearly fee of {ethPay} ETH to purchase the node.
        </h1>
      </div>
      <div className="purchase_grid_buttons">
        <button
          onClick={() => handleNextStep()}
          style={{ cursor: isProcess ? "wait" : "pointer" }}
        >
          <span>{isProcess ? "Processing..." : "Pay with ETH"}</span>
          <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
        </button>
        {/* <button className="pay_with_token">
      <span style={{ color: "#FBDA00" }}>Pay with tokens</span>
      <img src={"/assets/images/price-plan-button.png"} alt="" />
    </button> */}
      </div>
      <p className="last_text">
        By clicking on “Pay Now”, a Metamask pop-up will appear for processing
        the payment of {ethPay} ETH to zkHive Node.
      </p>
    </PurchaseUI>
  );
};
