import { Box } from '@mui/material'
import styled from 'styled-components'
import 'react-notifications/lib/notifications.css'
import { Layout } from './layouts/layout'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
