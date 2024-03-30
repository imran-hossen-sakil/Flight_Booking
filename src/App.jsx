import { useState } from 'react'
import './App.css'

import Navbar_section from './component/Navbar_section'
import Search_output from './component/Search_output'
import Group_searching_section from './component/Group_searching_section';





function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        < Navbar_section />
        < Search_output />
        < Group_searching_section />
      </>
      
  )
}

export default App
