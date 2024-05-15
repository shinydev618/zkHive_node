import { ReactNode } from "react";

export type Props = {
  src?: string;
  value: number | ReactNode;
  title?: string | ReactNode;
  isButton?: boolean;
  buttonTitle?: string;
  nodeId?: string;
};
