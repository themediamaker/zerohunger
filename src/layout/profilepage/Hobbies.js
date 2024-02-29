"use client"
import React, { useState, useEffect, useRef } from 'react';
import { hobbies } from '../../Utils/HobbieData';
import { musicGenres } from '../../Utils/HobbieData';
import { readingInterests } from '../../Utils/HobbieData';
import { movieGenres } from '../../Utils/HobbieData';
import { cuisines } from '../../Utils/HobbieData';
import { sportsAndFitness } from '../../Utils/HobbieData';
import { languages } from '../../Utils/HobbieData';
import CloseIcon from '@mui/icons-material/Close';
const Hobbies = () => {

    const [selectedHobby, setSelectedHobby] = useState(null);
    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const toggleSelectedHobby = (hobby) => {
        setSelectedHobbies(prevSelectedHobbies => {
            if (prevSelectedHobbies.includes(hobby)) {
                return prevSelectedHobbies.filter(selectedHobby => selectedHobby !== hobby);
            } else {
                return [...prevSelectedHobbies, hobby];
            }
        });
    };

    const isHobbySelected = (hobby) => {
        return selectedHobbies.includes(hobby);
    };


    function chunkArray(array, size) {
        const chunkedArr = [];
        let index = 0;
        while (index < array.length) {
            chunkedArr.push(array.slice(index, size + index));
            index += size;
        }
        return chunkedArr;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can submit the selectedHobbies data to your backend or perform any other actions
        console.log("Selected hobbies:", selectedHobbies);
    };




    return (
        <>


            <div class="hobbies-container flex flex-wrap gap-2">

                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Hobbies & Interests
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Music
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reading
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Movie and TV shows
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sports and Fitness
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Food
                </button>
                <button class="hobby-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Spoken
                </button>
            </div>



            <form onSubmit={handleSubmit}>
                <div className="container mx-auto py-10 flex justify-center h-screen">
                    <div className="w-full pl-4 h-full flex flex-col">
                        <div className="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">


                            <h3 class="font-bold pl-10">Choose your Hobbies & Interests</h3>
                            {chunkArray(hobbies, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}


                            <h3 class="font-bold pl-10">Choose the music genres you listen to</h3>




                            {chunkArray(musicGenres, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}

                            <h3 class="font-bold pl-10">Choose the type of books you read</h3>


                            {chunkArray(readingInterests, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}

                            <h3 class="font-bold pl-10">Choose the type of movies you watch</h3>
                            {chunkArray(movieGenres, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}

                            <h3 class="font-bold pl-10">Select Sports/ Fitness Activities/ Games</h3>
                            {chunkArray(sportsAndFitness, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}


                            <h3 class="font-bold pl-10">Choose your favourite cuisine</h3>
                            {chunkArray(cuisines, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}



                            <h3 class="font-bold pl-10">Choose the languages you know</h3>
                            {chunkArray(languages, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-center px-5 py-3">
                                    {row.map((hobby, index) => {

                                        return (
                                            <div key={index} className="relative w-1/5"> {/* Adjusted width here */}
                                                <button
                                                    className={`middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 font-sans text-xs uppercase text-black-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${isHobbySelected(hobby) ? 'bg-pink-500' : ''}`}
                                                    data-ripple-dark="true"
                                                    onClick={() => toggleSelectedHobby(hobby)}
                                                >

                                                    {hobby}
                                                    {isHobbySelected(hobby) && <CloseIcon fontSize="small" />}
                                                </button>

                                            </div>
                                        );
                                    })}
                                </div>
                            ))}




                        </div>

                    </div>


                </div>



                <div className="flex justify-center mt-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>









        </>
    )
}

export default Hobbies