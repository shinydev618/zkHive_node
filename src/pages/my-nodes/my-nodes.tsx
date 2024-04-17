import { PlusIcon } from "../../icons";
import { NodeCard } from "./components";
import { NODES } from "./constants";
import { NodeGrid, Wrapper } from "./style";

export const MyNodes = () => (
  <Wrapper>
    <div className="container content">
      <h1>My Nodes</h1>
      <NodeGrid>
        {NODES.map((item, index) => (
          <NodeCard key={index} title={item.nodeName} />
        ))}
        <button className="add-btn">
          <img src="/assets/images/add-button.png" alt="" />
          <div className="content">
            <PlusIcon />
            <p>Add New Node</p>
          </div>
        </button>
      </NodeGrid>
      <button className="see_more">
        <p> Click here to see more Nodes...</p>
        <img src="/assets/images/see-more-button.png" alt="" />
      </button>
    </div>
  </Wrapper>
);
