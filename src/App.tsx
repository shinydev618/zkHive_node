import 'react-notifications/lib/notifications.css'
import { Layout } from './layouts/layout'
import { Route, Routes } from 'react-router-dom'
import { BuyNodes, MyNodes, Node } from './pages'
import HomePage from './pages/home/home'
import { Subscription } from './pages/subscription'
import { useContext, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { getMyNode } from './libs/fucntions'
import { RefContext } from './libs/RefContext'
import { Modal } from './components/modal'

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [open, setOpen] = useState(
    () => localStorage.getItem('terms') !== 'true'
  )
  const someRequest = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500))
  }
  const { isConnected, address } = useAccount()
  const { setDataMyNode }: any = useContext(RefContext)

  const handleGetMyNode = async (address: any) => {
    // console.log("connected address:", address);
    const resMyNode = await getMyNode(address)
    setDataMyNode(resMyNode)
  }

  useEffect(() => {
    if (isConnected) {
      handleGetMyNode(address)
    }
  }, [isConnected, address])

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector('.content_ring')
      if (loaderElement) {
        loaderElement.remove()
        setLoading(!isLoading)
      }
    })
  })

  if (isLoading) {
    //
    return null
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/subcription' element={<Subscription />} />
          <Route path='/node/:id' element={<Node />} />
          <Route path='/my-node' element={<MyNodes />} />
          <Route path='/buy-node' element={<BuyNodes />} />
        </Routes>
        {open ? <Modal setOpen={setOpen} open={open} /> : ''}
      </Layout>
    </>
  )
}

export default App
