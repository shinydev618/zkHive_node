import { useNavigate } from "react-router-dom";
import { Card } from "./style";
import { Props } from "./types";

export const NodeCard = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <Card data-aos="zoom-in" onClick={() => navigate("/node/1")}>
      <p>{title}</p>
      <img src={"/assets/images/node-btn.png"} alt="" />
    </Card>
  );
};
