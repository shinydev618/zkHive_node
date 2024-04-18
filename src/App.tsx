import { Box } from "@mui/material";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import { Layout } from "./layouts/layout";
import { Route, Routes } from "react-router-dom";
import { BuyNodes, MyNodes, Node } from "./pages";
import HomePage from "./pages/home/home";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subcription" element={<HomePage />} />
          <Route path="/node/:id" element={<Node />} />
          <Route path="/my-node" element={<MyNodes />} />
          <Route path="/buy-node" element={<BuyNodes />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
