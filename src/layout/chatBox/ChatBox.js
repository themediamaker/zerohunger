import { useState } from 'react';

const ChatForm = () => {
    const [isFormVisible, setFormVisibility] = useState(true);

    const toggleFormVisibility = () => {
        setFormVisibility((prevVisibility) => !prevVisibility);
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="w-full">
                <div className={`formbold-form-wrapper mx-auto ${isFormVisible ? '' : 'hidden'} w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white`}>
                    <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9">
                        <h3 className="text-xl font-bold text-white">Let's chat? - Online</h3>
                        <button onClick={toggleFormVisibility} className="text-white">
                            {isFormVisible ? (
                                <svg width="17" height="17" viewBox="0 0 17 17" className="fill-current">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z" />
                                </svg>
                            ) : (
                                <>

                                    <span>Toggle Icon</span> <svg width="17" height="17" viewBox="0 0 17 17" className="fill-current">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                    <form action="https://formbold.com/s/FORM_ID" method="POST" className="py-6 px-9">
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Explain your queries"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Start Chat
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5">
                    {/* <button
                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                        Start Chat
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ChatForm;