import React, { useState } from 'react';

const DeleteProfile = () => {
  const [selectedReason, setSelectedReason] = useState('');

  const handleRadioChange = (event) => {
    setSelectedReason(event.target.value);
  };


  return (
    <div>

<div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Delete Profile</h2>
      <p>Please choose a reason for profile deletion.</p>

      <div className="mt-4">
        <input 
          type="radio" 
          id="marriageFixed" 
          name="deleteReason" 
          value="MARRIAGE FIXED"
          onChange={handleRadioChange}
          checked={selectedReason === 'MARRIAGE FIXED'}
        />
        <label htmlFor="marriageFixed" className="ml-2 mr-4">MARRIAGE FIXED</label>

        <input 
          type="radio" 
          id="married" 
          name="deleteReason" 
          value="MARRIED"
          onChange={handleRadioChange}
          checked={selectedReason === 'MARRIED'}
        />
        <label htmlFor="married" className="ml-2 mr-4">MARRIED</label>

        <input 
          type="radio" 
          id="otherReasons" 
          name="deleteReason" 
          value="OTHER REASONS"
          onChange={handleRadioChange}
          checked={selectedReason === 'OTHER REASONS'}
        />
        <label htmlFor="otherReasons" className="ml-2">OTHER REASONS</label>
      </div>

      <p className="text-red-500 mt-2">NOTE: If you delete your profile, it cannot be restored.</p>
    </div>


    
    </div>
  )
}

export default DeleteProfile