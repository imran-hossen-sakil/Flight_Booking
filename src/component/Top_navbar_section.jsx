import React from 'react'

function Top_navbar_section() {
  return (
    <div>
        <nav className="relative flex items-center justify-between bg-gray-400 h-24 sm:h-10 md:justify-center mr-4" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            </div>
            <div className="mt-4 md:flex md:space-x-10 md:justify-center list-none">
                <li>
                    <a href="#" className="text-base font-normal text-white list-none hover:text-gray-900"
                        target="">Support's</a>
                </li>
                <li>
                <a href="#"><span className="sr-only">Company Name</span>
                        <img className="w-auto mb-2 h-8 sm:h-10" src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png" loading="lazy" width="202" height="40"/>
                    </a>
                </li>
            </div>
            <div className="p-2 md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex rounded-full shadow">
                    <div href="#" className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-gray-400 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                        Sign in
                    </div>
                    <div className="inline-flex rounded-full shadow">
                        <div href="#" className="inline-flex items-center px-4 py-1 text-base text-gray-900 bg-gray-400 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                            Sign in
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Top_navbar_section
