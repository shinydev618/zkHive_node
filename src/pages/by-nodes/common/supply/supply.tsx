import { SupplyUI } from "./style";
import { Props } from "./types";

export const Supply = ({ setStep }: Props) => {
  return (
    <SupplyUI>
      <div className="supply_title_wrapper">
        <h1 data-aos="fade-up">Supply (0.45%)</h1>
      </div>
      <div className="supply_grid_buttons">
        <button data-aos="fade-up" onClick={() => setStep(3)}>
          <span>Next</span>
          <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
        </button>
        <p className="supply_text" data-aos="fade-up">
          Your staked amount is sufficient to purchase a node.
        </p>
      </div>
    </SupplyUI>
  );
};
