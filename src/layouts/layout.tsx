import { Footer, Header } from "./components";
import { Props } from "./types";

export const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
