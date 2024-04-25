import { Link, useLocation } from "react-router-dom";
import { Header as HeaderComponent } from "./style";
import { HEADER_LINKS } from "../../../constants";
import { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { getMyNode } from "../../../libs/fucntions";
import { RefContext } from "../../../libs/RefContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { setDataMyNode }: any = useContext(RefContext);

  const { pathname } = useLocation();
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const connectWallet = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  const handleGetMyNode = async (address: any) => {
    console.log("address:", address);
    const resMyNode = await getMyNode(address);
    setDataMyNode(resMyNode);
  };

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (isConnected) {
      handleGetMyNode(address);
    }
  }, [isConnected, address]);

  return (
    <HeaderComponent className="container">
      <nav>
        <Link to="/">
          <img src="/assets/images/logo.png" alt="" /> <span>zkHive</span>
        </Link>
        <ul className={open ? "active" : ""}>
          {HEADER_LINKS.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
          <li>
            <button className="btn1" onClick={connectWallet}>
              <span>
                {" "}
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(
                      address.length - 4
                    )}`
                  : "Connect wallet"}
              </span>
              <img src={"/assets/images/price-plan-button-fill.png"} alt="" />
            </button>
          </li>
        </ul>

        <div onClick={() => setOpen((prev) => !prev)} className="menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </HeaderComponent>
  );
};
