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

const steps = [
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
];

export const BuyNodes = () => {
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState<"Basic" | "Advanced" | "Full" | undefined>();
  const [ethPay, setETHPay] = useState(0);

  return (
    <BuyNodesComponent>
      <div className="content container">
        <h1>Buy ZKHIVE NODE</h1>

        {step === 4 ? (
          <Congratulations />
        ) : (
          <TimeLine setStep={setStep} active={step} steps={steps}>
            <div className="step_content_wrapper">
              <PricePlans
                step={step}
                setStep={setStep}
                plan={plan}
                setPlan={setPlan}
                setETHPay={setETHPay}
              />
              {step === 1 || step > 1 ? (
                <Checked step={step} setStep={setStep} />
              ) : (
                ""
              )}
              {step === 2 || step > 2 ? <Supply setStep={setStep} /> : ""}
              {step === 3 || step > 3 ? (
                <Purchase setStep={setStep} ethPay={ethPay} plan={plan} />
              ) : (
                ""
              )}
            </div>
          </TimeLine>
        )}
      </div>
    </BuyNodesComponent>
  );
};
