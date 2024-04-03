import { useState } from 'react'
import './App.css'
import Navbar_section from './component/user_common/Navbar_section'
import Hero_section from './component/user_common/Hero_section';
import Contact_section from './component/Contact_section';
import Error_page from './component/Error_page';
import Registrar_section from './component/Registrar_section';








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar_section />
      < Hero_section />
      < Contact_section />
      < Error_page />
      < Registrar_section />

    </>    
  )
}

export default App
