import { useNavigate } from "react-router-dom";
import { CongratulationsUI } from "./style";

export const Congratulations = () => {
  const navigate = useNavigate();

  return (
    <CongratulationsUI>
      <h1>Congratulations</h1>
      <p className="text_1">
        You have successfully purchased a node. Welcome to Shadow Node!
      </p>
      <hr className="hr" />
      <p className="text_2">
        Your node will be set up within 3 to 6 hours. After this time, you can
        connect your wallet to access the node dashboard.
      </p>
      <button onClick={() => navigate("/my-node")} className="btn">
        <span>Go to My Nodes</span>
        <img src={"/assets/images/price-plan-button-fill.png"} />
      </button>
    </CongratulationsUI>
  );
};
