import React from 'react'

const Video = () => {
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
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/LR6xXs4lDsA",
            title: "Cooking Up A Love Story",
            description: " They share their dreams and love with equal passion, it seems."
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/LR6xXs4lDsA",
            title: "Cooking Up A Love Story",
            description: " They share their dreams and love with equal passion, it seems."
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/LR6xXs4lDsA",
            title: "Cooking Up A Love Story",
            description: " They share their dreams and love with equal passion, it seems."
        },

    ];
  return (
    <>

<div className='w-full'>
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
                      
                        {/* Read more button removed here */}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
</div>



    </>
  )
}

export default Video