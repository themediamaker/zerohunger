import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const FirstTab = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  

    const cards = [
        {
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          "title": "Burgundy Flemming",
          "subtitle": "Advertising"
        },
        {
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
          "title": "Nigel Nigel",
          "subtitle": "Sound & Vision"
        },
        {
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
          "title": "Caspian Bellevedere",
          "subtitle": "Accounting"
        }
      ];

      const data = [
        {
          title: "Your safety is our priority",
          content: `Choose who views your photo
You can control who views your photos by showing them only to select members or even hide them completely.
Choose who sees your number
You can show your number only to members who contacted you or responded to your interest. Or reveal it only to Premium Members from your community.
Safety for women
Women, can turn on the "Secure Connect" feature to get calls from members without revealing their own number.
Protect your horoscope
You can choose to show your horoscope only to members who contacted you or responded to your interest. In fact, you can even hide your horoscope from being viewed.`
        },
        {
          title: "How to be Safe?",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
      
      ];










      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>



<div className='w-full'>
<div className="text-sm">
<img src="/images/a15.jpg" alt="Image" className="mb-4 w-full" />
<p className="mb-4 font-bold">Why Safe Matrimony?</p>
  <p className="mb-4">While online matchmaking helps millions of Indians find a life partner year after year, a few experience frauds. As the biggest matrimony service for Indians, it's our responsibility to ensure that your matchmaking journey is a safe one. Matrimony.com's 'Safe Matrimony', a 10-year-old initiative, educates users on staying safe while searching for their life partner. At Matrimony.com, we are committed to making the matchmaking experience safe for our members. We have implemented multiple procedures to ensure this. Simultaneously, we also encourage all our members to remain vigilant. May your journey with Matrimony.com lead you to the perfect partner, creating a lifetime of shared joy and love!</p>
  <p className="mb-4  font-bold">Common frauds</p>
  <p className="mb-4">While there can be multiple types of frauds like, the intention of the fraudster is always to extort money from the members. So a clear rule of thumb is under no circumstances agree to pay money to a potential match you may be interacting with online. Here are some common scenarios.</p>
</div>

<Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <figure className="snip1584">
            <img src={card.image} alt={card.title} />
            <figcaption>
              <h3>{card.title}</h3>
              <h5>{card.subtitle}</h5>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>
      ))}
    </Slider>




</div>
<div className='w-full flex'>
<div className="w-1/2 mt-10 mr-4">
    {data.map((item, index) => (
      <div className="border rounded mb-2" key={index}>
        <div
          className="title flex items-center justify-between bg-black bg-opacity-40 text-white uppercase text-xs font-light text-left p-2 rounded-t cursor-pointer transition-all ease-in hover:bg-opacity-50"
          onClick={() => toggleAccordion(index)}
        >
          <div className="arrow-wrapper">
            <i className={`fa fa-angle-down ${openIndex === index ? 'fa-rotate-180' : ''}`}></i>
          </div>
          <span className="title-text font-bold">{item.title}</span>
        </div>
        <div className={`content ${openIndex === index ? 'content-open bg-opacity-10' : ''} bg-transparent p-2 rounded-b transition-all ease-in`}>
          <div className={`content-text ${openIndex === index ? 'content-text-open opacity-100' : 'opacity-0 hidden'}`}>
            {item.content}
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className='w-1/2 mt-10 ml-4'>
    <div className="text-sm">
      <p>Contact Us</p>
      <p className="font-bold">Matrimony.com Helpline</p>
      <p>Report any profile you find suspicious or wrongly misrepresenting themselves. Reach us and we shall assist you.</p>
      <p>Phone: <span className="font-bold">+91-7055146473</span></p>
      <p>Email: <span className="font-bold">helpdesk@sonalsoulmates.com</span></p>

      <p className="font-bold mt-4">Cyber Cell Contact Details</p>
      <p>Any acts related to identity theft, e-mail scams, and obscene content can also be reported to the Cyber Cell.</p>
      <p className="underline">Find Details Here</p>
    </div>
  </div>
</div>





    </>
  )
}

export default FirstTab