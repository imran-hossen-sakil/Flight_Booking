import { useState } from 'react'
import './App.css'
import Best_travel_section from './component/Best_travel_section'
import Top_navbar_section from './component/Top_navbar_section'
import Navbar_section from './component/Navbar_section'
import Hero_section from './component/Hero_section';
import Travel_Support_section from './component/Travel_Support_section'
import Registrar_section from './component/Registrar_section'
import Group_searching_section from './component/Group_searching_section'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

        < Top_navbar_section />
        < Navbar_section />
        < Hero_section />
        < Travel_Support_section />
        < Best_travel_section />
        < Registrar_section />
        <Group_searching_section />

        
      </>
      
  )
}

export default App
