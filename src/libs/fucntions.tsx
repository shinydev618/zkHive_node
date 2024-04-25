import axios from "axios";

export const getMyNode = async (address: any) => {
  try {
    const resGetMyNode = await axios.get(
      (process.env.REACT_APP_URL_ZKHIVENODE as any) + "/getNodes",
      {
        params: {
          user: address,
        },
      }
    );
    const nodeIds = resGetMyNode.data.nodeIds;
    console.log("nodeIds:", nodeIds);

    let arrayNodeInfo: any = [];
    for (var i = 0; i < nodeIds.length; i++) {
      let resNodeInfo = await axios.get(
        (process.env.REACT_APP_URL_ZKHIVENODE as any) + "/getNodesInfo",
        {
          params: {
            nodeIds: nodeIds[i],
          },
        }
      );

      // console.log("resNodeInfo data:", resNodeInfo.data.nodes[0]);
      arrayNodeInfo.push(resNodeInfo.data.nodes[0]);
    }
    console.log("arrayNodeInfo:", arrayNodeInfo);
    return arrayNodeInfo;
  } catch (error) {
    console.log("error of handleGetMyNode:", error);
  }
};
