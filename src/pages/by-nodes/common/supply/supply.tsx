import { SupplyUI } from "./style";
import { Props } from "./types";

export const Supply = ({ setStep }: Props) => {
  return (
    <SupplyUI data-aos="fade-up">
      <div className="supply_title_wrapper">
        <h1>Supply (0.45%)</h1>
      </div>
      <div className="supply_grid_buttons">
        <button onClick={() => setStep(3)}>
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
