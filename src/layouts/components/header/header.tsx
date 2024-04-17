import { Link } from "react-router-dom";
import { Header as HeaderComponent } from "./style";
import { HEADER_LINKS } from "../../../constants";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

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
            <button>0dxkjhd....JeB73m</button>
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
