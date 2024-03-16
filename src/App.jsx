import { useState } from 'react'
import './App.css'
import Footer_section from './component/Footer_section'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="">
        <h1 className="text-blue-800 font-bold text-4xl text-center mt-11">Hey React js Developer</h1>

        < Footer_section />
      </div>
      
  )
}

export default App
