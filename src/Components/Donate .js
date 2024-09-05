import React from 'react';
import Link from 'next/link';

const Donate = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:w-2/3 w-full px-4">
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Enter Your Donation</h3>
                            <form>
                                <div className="flex items-center">
                                    <input type="number" className="form-input rounded-l-md border-gray-300 shadow-sm flex-1" />
                                    <span className="text-lg font-medium px-3">$</span>
                                    <span className="text-lg font-medium">.00</span>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="First Name" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Last Name" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Email Address" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Address" />
                                    </div>
                                    <div>
                                        <select className="form-select rounded-md border-gray-300 shadow-sm">
                                            <option value="Country">Country</option>
                                            <option value="usa">Usa</option>
                                            <option value="uk">Uk</option>
                                            <option value="pakistan">Pakistan</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="india">India</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <textarea className="form-textarea rounded-md border-gray-300 shadow-sm w-full" placeholder="Leave a Comment"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Payment Info</h3>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Card Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Card Code (CVC)" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="Billing Address" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm" placeholder="City" />
                                    </div>
                                    <div>
                                        <select className="form-select rounded-md border-gray-300 shadow-sm">
                                            <option value="Country">Country</option>
                                            <option value="usa">Usa</option>
                                            <option value="uk">Uk</option>
                                            <option value="pakistan">Pakistan</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="india">India</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Donate Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full px-4">
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                            <div className="mb-4">
                                <img src="/images/img15.jpg" alt="" className="w-full rounded-lg" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                <Link href="/causes-detail"><a className="text-blue-600 hover:underline">They Want to Study</a></Link>
                            </h3>
                            <ul className="list-disc list-inside mb-4">
                                <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                <li><i className="fa fa-line-chart"></i> Raised: <span>$25,270</span></li>
                            </ul>
                            <p className="text-gray-600">Raised by 25 donors</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img src="/images/author-avatar.jpg" alt="" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <span className="text-gray-600 text-sm">Created April 11, 2018</span>
                                    <h4 className="text-lg font-semibold mt-1">Organizer: <a href="#" className="text-blue-600 hover:underline">Jessica Smith</a></h4>
                                    <ul className="list-disc list-inside mt-2 text-gray-600">
                                        <li><i className="fa fa-tag"></i> Education</li>
                                        <li><i className="fa fa-map-marker"></i> Wrightwood, Canada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
