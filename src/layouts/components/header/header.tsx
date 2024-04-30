import { Link, useLocation } from "react-router-dom";
import { Header as HeaderComponent } from "./style";
import { HEADER_LINKS } from "../../../constants";
import { useContext, useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { getMyNode } from "../../../libs/fucntions";
import { RefContext } from "../../../libs/RefContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { setDataMyNode }: any = useContext(RefContext);
  const [disconnectOpen, setDisconnectOpen] = useState(false)
  const { pathname } = useLocation();
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const connectWallet = () => {
    if (isConnected) {
      setDisconnectOpen(prev => !prev)
    } else {
      if (openConnectModal) {
        openConnectModal();
      }
    }

  };

  const handleGetMyNode = async (address: any) => {
    console.log("connected address:", address);
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


  const handleDisconnect = () => {
    setDisconnectOpen(false)
    disconnect()
    setOpen(false)
  }
  return (
    <HeaderComponent className="container">
      <nav>
        <Link to="/">
          <img src="/assets/images/logo.png" width={"60px"} alt="" />{" "}
          <span>zkHive</span>
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
            <button className={`btn2 ${disconnectOpen ? "disconnect_active" : ""}`} onClick={handleDisconnect} >
              <span>
                Disconnect
              </span>
              <img src={"/assets/images/price-plan-button.png"} alt="" />
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
