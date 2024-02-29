
"use client"
import './globals.css'
import React, { useState } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CountryCode from '../Data/CountryCode';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import FormBtn from '@/Elements/Buttons/FormBtn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Register from '../Auth/register/Register';
import { useEffect } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
export default function Home() {
    const [isRegistershow, setShowRegister] = useState(false)
    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
            // Scroll position
            const scrollY = window.scrollY;
            if (scrollY > 500) {
                setShowRegister(true)
            }
            else {
                setShowRegister(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const router = useRouter();
    const defaultprofile = [
        {
            id: 1,
            name: "Matrimony profile for"
        },
        {
            id: 2,
            name: "Myself"
        },

        {
            id: 3,
            name: "Daughter"
        },
        {
            id: 4,
            name: "Son"
        },
        {
            id: 5,
            name: "Sister"
        },
        {
            id: 6,
            name: "Brother"
        },
        {
            id: 7,
            name: "Relative"
        },
        {
            id: 8,
            name: "Friend"
        },
    ]
    const [LookingProfile, setLookingProfile] = useState('');

    const [Name, setName] = useState("");
    const [PhoneCode, setPhoneCode] = useState('');
    const [Mobileno, setMobileno] = useState('');

    const handleClick = (event) => {
        event.preventDefault();

        if (Name !== "" && PhoneCode !== "" && Mobileno !== "" && LookingProfile !== "") {
            router.push('/auth/register');
        } else {


        }
    }

    return (

        < >

            <div className='dashboard-main'>
                <div>
                    <img src='/images/logo.png' />
                </div>

                <ul className="dashboard-ul">
                    {
                        isRegistershow && (
                            <li class="overflow-hidden text-ellipsis whitespace-nowrap">
                                <Link href={"/"} className="list-none cursor-pointer flex text-black">
                                    <span className="flex items-center  px-2 py-3 font-sans text-lxs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Register
                                    </span>
                                </Link>
                            </li>
                        )
                    }

                    <li>
                        <Link href={"/auth/login"} className="list-none cursor-pointer flex text-black">
                            <span className="flex items-center  px-2 py-3 font-sans text-lxs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <PersonOutlineIcon/>Login
                            </span>
                        </Link>
                    </li>
                    <li className="flex text-black">

                        <span className="flex items-center px-2 py-3 font-sans text-lxs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <HelpOutlineIcon /> Help
                        </span>
                    </li>
                </ul>
            </div>


            <div className='RegistrationStyle'>
                <div className='RegistrationBody'>
                    <Register />
                    {/* <div className='RegisterLeftSide' >
                        <h2 style={{ marginBottom: '0px' }}>
                            The biggest and most trusted  </h2>
                        <h2 style={{ marginTop: '0px' }}> matrimony service for Indians!</h2>
                        <div>
                            <span style={{ fontSize: '1.1rem' }}>Now find matches based on your hobbies & interests</span>
                        </div>
                    </div>
                    <div>
                        <div className='UpperRegisterBox'>
                            Create a Matrimony Profile
                        </div>
                        <div className='RegisterMainForm' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                            <div className='RegisterForm'>
                                <div style={{ textAlign: 'center', fontSize: '20px' }}>Find your perfect match</div>

                                <select name="" id=""
                                    onChange={(e) => { setLookingProfile(e.target.value) }}
                                    style={{ width: '97%', margin: '20px 0px', height: '42px', borderRadius: '10px', padding: '11px 0' }}>
                                    {
                                        defaultprofile.map((data, index) => {
                                            return (
                                                <>
                                                    <option key={index} value={data.name}
                                                        onChange={(e) => { setLookingProfile(e.target.value) }}
                                                    >{data.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                             

                                <input className='RegisterInputStyle' placeholder='Name' onChange={(e) => { setName(e.target.value) }} style={{ marginTop: '10px' }}></input>

                                <div className='Countrystyle'>
                                    <select name="" id="" style={{ width: '20%', height: '42px', borderRadius: '10px', padding: '11px 0' }}
                                        onChange={(e) => { setPhoneCode(e.target.value) }}>
                                        <option value={""}>Select</option>
                                        {
                                            CountryCode.map((data, index) => {
                                                return (
                                                    <>
                                                        <option key={index}
                                                            value={data.dial_code}>{data.name}-{data.dial_code}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                    <input className='RegisterInputStyle' type='number' placeholder='Enter Mobile Number' onChange={(e) => { setMobileno(e.target.value) }} style={{ marginTop: '10px', width: '65%' }} ></input>
                                </div>
                                <div>
                                    <button className='RegisterButtonStyle' onClick={handleClick}>REGISTER FREE</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Company Info */}
            <div style={{ backgroundColor: '#f1f1f1', }}>
                <div className="CompanyInfo">
                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg" alt="PercentageImage" style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>100%</div>
                        <div className='Companydesc'>Mobile-verified profiles</div>
                    </div>
                    <div className='CompanyBar'></div>

                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="	https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg" alt='customerImage' style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>4 Crores+</div>
                        <div className='Companydesc'>Customers served</div>
                    </div>
                    <div className='CompanyBar'></div>

                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg" alt='YearImage' style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>23 Years</div>
                        <div className='Companydesc'>of successful matchmaking</div>
                    </div>

                </div>
            </div>

            <div>
                <div className='CompanyProduct'>
                    <div className='AdvertiseImage'>
                        <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/limca-records-img-new.png?0" alt="ProductImage"></img>
                    </div>
                    <div className='CompanyBar'></div>
                    <div>
                        <span>Featured in the Limca Book of Records for highest number of documented marriages online</span>
                    </div>
                </div>
            </div>


            {/* Promotion */}
            <div className='PromotionStyle'>
                <div className='Promotion1'>
                    <img style={{ width: '100%', height: '100%' }} src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/relevant-filters-img-new.png" alt=""></img>
                </div>
                <div className='Promotion2'>
                    <div>
                        <h2>
                            Choose by Interests, Location and other relevant filters
                        </h2>
                        <span>Customize your partner search with filters like Hobbies, Location and more. Find your suitable match!</span>
                    </div>
                </div>
            </div>

            {/* App Features */}
            <div className='PromotionStyle' style={{ marginTop: '50px' }}>
                <div className='Promotiontext'>
                    <h2>Connect with matches the way you like</h2>
                    <div className='Featuresstyle'>
                        <div>
                            <img src="//imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-1.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Voice call</h4>
                            <span>Talk to matches directly through voice calls</span>
                        </div>
                    </div>

                    <div className='Featuresstyle'>
                        <div>
                            <img src="	https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-2.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Message</h4>
                            <span>Connect with matches instantly through messaging</span>
                        </div>
                    </div>

                    <div className='Featuresstyle'>
                        <div>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-3.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Video call</h4>
                            <span>Meet your matches virtually with video calls</span>
                        </div>
                    </div>
                </div>
                <div className='Promotion1'>
                    <img style={{ width: '100%', height: '100%' }} src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-img.png?0" alt=""></img>
                </div>
            </div>

            {/* Testimonial Carousel */}
            {/* Matrimony Service with Millions of Success Stories */}

            <div style={{ textAlign: 'center', width: '90%', margin: '60px auto' }}>
                <h2 className='testimonialheader'>Matrimony Service with Millions of Success Stories </h2>
                <div >
                    <Carousel autoplay={true} labels={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={false}>
                        {
                            defaultprofile.map((data, index) => {
                                return (
                                    <>
                                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/8SH97865398-eSH20684497-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem' }}>Vinod & Aishwarya</span>

                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem', marginTop: '20px' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/uSH13541906-4SH64784837-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem', marginTop: '5px' }}>Vinod & Aishwarya</span>

                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem', marginTop: '20px' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/8SH90195669-sSH96244259-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem', marginTop: '5px' }}>Vinod & Aishwarya</span>
                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>


                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>


            {/* Company Details */}

            <div className='CompanyDetails'>
                <div className='CompsubDetail'>
                    <span><PeopleAltIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>Best Matches</span>
                </div>
                <div className='CompsubDetail'>
                    <span><VerifiedIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>Verified Profiles</span>
                </div>
                <div className='CompsubDetail'>
                    <span><LockIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>100% Privacy</span>
                </div>
            </div>




            <div style={{ width: '100%', backgroundColor: '#ab845d', height: '60px', marginBottom: '40px', marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span>Start Your Life Story Today!</span>
            </div>

        </>
    )
}
