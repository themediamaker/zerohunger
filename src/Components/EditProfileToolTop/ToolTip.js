import React, { useEffect, useState } from 'react';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
} from "@material-tailwind/react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { getnumber } from '../../Elements/getnumber'
import { getuserid } from '@/src/Helper/usergetid';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '@/src/Utils/Allapiurl';
import { useRouter } from 'next/navigation';

export const Profilepopover = ({ title }) => {
    const router = useRouter()
    const userid = getuserid()
    const [isOpen, setIsOpen] = useState(true);
    const [iserror, seterror] = useState(false);
    const [pageloading, setpageloading] = useState(false)
    useEffect(() => {
        setpageloading(true)
    })
    const habbitdata = [
        {
            id: 1,
            title: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'Never' : 'Vegetarian',
            name: title == 'Drinking Habits' ? 'drinkinghabbit' : title == 'Smoking Habits' ? 'smokinghabits' : 'eatinghabbit', //|| title == 'Smoking Habits' ? 'Never' : 'vegetarian',
            value: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'Never' : 'vegetarian',
        },
        {
            id: 2,
            title: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'Occasionally' : 'Non-Vegetarian',
            name: title == 'Drinking Habits' ? 'drinkinghabbit' : title == 'Smoking Habits' ? 'smokinghabits' : 'eatinghabbit',
            value: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'occasionally' : 'nonegetarian',
        },
        {
            id: 3,
            title: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'Socially' : 'Eggetarian',
            name: title == 'Drinking Habits' ? 'drinkinghabbit' : title == 'Smoking Habits' ? 'smokinghabits' : 'eatinghabbit',
            value: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'socially' : 'eggetarian',
        },
        {
            id: 4,
            title: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'Regularly' : 'Vegan',
            name: title == 'Drinking Habits' ? 'drinkinghabbit' : title == 'Smoking Habits' ? 'smokinghabits' : 'eatinghabbit',
            value: title == 'Drinking Habits' || title == 'Smoking Habits' ? 'regularly' : 'vegan',
        },
    ]
    // console.log(habbitdata)
    const [formData, setFormData] = useState({
        userid: userid.userid,
        birthcity: '',
        birthstate: '',
        birthcountry: '',
        birthhrs: '',
        birthmins: '',
        birthtime: '',
    })

    const [rashiformdata, setrashiformdata] = useState({
        userid: userid.userid,
        star: '',
        rashi: ''
    })
    const [drinkformdata, setdrinkformdata] = useState({
        userid: userid.userid,
        drinkinghabbit: '',
    })
    const [smokeformdata, setsmokeformdata] = useState({
        userid: userid.userid,
        smokinghabits: '',
    })
    const [eatingformdata, seteatingformdata] = useState({
        userid: userid.userid,
        eatinghabbit: '',
    })

    const handlesave = () => {
        if (title === 'Time of Birth' || title === 'Place of Birth') {

            if (formData.birthcity == '' || formData.birthstate == '' || formData.birthcountry == '' || formData.birthhrs == '' || formData.birthmins == '' || formData.birthtime == '') {
                seterror(true)
            }
            else {
                seterror(false)
                makeRequest('post', profileregister, { data: formData }).then(() => {
                    alert('sucesss')
                    setIsOpen(false)
                })

            }
        }
        else if (title == 'Star / Raasi') {
            if (rashiformdata.star == '' || rashiformdata.rashi == '') {
                seterror(true)
            }
            else {
                seterror(false)
                makeRequest('post', profileregister, { data: rashiformdata }).then(() => {
                    alert('sucesss')
                    setIsOpen(false)
                })
            }
        }
        else if (title == 'Drinking Habits') {
            if (drinkformdata.drinkinghabbit == '') {
                seterror(true)
            }
            else {
                seterror(false)
                makeRequest('post', profileregister, { data: drinkformdata }).then(() => {
                    alert('sucesss')
                    setIsOpen(false)
                })
            }
        }
        else if (title == 'Smoking Habits') {
            if (smokeformdata.smokinghabits == '') {
                seterror(true)
            }
            else {
                seterror(false)
                makeRequest('post', profileregister, { data: smokeformdata }).then(() => {
                    alert('sucesss')
                    setIsOpen(false)
                })
            }
        }
        else if (title == 'Eating Habits') {
            if (eatingformdata.eatinghabbit == '') {
                seterror(true)
            }
            else {
                seterror(false)
                makeRequest('post', profileregister, { data: eatingformdata }).then(() => {
                    alert('sucesss')
                    setIsOpen(false)
                }).then(() => {
                    setpageloading(true)
                    window.location.reload()
                })
            }
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setrashiformdata({ ...rashiformdata, [name]: value });
        setdrinkformdata({ ...drinkformdata, [name]: value });
        setsmokeformdata({ ...smokeformdata, [name]: value });
        seteatingformdata({ ...eatingformdata, [name]: value });

    };
    // console.log(rashiformdata)
    const allpopover = (title) => {
        if (title === 'Time of Birth' || title === 'Place of Birth') {
            return (
                <>
                    <div style={{ padding: '1rem', maxWidth: '400px' }}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-bold"
                            style={{ marginBottom: '0.5rem' }}
                        >
                            Time Of Birth

                        </Typography>

                        <div className="flex flex-wrap gap-2">
                            <select
                                name='birthhrs'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>select hrs</option>
                                {getnumber(12).map((data) => {
                                    return <option value={data}>{data}</option>
                                })}
                            </select>
                            <select
                                name='birthmins'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>select hrs</option>
                                {getnumber(59).map((data) => {
                                    return <option value={data}>{data}</option>
                                })}
                            </select>
                            <select
                                name='birthtime'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>select AM/PM</option>
                                <option value='AM' >AM</option>
                                <option value='PM' >PM</option>

                            </select>
                        </div>

                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-bold mt-4"
                            style={{ marginBottom: '0.5rem' }}
                        >
                            Place of Birth
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                            <select
                                name='birthcountry'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>Select Country</option>
                                <option value='India' >India</option>
                                <option value='U.k' >U.k</option>

                            </select>

                            <select
                                name='birthstate'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>Select State</option>
                                <option value='Haryana' >Haryana</option>
                                <option value='Delhi' >Delhi</option>

                            </select>
                            <select
                                name='birthcity'
                                onChange={(e) => { handleInputChange(e) }}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                                style={{ marginRight: '0.5rem' }}
                            >
                                <option value='' selected>select City</option>
                                <option value='Faridabad' >Faridabad</option>
                                <option value='Delhi' >Delhi</option>

                            </select>

                        </div>

                    </div>
                    {iserror && <span className='text-red-800'>{'Some Filed Are Blank'}</span>}
                </>
            );
        }
        else if (title == 'Star / Raasi') {
            return (
                <>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold mt-4"
                        style={{ marginBottom: '0.5rem' }}
                    >
                        Star
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                        <select
                            name='star'
                            onChange={(e) => { handleInputChange(e) }}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                            style={{ marginRight: '0.5rem' }}
                        >
                            <option value='' selected>select Star</option>
                            <option value='Rohini' >Rohini</option>


                        </select>
                    </div>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold mt-4"
                        style={{ marginBottom: '0.5rem' }}
                    >
                        Raasi / Moon Sign
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                        <select
                            name='rashi'
                            onChange={(e) => { handleInputChange(e) }}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-grow border border-gray-300 rounded-md cursor-pointer"
                            style={{ marginRight: '0.5rem' }}
                        >
                            <option value='' selected>select Raasi-Moon Sign</option>
                            <option value='Vrishabh (Taurus)' >Vrishabh (Taurus)</option>

                        </select>
                        {iserror && <span className='text-red-800'>{'Some Filed Are Blank'}</span>}
                    </div>
                </>
            )
        }
        else if (title == 'Drinking Habits' || title == 'Eating Habits' || title == 'Smoking Habits') {
            return (
                <>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold mt-4"
                        style={{ marginBottom: '0.5rem' }}
                    >
                        {title}
                    </Typography>
                    <div class="flex flex-wrap gap-2">
                        <div class="md:w-2/3 flex">
                            {
                                habbitdata.map((data, index) => {
                                    return (
                                        <>
                                            <div class="items-center ml-2">
                                                <input key={index} type="radio" onChange={(e) => handleInputChange(e)} id="eatingHabitsVegetarian" name={data.name} value={data.value} class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                                <label key={index} for="eatingHabitsVegetarian" class="">{data.title}</label>
                                            </div>
                                        </>
                                    )

                                })
                            }
                        </div>
                    </div>

                </>
            )
        }
        else {
            return (
                <Typography variant="h6" color="blue-gray" className="mb-6">
                    {title}
                </Typography>
            );
        }
    };

    return (
        <>
        {
                pageloading ?
        <div>
            
                    <>
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Button >Add {title}<PlayArrowIcon /> </Button>
                            </PopoverHandler>
                            {
                                isOpen && (
                                    <PopoverContent>
                                        {allpopover(title)}
                                        {iserror && <span className='text-red-800'>{'Some Filed Are Blank'}</span>}
                                        <div className='flex gap-4 mt-4'>
                                            <Button className="flex-shrink-0" onClick={() => { handlesave() }}>Save</Button>
                                        </div>
                                    </PopoverContent>
                                )
                            }
                        </Popover>
                    </>
                   

        </div>
         : ' Please wait....'
            }

        </>
    );
};