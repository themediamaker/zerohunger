"use client"

import { useState } from 'react';
import MoreInterviews  from "../Success/MoreInterviews"
const SuccessCouple = () => {

    const [revealedCard, setRevealedCard] = useState(null);
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);

    const handleDescriptionClick = () => {
        setShowAnotherComponent(true);
      };


      const Handleclick = () => {


        setShowAnotherComponent(true);

    }



    const items = [
        {
            title: "Shampa Fell for Avijit in their First Meetinrg",
            description: " Read More",
            imageUrl: "/images/a1.jpg",
        },
        {
            title: "Shampa Fell for Avijit in their First Meetinrg",
            description: " Read More",
            imageUrl: "/images/a1.jpg",
        },
        {
            title: "Shampa Fell for Avijit in their First Meetinrg",
            description: " Read More",
            imageUrl: "/images/a1.jpg",
        },
        {
            title: "Shampa Fell for Avijit in their First Meetinrg",
            description: " Read More",
            imageUrl: "/images/a1.jpg",
        },
    ];


    const data = [
        {
            id: 1,
            imageUrl: "/images/a1.jpg",
            heading: "Bimalendu Bhol & Ankita Hota",

        },
        {
            id: 2,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Priyanka",

        },
        {
            id: 3,
            imageUrl: "/images/a1.jpg",
            heading: "Afijith & Sruthi V S",

        },
        {
            id: 4,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        },
        {
            id: 5,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        },
        {
            id: 6,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        },
        {
            id: 7,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        },
        {
            id: 8,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        },
        {
            id: 9,
            imageUrl: "/images/a1.jpg",
            heading: "Undefined & Kakuli Roy",

        }
    ];


    const value = [
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/DQ6Cjq6diLk",
            title: "Finding Love Online",
            description: "Ritik and Swapnil , say they found love and not 'just' marriage.."
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/LR6xXs4lDsA",
            title: "Choosing Your Future",
            description: "Now, they match steps even more closer."
        },
        {
            id: 3,
            videoUrl: "https://www.youtube.com/embed/LR6xXs4lDsA",
            title: "Cooking Up A Love Story",
            description: " They share their dreams and love with equal passion, it seems."
        },

    ];


 

  




    return (
        <>

{!showAnotherComponent ? ( 
                <>
                
 <div className='w-full'>
 <div className='border border-solid border-gray-300 m-4 p-4 '>
    <h1 className='font-bold'>Success Couple Interviews</h1>
    <section className=" bg-w   z-40 relative">
        <div className="container ">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {items.map((item, index) => (
                    <a href="#" key={index} className="shadow-2xl relative">
                        <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group">
                            <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
                                <div className="w-full h-full p-5 relative">
                                    <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                                        <h2 className="text-2xl font-bold text-white mb-0 pb-1">{item.title}</h2>
                                        <p className="text-lg font-light text-white" onClick={() => handleDescriptionClick()}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img src={item.imageUrl} alt="Item" className="w-full z-0 h-full object-fill example" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
    <div className="flex justify-end mt-4">
        <button
            onClick={Handleclick}
            className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mr-4"
        >
            More Interview
        </button>
    </div>
</div>



<h1 className='font-bold'>Happy Marriages from SonalSoulmate</h1>

<div className="flex items-center justify-center w-screen min-h-screen p-10">
    <div className="grid grid-cols-3 gap-2 max-w-6xl">
        {/* Use map to render each item */}
        {data.map(item => (
            <div key={item.id} className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <div className="h-40 bg-gray-400 rounded-lg" style={{ backgroundImage: `url(${item.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'cover', backgroundPosition: 'center' }}></div>
                <div className="flex flex-col items-start mt-4">
                    <h4 className="text-xl font-semibold">{item.heading}</h4>
                    <p className="text-sm">{item.text}</p>
                    <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                </div>
            </div>
        ))}
    </div>
</div>
<div className="flex justify-end">

    <button
    
        className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mr-4"
    >
        Next
    </button>

</div>


</div>

<div class="border border-black mt-2"></div>


<div className='flex w-full'>

<h1 className='font-bold'>Videos</h1>


<div className=" px-4 py-8">
    <div className="flex flex-wrap -mx-4">
        {value.map(item => (
            <div key={item.id} className="w-full md:w-1/3 px-4 mb-8">
                <div className="card relative overflow-hidden">
                    <div className="card-image">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title={item.title} width="100%" height="100%" src={item.videoUrl} frameBorder="0" allowFullScreen></iframe>

                        </div>
                    </div>
                    <div className="card-content">
                        <span className="card-title text-xl font-semibold">{item.title}</span>
                        <p>{revealedCard === item.id ? item.description : `${item.description.substring(0, 100)}...`}</p>
                        {/* Read more button removed here */}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


</div>



<div className="flex justify-center">

<button

className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mr-4"
>
More Videos
</button>

</div>

<div class="border border-black mt-2"></div>
<div className='w-full mt-2'>
<h1 className='font-bold'>Happy Couples featured in Magazines</h1>


<div class="flex flex-wrap justify-center gap-4 mt-2">

<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">Femina</div>
</div>
</div>


<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">Women's Era</div>
</div>
</div>


<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">GS- Hindi</div>
</div>
</div>


<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">GS- Bengali</div>
</div>
</div>


<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">Chitralekha</div>
</div>
</div>
</div>






</div>

                
                
                
                
                
                </>

                ) : ( 
                    <MoreInterviews />
                )}
 



        </>
    )
}

export default SuccessCouple