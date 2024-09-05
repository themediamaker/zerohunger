import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-gray-800 text-center py-12 h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="mb-6">
                            <img src="/images/section-icon.png" alt="section-icon" className="mx-auto" />
                        </div>
                        <h2 className="text-5xl font-bold text-white ">
                        Our fingerprints on the lives 
                        </h2>
                        <p className='text-5xl font-bold text-white mb-6'>we touch never fade</p>
                        <button className="relative bg-orange-500 text-white px-6 py-3 rounded-md transform hover:bg-yellow-500 transition-colors duration-300 overflow-hidden before:content-[''] before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:border-t-4 before:border-r-4 before:border-transparent before:border-r-orange-500 before:rotate-45 before:transform before:origin-bottom-right hover:before:border-r-yellow-500">
                            Start Donation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
