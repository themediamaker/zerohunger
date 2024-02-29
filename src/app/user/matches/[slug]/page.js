'use client'
import React, { useEffect, useState } from 'react';
import ProfileCard from '../../../../Components/profile/ProfileCard';
import ProfileFilter from '../../../../Components/Filter/ProfileFilter';
import SortFilter from '../../../../Components/Filter/SortFilter';
import { CheckBox } from '@mui/icons-material';
import { makeRequest } from '@/src/Utils/Api';
import { allinone } from '../../../../Utils/Allapiurl';
import MatchesContext from '@/src/Context/matches/MatchesContext';
import { useContext } from 'react';
import getCurrentLocation from '../../../../Helper/getCurrentLocation';
import LocationMap from '../../../../Helper/Locationmap';
import { getuserid } from '../../../../Helper/usergetid';
import { decryptData } from '@/src/Utils/SecretData';

const MatchesList = ({ params }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [isallinoneloading, setIsAllInOneLoading] = useState(false);
  const dataPerPage = 3; // Number of items per page
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const { allinonematchesdata, setallinonematchesdata } = useContext(MatchesContext);
  const [showfilter, setShowFilter] = useState('profileFilter');
  const handleOptionChange = (value) => {
    setShowFilter(value);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getuserdetails = getuserid();
  const location = getCurrentLocation();

  useEffect(() => {
    const fetchData = async () => {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 14);
      let agg;
      switch (params.slug) {
        case 'allmatches':
          agg = [
            {
              '$match': {
                'gender': getuserdetails.gender === 'male' ? 'female' : 'male'
              }
            }
          ];
          break;
        case 'newlyjoined':
        case 'nearByMatches':
          agg = [
            {
              '$match': {
                'registered': {
                  '$gte': sevenDaysAgo.toISOString()
                },
                'gender': getuserdetails.gender === 'male' ? 'female' : 'male'
              }
            }
          ];
          break;
        case 'viewedyou':
          agg = [
            { $match: { viewedByYou: getuserdetails.userid } },
            {
              $project: {
                _id: 1,
                name: 1,
                isActive: 1,
                registered: 1,
                age: 1,
                gender: 1,
                eyeColor: 1,
                favoriteFruit: 1,
                company: 1,
                tags: 1,
                viewedByYou: 1
              }
            }
          ];
          break;
        case 'shortlistedyou':
          agg = [
            { $match: { ShortlistedByYou: getuserdetails.userid} },
            {
              $project: {
                _id: 1,
                name: 1,
                isActive: 1,
                registered: 1,
                age: 1,
                gender: 1,
                eyeColor: 1,
                favoriteFruit: 1,
                company: 1,
                tags: 1,
                viewedByYou: 1
              }
            }
          ];
          break;
        default:
          agg = [
            {
              '$match': {
                'gender': getuserdetails.gender === 'male' ? 'female' : 'male'
              }
            }
          ];
      }
      const response = await makeRequest('post', allinone, { agg });
      const decryptedData = JSON.parse(decryptData(response.data));
      setallinonematchesdata(decryptedData);
      setIsAllInOneLoading(true);
      setData(decryptedData); // Set data for pagination
    };
    fetchData();
  }, [params]);

  return (
    <>

    <div>
        <div className="flex pt-4">
          <p className="text-dark font-semibold hover:text-primary text-[1.4rem] transition-colors duration-200 ease-in-out p-6 w-4/6 ">{isallinoneloading && allinonematchesdata.length} Matches based on your partner preferences</p>
          <p className="transition-colors duration-200 ease-in-out p-6 w-2/6 p-4"><label><CheckBox />Show profiles I have not viewed</label></p>
        </div>
      </div>


      <div className='w-full'>
  <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/3 sticky top-0">
      <div className="flex">
        <span
          className={`w-1/2 cursor-pointer ${showfilter === 'profileFilter' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => { handleOptionChange('profileFilter') }}
        >
          Profile Filter
        </span>
        <span
          className={`w-1/2 cursor-pointer ${showfilter === 'sortFilter' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => { setShowFilter('sortFilter') }}
        >
          Sort Filter
        </span>
      </div>
      {showfilter === 'profileFilter' ? <ProfileFilter /> : <SortFilter />}
    </div>

    <div className="w-full md:w-2/3 p-4">
      {isallinoneloading && currentData.map((data, index) => (
        <div key={index} className="mb-4">
          <ProfileCard data={data} />
        </div>
      ))}
      {/* <LocationMap /> */}
    </div>
  </div>

  <div className="flex justify-center">
    <nav className="flex space-x-2" aria-label="Pagination">
      <button onClick={prevPage} disabled={currentPage === 1} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
        Previous
      </button>
      {[...Array(Math.ceil(data.length / dataPerPage)).keys()].map(number => (
        <button key={number} onClick={() => setCurrentPage(number + 1)} className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${currentPage === number + 1 ? 'text-white bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100' : 'text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200'} cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}>
          {number + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={indexOfLastData >= data.length} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
        Next
      </button>
    </nav>
  </div>
</div>




    </>
  );
}

export default MatchesList;
