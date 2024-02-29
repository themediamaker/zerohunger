import React from 'react'

const MoreInterviews = () => {


    const data = [
        {
          id: 1,
          imgSrc: '/images/a1.jpg',
          text1: 'Hiran and I Studied in the Same',
          text2: 'Hiran and Sreethu studied...',
        },
        {
          id: 2,
          imgSrc: '/images/a2.jpg',
          text1: 'Another Example Text',
          text2: 'Another Example Text...',
        },
        {
            id: 3,
            imgSrc: '/images/a2.jpg',
            text1: 'Another Example Text',
            text2: 'Another Example Text...',
          },
          {
            id: 4,
            imgSrc: '/images/a2.jpg',
            text1: 'Another Example Text',
            text2: 'Another Example Text...',
          },
     
      ];

const Handleclick =()=>{
    alert ("jjj")
}



  return (
    <>

<div className='w-full'>
      <div className='flex '>
        <div className='w-full  '>
          <div className='border border-solid border-gray-300 m-4 p-4'>
            <h1 className='font-bold '>Shampa Fell for Avijit in their First Meeting</h1>
         
        <div className='flex mt-2'>
        <img src='/images/a1.jpg' alt='Your Image' className='w-full h-auto' />
      

      <p className='text-sm ml-3'>
            When you are in love, many hours just seem like a few minutes and this is exactly what happened with Avijit and Shampa on their first meeting.
            “It was raining heavily and the weather was romantic. I was at the window seat. I heard the announcement of the train’s arrival. I packed my luggage and stepped out of the train only to find my dream man Avijit eagerly waiting for me. I was returning from a trip that day and we both couldn’t wait any more to meet each other. We spent almost three and a half hours together. We spoke a lot about each other and felt comfortable. Our journey of togetherness started from there,” begins Shampa.
          </p>
        
           
    
        </div>

        <p className='text-sm mt-3'>
Shampa’s friend had got married through BengaliMatrimony and recommended her to register on the portal. She wanted someone from Bangalore itself and Avijit’s profile matched her preference. In their first meeting, she realised that he is the one for her. “Our wavelengths matched. I felt a connection with her too,” says Avijit.

The one ritual that this couple never skips is having dinner together. Shampa and Avijit have different work timings but “He waits for me to have dinner.” Avijit feels lucky to have found his right match.

Talking about their first anniversary, he says, “She loves food. I often cook for her and did it on our special day too. We celebrated the day at home with a wonderful lunch.”

Shampa fell for Avijit’s helpful nature and his humbleness. “He supports me a lot. He respects me and we equals. I feel lucky to have found a husband like Avijit, all credit goes to BengaliMatrimony
</p>

<h1 className='font-bold '>We wish Shampa and Avijit a happy marriage!</h1>

<div className='border border-solid border-gray-300 m-4 p-4'>
            <p className='text-sm flex pl-2'>
              If you'd like to find your perfect partner, <button className="flex items-center justify-between border border-gray-300 p-2 rounded-lg mr-4">Register FREE</button> 
            </p>
          </div>


          </div>
         
        </div>






        <div className=' w-1/4 '>
          <div className='border border-solid border-gray-300 m-4 p-4'>
            <h1 className='font-bold'>Recent Stories</h1>


            {data.map(item => (
        <div key={item.id} className='mt-2'>
          <img src={item.imgSrc} alt='Your Image' className='w-full h-auto' />
          <p className='text-sm'>{item.text1}</p>
          <p className='text-sm'>{item.text2}</p>
          <p className='text-sm'>
            <a href='#' style={{ color: 'blue' }}>Read More</a>
          </p>
        </div>
      ))}
 <button
            onClick={Handleclick}
            className="flex items-center justify-between border border-gray-300 p-2 rounded-lg "
        >
           Read More Stories
        </button>
          </div>
        </div>
      </div>
 </div>
    </>
  )
}

export default MoreInterviews