import "react-notifications/lib/notifications.css";
import { Layout } from "./layouts/layout";
import { Route, Routes } from "react-router-dom";
import { BuyNodes, MyNodes, Node } from "./pages";
import HomePage from "./pages/home/home";
import { Subscription } from "./pages/subscription";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subcription" element={<Subscription />} />
          <Route path="/node/:id" element={<Node />} />
          <Route path="/my-node" element={<MyNodes />} />
          <Route path="/buy-node" element={<BuyNodes />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
