"use client"

import { useState } from 'react';
import SuccessCouple from "../Success/SuccessCouple"
import SuccessCoupleInterview from "../Success/SuccessCoupleInterview"
import Video from "../Success/Video"
import Magazines from "../Success/Magazines"
import MarriageForm from "../Success/MarriageForm "
const SucessStory = () => {


    const [activeTab, setActiveTab] = useState('first');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };






    return (
        <>



            <div className="w-full mt-4 rounded">
                {/* Tabs */}
                <ul className="inline-flex w-full px-1 pt-2">
    <li className={`px-4 py-2 ${activeTab === 'first' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer hover:text-blue-600' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('first')}>Success Stories</li>
    <li className={`px-4 py-2 ${activeTab === 'second' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer hover:text-blue-600' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('second')}>Success Couples Interview </li>
    <li className={`px-4 py-2 ${activeTab === 'third' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer hover:text-blue-600' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('third')}>Videos</li>
    <li className={`px-4 py-2 ${activeTab === 'fourth' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer hover:text-blue-600' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('fourth')}>Magazines</li>
    <li className={`px-4 py-2 ${activeTab === 'fifth' ? '-mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t cursor-pointer hover:text-blue-600' : 'font-semibold text-gray-800 rounded-t opacity-50'}`} onClick={() => handleTabClick('fifth')}>Post Your Success Story</li>
</ul>

                {/* Tab Contents */}
                <div id="tab-contents">
                    <div id="first" className={`p-4 ${activeTab === 'first' ? '' : 'hidden'}`}>
                        <SuccessCouple />
                    </div>

                    <div id="second" className={`p-4 ${activeTab === 'second' ? '' : 'hidden'}`}>
                        <SuccessCoupleInterview />
                    </div>
                    <div id="third" className={`p-4 ${activeTab === 'third' ? '' : 'hidden'}`}>
                        <Video />
                    </div>
                    <div id="fourth" className={`p-4 ${activeTab === 'fourth' ? '' : 'hidden'}`}>
                        <Magazines />
                    </div>
                    <div id="fifth" className={`p-4 ${activeTab === 'fifth' ? '' : 'hidden'}`}>
                        <MarriageForm />
                    </div>
                </div>
            </div>





        </>
    )
}

export default SucessStory