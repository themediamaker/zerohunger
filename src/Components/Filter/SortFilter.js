"use client"
import React, { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio,FormLabel } from '@material-ui/core';

const SortProfiles = () => {
  const [value, setValue] = useState('LastLogin');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (

    <div className=" flex items-center justify-center">
      <div className="mx-auto w-full lg:w-3/3 rounded-sm border border-gray-200 bg-white shadow-lg p-4">
        <header className="border-b border-gray-100 px-5 py-4">
          <h2 className="text-sl font-semibold text-gray-800">Sort profiles on the basis of</h2>
        </header>

        <div className="overflow-x-auto p-3">
          <table className="w-full">
            <tbody className="divide-x divide-gray-100 text-sm">
              <tr>
                <td className="p-2">
                  <div className="font-bold text-ml text-gray-800">Last Login</div>
                  <div className="text-gray-800">Show recently logged-in members first</div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="LastLogin"
                        value={value}
                        onChange={handleChange}
                        className="flex items-center"
                      >
                        <FormControlLabel value="LastLogin" control={<Radio />}/>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="font-bold text-ml text-gray-800">Dated Created</div>
                  <div className="text-gray-800">Show recently Created profiles first</div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="DatedCreated"
                        value={value}
                        onChange={handleChange}
                        className="flex items-center"
                      >
                        <FormControlLabel value="DatedCreated" control={<Radio />} />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="font-bold text-ml text-gray-800">Latest Photos</div>
                  <div className="text-gray-800">Show member who have added photo recently first</div>
                </td>
                <td className="p-2">
                  <div className="text-left">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        className="flex items-center"
                      >
                        <FormControlLabel value="LatestPhotos" control={<Radio />}  />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-xl font-bold">
          <button className="px-3 py-2 bg-red-500 text-white font-semibold rounded">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SortProfiles;
