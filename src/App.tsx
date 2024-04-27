import "react-notifications/lib/notifications.css";
import { Layout } from "./layouts/layout";
import { Route, Routes } from "react-router-dom";
import { BuyNodes, MyNodes, Node } from "./pages";
import HomePage from "./pages/home/home";
import { Subscription } from "./pages/subscription";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const someRequest = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  };

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".content_ring");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

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
