import React from 'react'

function Top_navbar_section() {
  return (
    <div>
      <nav className="lg:px-16 px-6 bg-slate-300 shadow-md flex flex-wrap rounded-br-full rounded-bl-full items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center">
            <a href="#" className="flex text-lg font-semibold">
              <div className="mt-2 text-White"></div>
            </a>
          </div>
          <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
              <ul className="text-xl text-center items-center gap-x-5 pt-6 pb-6 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                <li className="pt-4 lg:py-0 ">
                  <a className="pt-4 text-black hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                    href="#">Sing up
                  </a>
                </li>
                <li className="py-2 lg:py-0 ">
                  <a className="text-black hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                    href="#">Sing in
                  </a>
                </li>
              </ul>
            </nav>
          </div>
      </nav>
    </div>
  )
}

export default Top_navbar_section
