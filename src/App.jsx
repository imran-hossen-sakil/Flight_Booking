import { useState } from 'react'
import './App.css'
import Top_navbar_section from './component/Top_navbar_section'
import Navbar_section from './component/Navbar_section'
import Unaccompanied_section from './component/Unaccompanied_section'
import Loading_section from './component/Loading_section'
import Error_page from './component/Error_page'






function App() {
  const [count, setCount] = useState(0)

  return (
      <>

        < Top_navbar_section />
        < Navbar_section />
        < Unaccompanied_section />
        < Loading_section />
        < Error_page />



  
      </>
      
  )
}

export default App
