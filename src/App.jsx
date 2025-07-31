
import React from 'react'
import Content1 from './Components/Content1'
import Image from './Components/IMAGE-FINAL'
import Ending from './Components/Ending'
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <>
      <Content1 />
      <Image />
      <Ending />
      <Analytics />
    </>
  )
}

export default App
