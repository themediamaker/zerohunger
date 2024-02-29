import React, { useState } from 'react';

const MarriageForm = () => {
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [matrimonyId, setMatrimonyId] = useState('');
  const [partnerMatrimonyId, setPartnerMatrimonyId] = useState('');
  const [email, setEmail] = useState('');
  const [engagementDate, setEngagementDate] = useState('');
  const [marriageDate, setMarriageDate] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [telephone, setTelephone] = useState('');
  const [successStory, setSuccessStory] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log({
      brideName,
      groomName,
      matrimonyId,
      partnerMatrimonyId,
      email,
      engagementDate,
      marriageDate,
      address,
      country,
      countryCode,
      telephone,
      successStory
    });
  };

  const handlePhotoChange = (e) => {
    const files = e.target.files;
    setPhotos(files);
  };
  return (
    <div className=" w-1/2 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Share Your Success Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="brideName" className="block text-sm font-medium text-gray-700">Bride Name (Female)</label>
          <input type="text" id="brideName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={brideName} onChange={(e) => setBrideName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="groomName" className="block text-sm font-medium text-gray-700">Groom Name (Male)</label>
          <input type="text" id="groomName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={groomName} onChange={(e) => setGroomName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="matrimonyId" className="block text-sm font-medium text-gray-700">Your Matrimony Id</label>
          <input type="text" id="matrimonyId" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={matrimonyId} onChange={(e) => setMatrimonyId(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="partnerMatrimonyId" className="block text-sm font-medium text-gray-700">Your Partner's Matrimony Id</label>
          <input type="text" id="partnerMatrimonyId" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={partnerMatrimonyId} onChange={(e) => setPartnerMatrimonyId(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="engagementDate" className="block text-sm font-medium text-gray-700">Engagement Date</label>
          <div className="flex items-center">
            <input type="text" id="engagementDate" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="DD" value={engagementDate} onChange={(e) => setEngagementDate(e.target.value)} required />
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full ml-2" placeholder="MM" />
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full ml-2" placeholder="YYYY" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="marriageDate" className="block text-sm font-medium text-gray-700">Marriage Date</label>
          <div className="flex items-center">
            <input type="text" id="marriageDate" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="DD" value={marriageDate} onChange={(e) => setMarriageDate(e.target.value)} required />
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full ml-2" placeholder="MM" />
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full ml-2" placeholder="YYYY" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input type="file" id="photos" name="photos" className="mt-1" multiple onChange={handlePhotoChange} />
        </div>
        <div className="mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea id="address" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country </label>
        <select id="country" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={country} onChange={(e) => setCountry(e.target.value)} required>
        <option value=" ">-Select-</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="98">India</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="222">United States of America</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="220">United Arab Emirates</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="221">United Kingdom</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="13">Australia</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="189">Singapore</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="39">Canada</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="173">Qatar</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="114">Kuwait</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="161">Oman</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="17">Bahrain</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="185">Saudi Arabia</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="129">Malaysia</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="80">Germany</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="153">New Zealand</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="73">France</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="102">Ireland</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="203">Switzerland</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="193">South Africa</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="195">Sri Lanka</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="99">Indonesia</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="149">Nepal</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="162">Pakistan</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="18">Bangladesh</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="1">Afghanistan</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="888">Show more options</option>
      </select>
     
   
        </div>
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code</label>
          <select id="countryCode" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} required>
          <option value=" ">-Select-</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="98">India (+91)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="222">United States of America (+1)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="220">United Arab Emirates (+971)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="221">United Kingdom (+44)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="13">Australia (+61)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="189">Singapore (+65)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="39">Canada (+1)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="173">Qatar (+974)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="114">Kuwait (+965)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="161">Oman (+968)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="17">Bahrain (+973)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="185">Saudi Arabia (+966)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="129">Malaysia (+60)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="80">Germany (+49)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="153">New Zealand (+64)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="73">France (+33)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="102">Ireland (+353)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="203">Switzerland (+41)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="193">South Africa (+27)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="195">Sri Lanka (+94)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="99">Indonesia (+62)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="149">Nepal (+977)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="162">Pakistan (+92)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="18">Bangladesh (+880)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="1">Afghanistan (+93)</option>
        <option style={{ color: "rgb(0, 79, 0)" }} value="no">Show more countries</option>
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
          <input type="tel" id="telephone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="successStory" className="block text-sm font-medium text-gray-700">Success Story</label>
          <textarea id="successStory" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={successStory} onChange={(e) => setSuccessStory(e.target.value)} required />
        </div>
        <div className="mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>




      <div className="max-w-md mx-auto my-4">

      <h2 className="text-2xl font-bold mb-4">A good success story should cover these topics:</h2>
      <ul className="list-disc pl-4">
        <li>How you went about your search for a partner</li>
        <li>How you got to know each other's expectations and decided to proceed further.</li>
        <li>How you and your partner met and established contact.</li>
        <li>Your experience of BharatMatrimony.com</li>
      </ul>
    </div>

    </div>
  );
};

export default MarriageForm;
