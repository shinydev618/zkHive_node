import { useContext, useState } from "react";
import { PlusIcon } from "../../icons";
import { NodeCard } from "./components";
import { NodeGrid, Wrapper } from "./style";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { RefContext } from "../../libs/RefContext";

export const MyNodes = () => {
  const { isConnected } = useAccount();
  const { dataMyNode }: any = useContext(RefContext);
  const navigate = useNavigate();

  const [dataNode, setDataNode] = useState(dataMyNode.slice(0, 5));
  const [isClickedMore, setClickedMore] = useState(false);

  const handleSeeMore = () => {
    setClickedMore(true);
    setDataNode(dataMyNode);
  };

  return (
    <Wrapper>
      {isConnected ? (
        <div className="container content">
          <h1>My Nodes</h1>(
          <NodeGrid>
            {dataNode?.map((item: any, index: any) => (
              <NodeCard key={index} data={item} />
            ))}
            <button
              data-aos="fade-up"
              className="add-btn"
              onClick={() => {
                navigate("/buy-node");
              }}
            >
              <img src="/assets/images/add-button.png" alt="" />
              <div className="content">
                <PlusIcon className={"add_icon"} />
                <p>Add New Node</p>
              </div>
            </button>
          </NodeGrid>
          )
          {dataMyNode?.length > 5 && !isClickedMore ? (
            <button
              data-aos="fade-up"
              className="see_more"
              onClick={() => handleSeeMore()}
            >
              <p> Click here to see more Nodes...</p>
              <img src="/assets/images/see-more-button.png" alt="" />
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <h1 className="connectwallet">Please connect wallet</h1>
      )}
    </Wrapper>
  );
};
