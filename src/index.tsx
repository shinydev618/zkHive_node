import './polyfills'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import reportWebVitals from './reportWebVitals'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({ duration: 1500, once: true })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

const config = getDefaultConfig({
  appName: 'FishMiner',
  projectId: 'c9bfdfeba6902d82c74c3c748bcd073e',
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
