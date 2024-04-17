import { useState } from "react";
import { TimeLine } from "../../components";
import { BuyNodes as BuyNodesComponent } from "./style";
import {
  Checked,
  Congratulations,
  PricePlans,
  Purchase,
  Supply,
} from "./common";

export const BuyNodes = () => {
  const [step, setStep] = useState(0);

  return (
    <BuyNodesComponent>
      <div className="container content">
        <h1 data-aos="fade-up">Buy SVPN NODE</h1>

        {step === 4 ? (
          <Congratulations />
        ) : (
          <TimeLine
            active={step}
            steps={[
              {
                label: "Step",
              },
              {
                label: "Step",
              },
              {
                label: "Step",
              },
              {
                label: "Step",
              },
            ]}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <PricePlans setStep={setStep} />
              {step == 1 || step > 1 ? <Checked setStep={setStep} /> : ""}
              {step == 2 || step > 2 ? <Supply setStep={setStep} /> : ""}
              {step == 3 || step > 3 ? <Purchase setStep={setStep} /> : ""}
            </div>
          </TimeLine>
        )}
      </div>
    </BuyNodesComponent>
  );
};
