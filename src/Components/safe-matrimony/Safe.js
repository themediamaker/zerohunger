
"use client"

import { useState } from 'react';
import FirstTab from "../../Components/safe-matrimony/FirstTab"
import Report from "../../Components/safe-matrimony/Report"
const Safe = () => {
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
                    <li className={`px-4 py-2 ${activeTab === 'first' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('first')}>Home</li>
                    <li className={`px-4 py-2 ${activeTab === 'second' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('second')}>Contact Police</li>
                    <li className={`px-4 py-2 ${activeTab === 'third' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('third')}>Report Abuse</li>
                </ul>

                {/* Tab Contents */}
                <div id="tab-contents">
                    <div id="first" className={`p-4 ${activeTab === 'first' ? '' : 'hidden'}`}>
                        <FirstTab />
                    </div>

                    <div id="second" className={`p-4 ${activeTab === 'second' ? '' : 'hidden'}`}>

                    <div className='w-full flex'>

                    <div className='w-1/2 mr-4'>
                    <p className="font-bold">Contact Police</p>
           
                    <p className="text-sm mt-5">In case you want to complain about a fraudster, please reach the following in your city:</p>
<div className='mt-5'>
<ul>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://www.cyberpolicebangalore.nic.in/">Bangalore</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://www.mppolice.gov.in/Static/CyberCrimePresentations.aspx">Bhopal</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://bhubaneswarcuttackpolice.gov.in/">Bhubaneswar</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="#">Chandigarh</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="#">Chennai</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://www.cyberabadpolice.gov.in/">Hyderabad</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://kolkatapolice.gov.in/ComputerandInternet.aspx">Kolkata</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="#">Lucknow</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="#">Mumbai</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="#">New Delhi</a></li>
    <li className="py-2 bg-gray-300 rounded-md mb-1"><a className="text-blue-500 text-sm px-2" href="https://keralapolice.gov.in/">Trivandrum</a></li>
</ul>
</div>
</div>





<div className='w-1/2 ml-4'>
<div className='mt-2'>
<p className="font-bold">Contact Us</p>
<p>........................................................................................................................................</p>
</div>
    <div className="text-sm">



  

<p className="font-bold">Matrimony.com Helpline</p>
<p>Report any profile you find suspicious or wrongly misrepresenting themselves. Reach us and we shall assist you.</p>
<p>Phone: <a href="tel:+7055146473">+91-7055146473</a></p>
<p>Email: <a href="mailto:helpdesk@bharatmatrimony.com">helpdesk@sonalsoulmates.com.com</a><br /></p>
<div className='w-1/2 mt-4'>
<p className="font-bold mt-4">Cyber Cell Contact Details:</p>
<p>Any acts related to identity theft, e-mail scams, and obscene content can also be reported to the Cyber Cell.</p>
<p>Find Details Here</p>
</div>
      
    </div>

</div>

</div>

                  

                    </div>
                    <div id="third" className={`p-4 ${activeTab === 'third' ? '' : 'hidden'}`}>
                    <Report/>
                    </div>

                </div>
            </div>













        </>
    )
}

export default Safe