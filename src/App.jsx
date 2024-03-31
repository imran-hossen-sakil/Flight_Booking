import { useState } from 'react'
import './App.css'

import Navbar_section from './component/Navbar_section'
import Group_searching_section from './component/Group_searching_section';
import Hero_section from './component/Hero_section';
import Travel_Support_section from './component/Travel_Support_section';
import Travel_memories_section from './component/Travel_memories_section';
import Unaccompanied_section from './component/Unaccompanied_section';
import Best_travel_section from './component/Best_travel_section';
import Footer_section from './component/Footer_section';





function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        < Navbar_section />
        < Hero_section />
        < Group_searching_section />
        < Travel_Support_section />
        < Travel_memories_section />
        < Unaccompanied_section />
        < Best_travel_section />
        < Footer_section />
      </>
      
  )
}

export default App
