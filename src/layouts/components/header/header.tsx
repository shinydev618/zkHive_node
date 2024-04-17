import { Link, useLocation } from "react-router-dom";
import { Header as HeaderComponent } from "./style";
import { HEADER_LINKS } from "../../../constants";
import { useEffect, useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

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
            <button className="btn1">
              <span>0dxkjhd....JeB73m</span>
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
