import React from 'react'

function Group_searching_section() {
  return (
    <div>
      <div class="max-w-screen-lg mx-auto border bg-gray-100">
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






      <div class="">
       <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
        
        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                    <span>Total Products</span>
                </div>

                <div class="text-3xl">
                    50
                </div>

            </div>

        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">

                    <span>Product Inventory</span>
                </div>

                <div class="text-3xl">
                    221
                </div>

            </div>

        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">

                    <span>Average price</span>
                </div>

                <div class="text-3xl">
                    224.75
                </div>

            </div>

        </div>
    </div>
</div>







        <div class="grid grid-cols-1 md:grid-cols-12">


        <div class="bg-white md:col-span-4 p-10 text-gray-900">
        <ul class="flex flex-col gap-2 max-w-[280px] mx-auto mt-24">

<li>
    <details class="group">

        <summary
            class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span class="flex gap-2">
                <span>
                Any-flight
                </span>
            </span>
            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article class="px-4 pb-4">

            <ul class="flex flex-col gap-4 pl-2 mt-4">

                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details class="group">

        <summary
            class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span class="flex gap-2">
                <span>
                2 Passengers
                </span>
            </span>
            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article class="px-4 pb-4">

            <ul class="flex flex-col gap-4 pl-2 mt-4">

                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details class="group">

        <summary
            class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span class="flex gap-2">
                <span>
                Economy
                </span>
            </span>
            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article class="px-4 pb-4">

            <ul class="flex flex-col gap-4 pl-2 mt-4">

                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details class="group">

        <summary
            class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span class="flex gap-2">
                <span>
                Any-flight
                </span>
            </span>
            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article class="px-4 pb-4">

            <ul class="flex flex-col gap-4 pl-2 mt-4">

                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li class="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

        </ul>

        </div>
        <form action="https://fabform.io/f/{form-id}" method="post" class="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane" />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                        <label className="block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                    
                </div>
    
            </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Group_searching_section
