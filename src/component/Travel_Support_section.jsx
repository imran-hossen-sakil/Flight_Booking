import React from 'react'

function Travel_Support_section() {
  return (
    <div className='border-2 border-orange-900 max-w-screen-xl mx-auto rounded-xl'><br />

      <h1 className="text-center font-mono text-blue-800 text-4xl font-bold">Travel Support</h1>
      <h1 className="text-center font-mono text-gray-800 text-2xl">Plan Your Travel Width Confidence.</h1>
      <h1 className="text-center font-mono text-gray-800 text-sm">Find help with your bookings and travel plans,  and see what to expert along your journey..</h1><br /><br />
      
    <div className="flex">
      <div className="w-full md:w-1/2 bg-white p-14 mx-auto">
          <form>
            <div className="mb-4"><br />
              <label className="block text-lg font-bold "><span className="bg-blue-900 px-3 p-1 rounded-full text-white text-bold mr-2 ">01</span>Travel requirement for US</label>
              <label className="block text-sm text-gray-500 ml-14 font-semibold">In publishing and graphic design, Lorem ipsum <br /> is a placeholder text commonly </label>
            </div>
            <div className="mb-4"><br /><br />
              <label className="block text-lg font-bold "><span className="bg-lime-900 px-3 p-1 rounded-full text-white text-bold mr-2 ">02</span>Multi-risk travel insurance</label>
              <label className="block text-sm text-gray-500 ml-14 font-semibold">In publishing and graphic design, Lorem ipsum <br /> is a placeholder text commonly </label>
            </div>
            <div className="mb-4"><br /><br />
              <label className="block text-lg font-bold "><span className="bg-yellow-600 px-3 p-1 rounded-full text-white text-bold mr-2 ">03</span>Travel requirements by destination</label>
              <label className="block text-sm text-gray-500 ml-14 font-semibold">In publishing and graphic design, Lorem ipsum <br /> is a placeholder text commonly </label>
            </div>
          </form>
      </div>
            <div className="hidden md:block p-14 w-full md:w-1/2">
                <img src="./assets/travel_Support.png" alt="Flight Image" className="object-cover w-full h-full" />
            </div>
      </div>

    </div>
  )
}

export default Travel_Support_section
