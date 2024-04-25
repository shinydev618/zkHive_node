import { Props } from "./types";

import { TimeLine as TimeLineComponent } from "./style";

export const TimeLine = ({ steps, active, children, setStep }: Props) => {
  const getColor = (index: number) => {
    const color =
      active > index ? "#000000" : active === index ? "#FBDA00" : "#454511";
    return color;
  };
  return (
    <TimeLineComponent>
      <div className="time_line">
        {steps.map((item, index) => (
          <div
            className={`step ${active === index ? "active" : ""} ${
              steps.length - 1 === index ? "last" : ""
            }`}
            key={index}
          >
            <p className={index > active ? "step_label" : ""}>{item.label}</p>
            <div
              className="count"
              onClick={active > index ? () => setStep(index) : undefined}
            >
              <p
                style={{
                  color: getColor(index),
                }}
              >
                {index + 1}
              </p>
              <img
                src={
                  active > index
                    ? "/assets/images/time-line-step-fill.png"
                    : active === index
                    ? "/assets/images/time-line-step-unfill.png"
                    : "/assets/images/time-line-step-desabled.png"
                }
                alt=""
              />
            </div>
          </div>
        ))}
        <div className="line"></div>
      </div>
      {children}
    </TimeLineComponent>
  );
};
