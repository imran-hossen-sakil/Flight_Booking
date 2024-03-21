import { useState } from 'react'
import './App.css'

import Navbar_section from './component/Navbar_section'





function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        < Navbar_section />
      </>
      
  )
}

export default App
