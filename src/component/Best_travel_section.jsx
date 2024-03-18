import React from 'react'

function Best_travel_section() {
  return (
    <div>
        <div className="relative flex w-60 h-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-20 w-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img className="h-6 w-6"  src="https://images.unsplash.com/photo-1500076656116-558758c991c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnRyeXxlbnwwfHwwfHx8MA%3D%3D" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              imran
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base leading-relaxed text-transparent antialiased">
              imran
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#facebook"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Best_travel_section
