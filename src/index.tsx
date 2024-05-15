import "./polyfills";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import RefContextProvider from "./libs/RefContext";
import { NotificationContainer } from "react-notifications";
AOS.init({ duration: 1000, once: true });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
const network = process.env.REACT_APP_IS_TESTNET ==='true' ? sepolia : mainnet;

const config = getDefaultConfig({
  appName: "zkHive Node",
  projectId: "c9bfdfeba6902d82c74c3c748bcd073e",
  chains: [network],
  transports: {
    [mainnet.id]: http("https://ethereum-rpc.publicnode.com"),
    [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
  },
});

root.render(
  <React.StrictMode>
    <RefContextProvider>
      <BrowserRouter>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <App />
              <NotificationContainer />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </BrowserRouter>
    </RefContextProvider>
  </React.StrictMode>
);

reportWebVitals();
