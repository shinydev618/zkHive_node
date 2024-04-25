import { PurchaseUI } from "./style";
import { Props } from "./types";

export const Purchase = ({ setStep }: Props) => (
  <PurchaseUI data-aos='fade-up'>
    <div className="purchase_title_wrapper">
      <h1>You need to pay a yearly fee of 0.3 ETH to purchase the node.</h1>
    </div>
    <div className="purchase_grid_buttons">
      <button onClick={() => setStep(4)}>
        <span>Pay with ETH</span>
        <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
      </button>
      <button className="pay_with_token">
        <span style={{ color: "#FBDA00" }}>Pay with tokens</span>
        <img src={"/assets/images/price-plan-button.png"} alt="" />
      </button>
    </div>
    <p className="last_text">
      By clicking on “Pay Now”, a Metamask pop-up will appear for processing the
      payment of 0.3 ETH to zkHive Node.
    </p>
  </PurchaseUI>
);
