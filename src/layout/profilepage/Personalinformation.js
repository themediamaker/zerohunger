"use client"
import React from 'react'
import { useState } from 'react';

const Personalinformation = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [formData, setFormData] = useState({
      Personalinformation: "I am creating this profile on behalf of my friend. He is currently working in the private sector as a software professional, after having completed his diploma. He comes from a middle-class family with orthodox family values. He belongs to a joint family currently living in Faridabad."
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSave = () => {
      // Handle save logic
      setShowEdit(false);
    };
  
    const handleEdit = () => {
      setShowEdit(!showEdit);
    };
  
    return (
      <div className='flex items-center justify-center overflow-hidden bg-gray-50 p-3'>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-5 p-4">
              {showEdit ? (
                <div className="mb-4">
                  <label htmlFor="Personalinformation" className="block text-gray-700 font-semibold mb-2">Personal Information:</label>
                  <textarea
                    id="Personalinformation"
                    name="Personalinformation"
                    value={formData.Personalinformation}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              ) : (
                <div>
                  <h1>A few words about him</h1>
                  <p className="text-sm text-gray-600">{formData.Personalinformation}</p>
                </div>
              )}
            </div>
            <div className="col-span-1 p-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleEdit}>
                {!showEdit ? "Edit" : 'Close'}
              </button>
              {showEdit && (
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-2 py-2 px-4 rounded " onClick={handleSave}>
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Personalinformation