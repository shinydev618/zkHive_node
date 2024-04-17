import { Card } from "./style";
import { Props } from "./types";

export const NodeCard = ({ title }: Props) => (
  <Card>
    <p>{title}</p>
    <img src={"/assets/images/node-btn.png"} alt="" />
  </Card>
);
