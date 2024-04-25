import { useNavigate } from "react-router-dom";
import { Card } from "./style";
import { Props } from "./types";

export const NodeCard = ({ data }: any) => {
  const navigate = useNavigate();

  return (
    <Card
      data-aos="zoom-in"
      onClick={() => navigate(`/node/${data.id}`, { state: data })}
    >
      <p>{data.type}</p>
      <img src={"/assets/images/node-btn.png"} alt="" />
    </Card>
  );
};
