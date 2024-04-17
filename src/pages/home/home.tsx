import { useLocation } from "react-router-dom";
import { HomeUI } from "./style";

export const HomePage = () => {
  const { pathname } = useLocation();
  return (
    <HomeUI>
      <h1 data-aos="fade-up">HOME</h1>
    </HomeUI>
  );
};

export default HomePage;
