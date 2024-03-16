import { useState } from 'react'
import './App.css'
import Footer_section from './component/Footer_section'
import Best_travel_section from './component/Best_travel_section'
import Top_navbar_section from './component/Top_navbar_section'
import Navbar_section from './component/Navbar_section'
import Hero_section from './component/Hero_section';
import Travel_Support_section from './component/Travel_Support_section'
import Login_section from './component/Login_section'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

        < Top_navbar_section />
        < Navbar_section />
        < Hero_section />
        < Travel_Support_section />
        < Best_travel_section />
        < Login_section />
        < Footer_section />
        
      </>
      
  )
}

export default App
