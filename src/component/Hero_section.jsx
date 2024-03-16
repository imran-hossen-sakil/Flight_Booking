import React from 'react'

function Hero_section() {
  return (
    <div>
      <h1 className="text-center font-mono text-blue-800 text-3xl">Find And Book</h1>
      <h1 className="text-center font-mono text-blue-800 text-3xl" >A Great Experience</h1>
      {/* <img src={require('../assets/flight.png')} /> */}
      <img src="https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"
        class="max-w-sm mx-auto rounded-full border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
        alt="Plen Fly" /><br />
    </div>
  )
}

export default Hero_section
