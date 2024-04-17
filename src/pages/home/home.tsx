import { useLocation } from "react-router-dom";
import { HomeUI } from "./style";

export const HomePage = () => {
  const { pathname } = useLocation();
  return (
    <HomeUI>
      {pathname === "/subcription" ? <h1>Subcription</h1> : <h1>HOME</h1>}
    </HomeUI>
  );
};

export default HomePage;
