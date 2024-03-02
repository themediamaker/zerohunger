
"use client"

import { useState } from 'react';
import PartnershipForm from "../../Components/Help/PartnershipForm "
import MatrimonyForm from "../../Components/Help/MatrimonyForm"
const Help = () => {
    const [activeTab, setActiveTab] = useState('first');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <>




            <nav class="flex w-full bg-sky-blue">

                <img src="/images/Logo.png" alt="Home" />
                <div class="flex justify-end items-center w-full">
                    <h5 class="ml-2">24x7 HELP: INDIA +91-7055146473</h5>
                </div>
            </nav>




            <div className="w-full mt-4 rounded">
                {/* Tabs */}
                <ul className="inline-flex w-full px-1 pt-2">
                    <li className={`px-4 py-2 ${activeTab === 'first' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('first')}>Contact US</li>
                    <li className={`px-4 py-2 ${activeTab === 'second' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('second')}>Business Enquiries</li>
                    <li className={`px-4 py-2 ${activeTab === 'third' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('third')}>Feedback</li>
                </ul>

                {/* Tab Contents */}
                <div id="tab-contents">
                    <div id="first" className={`p-4 ${activeTab === 'first' ? '' : 'hidden'}`}>
                    <div className="w-full b cbgv5 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold  mb-4">
      SonalSoulmateMatrimony Contact Information
      </h2>
      <p className="text-sm mb-4">
        SonalSoulmateMatrimony is eager to help you find your partner at the earliest.
        Our customer service team will be pleased to assist you anytime you have
        a query. You can contact our customer service team in one of the
        following ways:
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Helpline Numbers</h3>
        <ul>
          <li className="mb-1">
            <span className="font-semibold">INDIA:</span> 0-8144-99-88-77
          </li>
          <li>
            <span className="font-semibold">UAE:</span> +971 525060879
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">For payment related queries</h3>
        <p>Call +91 7538895777</p>
      </div>
      <div className="text-center">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Chat Now
        </a>
      </div>
    </div>
                    </div>

                    <div id="second" className={`p-4 ${activeTab === 'second' ? '' : 'hidden'}`}>
            <PartnershipForm/>
                    </div>
                    <div id="third" className={`p-4 ${activeTab === 'third' ? '' : 'hidden'}`}>
              <MatrimonyForm/>
                    </div>

                </div>
            </div>













        </>
    )
}

export default Help