import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Selectlist = ({headlabel,options,defultvalue,name,setselectlist,disabled=false}) => {
    const [selectedValue, setSelectedValue] = useState(defultvalue);
    const [showOptions, setShowOptions] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectChange = (value) => {
        setSelectedValue(value);
        setselectlist(value)
        setShowOptions(false);
    };

    const handleShowMoreToggle = () => {
        setShowOptions(!showOptions);
    };

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
     
            <div className="max-w-md mx-auto">
                <label htmlFor="select" className="block text-sm font-medium leading-6 text-white">{headlabel}</label>
                <div className="relative">
                    <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                        <input
                            value={selectedValue}
                            name={name}
                            id={name}
                            className="px-6 appearance-none outline-none text-gray-800 w-full"
                            readOnly
                            onClick={handleShowMoreToggle}
                            disabled={disabled}
                        />

                        <button
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                            onClick={handleShowMoreToggle}
                        >
                           <CloseIcon/>
                        </button>
                    </div>

                    <input
                        type="checkbox"
                        name="show_more"
                        id="show_more"
                        className="hidden peer"
                        checked={showOptions}
                        // disabled={disabled}
                    />
                    <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-20">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 border-b border-gray-200"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            disabled={disabled}
                        />
                        {filteredOptions.map((option) => (
                            <div
                                key={option}
                                className="cursor-pointer group"
                                onClick={() => handleSelectChange(option)}
                            >
                                <a
                                    className={`block p-2 border-transparent border-l-4 group-hover:border-blue-600 ${selectedValue === option ? 'border-blue-600 bg-gray-100' : ''
                                        }`}
                                >
                                    {option}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            {/* <a
                // href="https://www.buymeacoffee.com/dgauderman"
                target="_blank"
                rel="noopener noreferrer"
                className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce"
            >
                <img
                    src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                    alt="Buy Me A Coffee"
                    className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
                />
            </a> */}
        </div>
    );
};

export default Selectlist;