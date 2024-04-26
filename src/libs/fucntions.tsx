import axios from "axios";
import { abiZKHIVE } from "./abi";
import { ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";

const contractABI = abiZKHIVE;

const provider = new ethers.providers.InfuraProvider(
  process.env.REACT_APP_IS_TESTNET ? "sepolia" : "mainnet",
  process.env.REACT_APP_KEY_INFRA
);
const contractZKHIVE = new ethers.Contract(
  process.env.REACT_APP_IS_TESTNET
    ? (process.env.REACT_APP_ADDRESS_CONTRACT_ZKHIVE_TEST as any)
    : (process.env.REACT_APP_ADDRESS_CONTRACT_ZKHIVE_MAIN as any),
  contractABI,
  provider
);

export const getMyNode = async (address: any) => {
  try {
    const resGetMyNode = await axios.get(
      (process.env.REACT_APP_URL_API_ZKHIVENODE as any) + "/getNodes",
      {
        params: {
          user: address,
        },
      }
    );
    const nodeIds = resGetMyNode.data.nodeIds;
    // console.log("my nodeIds:", nodeIds);

    let arrayNodeInfo: any = [];
    for (var i = 0; i < nodeIds.length; i++) {
      let resNodeInfo = await axios.get(
        (process.env.REACT_APP_URL_API_ZKHIVENODE as any) + "/getNodesInfo",
        {
          params: {
            nodeIds: nodeIds[i],
          },
        }
      );

      // console.log("my resNodeInfo data:", resNodeInfo.data.nodes[0]);
      arrayNodeInfo.push(resNodeInfo.data.nodes[0]);
    }
    // console.log("arrayNodeInfo:", arrayNodeInfo);
    return arrayNodeInfo;
  } catch (error) {
    console.log("error of handleGetMyNode:", error);
  }
};

export const getBalance = async (address: any) => {
  try {
    const resTotalSupply = await contractZKHIVE.totalSupply();
    const totalSupply: any = parseFloat(formatUnits(resTotalSupply._hex, 18));
    // console.log("totalSupply:", totalSupply);

    const resMyBalanceZKHive = await contractZKHIVE.balanceOf(address);

    const myBalanceZKHive: any = parseFloat(
      formatUnits(resMyBalanceZKHive._hex, 18)
    );
    // console.log("myBalanceZKHive:", myBalanceZKHive);

    return { myBalanceZKHive: myBalanceZKHive, totalSupply: totalSupply };
  } catch (error) {
    console.log("error of handleCheck", error);
  }
};

export const shortFloat = (number: any, pointNum: any) => {
  if (!Number.isNaN(number) && Number.isInteger(number)) {
    return number;
  } else {
    return number.toFixed(pointNum); //number.toFixed(pointNum);
  }
};
