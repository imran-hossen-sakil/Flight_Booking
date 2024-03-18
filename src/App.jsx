import { useState } from 'react'
import './App.css'
import Top_navbar_section from './component/Top_navbar_section'
import Navbar_section from './component/Navbar_section'
import About_section from './component/About_section'






function App() {
  const [count, setCount] = useState(0)

  return (
      <>

        < Top_navbar_section />
        < Navbar_section />
        < About_section />



  
      </>
      
  )
}

export default App
