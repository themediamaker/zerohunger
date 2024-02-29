"use client"
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {getdateconvert} from '../../Elements/getdateconverter'
import {getyear} from '../../Elements/getdateconverter'
import { encryptData } from '@/src/Utils/SecretData';

const ProfileCarousel = (props) => {
  console.log(props.userData[0].dateofBirth);
  console.log(getdateconvert(props.userData[0].dateofBirth))
  const router = useRouter()
  const chunkedData = [];
  if (props.isloading) {
    for (let i = 0; i < props.userData.length; i += 4) {
      chunkedData.push(props.userData.slice(i, i + 4));
    }
  }
  console.log(getyear(props.userData[0].dateofBirth))
  console.log(chunkedData);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <a href="javascript:void(0)" className="text-dark font-semibold hover:text-primary text-[1.5rem] transition-colors duration-200 ease-in-out">{props.headertitle} ({props.isloading && props.userData.length})</a>
            <span className="block text-[0.9rem]">{props.usertitle}</span>
          </div>
          <div>
            <Link href="/user/matches/[slug]" as={`/user/matches/${props.gotopath}`} className="text-red font-semibold hover:text-primary text-[0.9rem] transition-colors duration-200 ease-in-out ml-4" >See All</Link>
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {chunkedData.map((chunk, index) => (
          <div key={index} className="flex justify-center">
            {chunk.map((data) => (
              <div key={data.name} className='TestimonalCard'>
                <div className="flex flex-col mr-2 text-center mb-2 lg:mr-4 cursor-pointer" onClick={() => { router.push(`/user/dashboard-All_Matches/viewprofile/${data._id}`) }}>
                  <div className="inline-block mb-2 relative shrink-0 rounded-[.95rem]">
                    <img className="inline-block shrink-0 rounded-[.95rem]  shadow aspect-[6/6]" src={"https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg"} alt="avatar image" />
                  </div>
                  <div className="text-left">
                    <p className="text-dark font-semibold hover:text-primary text-[1rem] transition-colors duration-200 ease-in-out">{data.name}</p>
                    <span className="block font-medium text-muted">{getyear(data.dateofBirth)} Yrs,'{data.height}'</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProfileCarousel
