import React, { useState } from 'react';

import {helpfeedback} from "../../Utils/Allapiurl";
import { makeRequest } from '@/src/Utils/Api';
function MatrimonyForm() {
  const [name, setName] = useState('');
  const [matrimonyID, setMatrimonyID] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      matrimonyID: matrimonyID,
      priority: priority,
      category: category,
      feedback: feedback,
    };
console.log(data,)
    try {
      const response = await makeRequest('post', helpfeedback, data);
      console.log('Response from API:', response.data);
     
    } catch (error) {
      console.error('Error adding matrimony feedback:', error.message);
 
    }
  };
















  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Matrimony Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="matrimonyID" className="block font-medium mb-1">Matrimony ID</label>
          <input type="text" id="matrimonyID" value={matrimonyID} onChange={(e) => setMatrimonyID(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-medium mb-1">Priority</label>
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full p-2 border rounded-md">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1">Category</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-medium mb-1">Suggestions / Feedback</label>
          <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default MatrimonyForm;
