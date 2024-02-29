import React, { useState, useRef } from 'react';



const SearchableSelect = ({ data, name, emptyOptionsMessage = 'No results match your search.', placeholder = 'Select an option', value }) => {
    const [open, setOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(null);
    const [options, setOptions] = useState(data);
    const [search, setSearch] = useState('');
    const buttonRef = useRef(null);
    const searchRef = useRef(null);

    const closeListbox = () => {
        setOpen(false);
        setFocusedOptionIndex(null);
        setSearch('');
    };

    const focusNextOption = () => {
        if (focusedOptionIndex === null) return setFocusedOptionIndex(Object.keys(options).length - 1);

        if (focusedOptionIndex + 1 >= Object.keys(options).length) return;

        setFocusedOptionIndex(prevIndex => prevIndex + 1);
        scrollIntoView();
    };

    const focusPreviousOption = () => {
        if (focusedOptionIndex === null) return setFocusedOptionIndex(0);

        if (focusedOptionIndex <= 0) return;

        setFocusedOptionIndex(prevIndex => prevIndex - 1);
        scrollIntoView();
    };

    const init = () => {
        if (!(value in options)) value = null;

        setSearch('');
    };

    const selectOption = () => {
        if (!open) return toggleListboxVisibility();

        const selectedOption = Object.keys(options)[focusedOptionIndex];
        value = selectedOption;

        closeListbox();
    };

    const toggleListboxVisibility = () => {
        if (open) return closeListbox();

        setFocusedOptionIndex(Object.keys(options).indexOf(value));

        if (focusedOptionIndex < 0) setFocusedOptionIndex(0);

        setOpen(true);

        setTimeout(() => {
            searchRef.current.focus();
            scrollIntoView();
        }, 0);
    };

    const scrollIntoView = () => {
        const element = document.getElementById(`${name}Option${focusedOptionIndex}`);
        element.scrollIntoView({ block: 'center' });
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
        if (!open || !e.target.value) return setOptions(data);

        const filteredOptions = Object.keys(data)
            .filter(key => data[key].toLowerCase().includes(e.target.value.toLowerCase()))
            .reduce((filtered, key) => {
                filtered[key] = data[key];
                return filtered;
            }, {});

        setOptions(filteredOptions);
    };

    return (
        <div className="max-w-xs mx-auto">
            <div className="relative">
                <button
                    ref={buttonRef}
                    onClick={toggleListboxVisibility}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    className="relative z-0 w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                    <span className="block truncate">{value in options ? options[value] : placeholder}</span>
                    <input
                        ref={searchRef}
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') selectOption();
                            if (e.key === 'ArrowUp') focusPreviousOption();
                            if (e.key === 'ArrowDown') focusNextOption();
                        }}
                        type="search"
                        className="w-full h-full form-control focus:outline-none"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </button>
                {open && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                        <ul
                            ref={searchRef}
                            role="listbox"
                            className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                        >
                            {Object.keys(options).length === 0 && <div className="px-3 py-2 text-gray-900 cursor-default select-none">{emptyOptionsMessage}</div>}
                            {Object.keys(options).map((key, index) => (
                                <li
                                    key={index}
                                    id={`${name}Option${index}`}
                                    onClick={selectOption}
                                    onMouseEnter={() => setFocusedOptionIndex(index)}
                                    onMouseLeave={() => setFocusedOptionIndex(null)}
                                    role="option"
                                    aria-selected={focusedOptionIndex === index}
                                    className={`relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 ${focusedOptionIndex === index ? 'text-white bg-indigo-600' : 'text-gray-900'}`}
                                >
                                    <span className={`block truncate ${focusedOptionIndex === index ? 'font-semibold' : 'font-normal'}`}>{options[key]}</span>
                                    {key === value && (
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchableSelect;
