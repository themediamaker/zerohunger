import React from 'react'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="min-w-screen min-h-screen bg-grey-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white  p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-red-500 mb-10"> Profile Not Found </h1>
            <p>This profile you're looking for isn't available.</p>
            <p>Try searching again or use the Go Back button below.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">
              <Link href={'/user/dashboard'}>
              <i className="mdi mdi-arrow-left mr-2"></i>Go Back
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          {/* Your other content goes here */}
        </div>
      </div>
    </div>
  )
}

export default PageNotFound