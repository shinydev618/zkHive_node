import { NotificationManager } from "react-notifications";
import { Card as CardComponent } from "./style";
import { Props } from "./types";
import axios from "axios";
import { useAccount } from "wagmi";
import { useContext, useState } from "react";
import { getMyNode } from "../../../../libs/fucntions";
import { RefContext } from "../../../../libs/RefContext";
import { zkHiveClaim } from "../../../../libs/abi";
import { ethers } from "ethers";

export const Card = ({ src, value, title, isButton, buttonTitle }: Props) => {
  const { isConnected, address } = useAccount();

  const [isProcess, setProcess] = useState(false);
  const { setDataMyNode }: any = useContext(RefContext);

  const contractABI = zkHiveClaim;

  // const provider = new ethers.providers.InfuraProvider(
  //   process.env.REACT_APP_IS_TESTNET ? "sepolia" : "mainnet",
  //   process.env.REACT_APP_KEY_INFRA
  // );
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer: any = provider.getSigner(address);

  const contractZKHIVEClaim = new ethers.Contract(
    process.env.REACT_APP_IS_TESTNET
      ? (process.env.REACT_APP_ADDRESS_CONTRACT_ZKHIVE_CLAIM_TEST as any)
      : (process.env.REACT_APP_ADDRESS_CONTRACT_ZKHIVE_CLAIM_MAIN as any),
    contractABI,
    signer
  );

  const handleClaim = async () => {
    if (!isConnected) {
      return NotificationManager.warning(
        "Please connect wallet first.",
        "",
        5000
      );
    }

    setProcess(true);
    if (isProcess) {
      return NotificationManager.warning(
        "Please wait while processing.",
        "",
        5000
      );
    }
    try {
      const resClaim = await axios.post(
        (process.env.REACT_APP_URL_API_ZKHIVENODE as any) +
          "/submitClaimRequest",
        {
          user: address,
        }
      );

      // console.log("resclaim:", resClaim.data);

      const resMyNode = await getMyNode(address);
      setDataMyNode(resMyNode);

      const resContractClaim = await contractZKHIVEClaim.claimRewards(
        resClaim.data.totalRewards,
        resClaim.data.deadline,
        resClaim.data.sig
      );

      await resContractClaim.wait();

      setProcess(false);
    } catch (error) {
      setProcess(false);
      console.log("error of claim", error);
    }
    // return NotificationManager.warning("Coming soon.", "", 5000);
  };

  return (
    <CardComponent className="card ribbon-outset border">
      <div className="content">
        <h1>{value}</h1>
        <p>{title}</p>
        {isButton && (
          <div className="button_wrapper">
            <button
              className="claim_button"
              style={{ cursor: isProcess ? "wait" : "pointer" }}
              onClick={() => {
                handleClaim();
              }}
            >
              <span>{isProcess ? "Processing..." : buttonTitle}</span>
              <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
            </button>
          </div>
        )}
      </div>
      <img src={src} alt="" />
    </CardComponent>
  );
};
