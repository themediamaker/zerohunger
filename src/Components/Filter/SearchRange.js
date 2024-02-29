
import React, { useState } from 'react';
import Select from 'react-select';

const SearchRange = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <div>
   <header>Select Age</header>
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
    <p>To</p>
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  </div>
  )
}

export default SearchRange