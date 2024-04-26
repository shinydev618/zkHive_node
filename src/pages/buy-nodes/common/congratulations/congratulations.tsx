import { useNavigate } from "react-router-dom";
import { CongratulationsUI } from "./style";

export const Congratulations = () => {
  const navigate = useNavigate();

  return (
    <CongratulationsUI>
      <h1 className="text_ani">Congratulations</h1>
      <p data-aos="fade-up" className="text_1">
        You have successfully purchased a node.
        <br />
        Welcome to zkHive Node!
      </p>
      <hr data-aos="fade-up" className="hr" />
      <p data-aos="fade-up" className="text_2">
        Your node will be set up within 3 to 6 hours. After this time, you can
        connect your wallet to access the node dashboard.
      </p>
      <button
        data-aos="fade-up"
        onClick={() => navigate("/my-node")}
        className="btn"
      >
        <span>Go to My Nodes</span>
        <img src={"/assets/images/price-plan-button-fill.png"} />
      </button>
    </CongratulationsUI>
  );
};
