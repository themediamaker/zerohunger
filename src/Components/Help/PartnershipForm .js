import React, { useState } from 'react';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    businessNature: '',
    phone: '',
    email: '',
    address: '',
    partnershipDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Partner with SonalSoulmateMatrimony</h2>
      <form className='w-1/2' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="organization" className="block font-medium mb-1">Organisation / Company</label>
          <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="businessNature" className="block font-medium mb-1">Nature of Business</label>
          <input type="text" id="businessNature" name="businessNature" value={formData.businessNature} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">Contact Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">E-mail</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-1">Contact Address</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="partnershipDetails" className="block font-medium mb-1">Details / Queries about Partnership</label>
          <textarea id="partnershipDetails" name="partnershipDetails" value={formData.partnershipDetails} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default PartnershipForm;
