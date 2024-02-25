import React, { useState } from 'react'
import { Card } from 'flowbite-react';

const HotelCard = (prop) => {
    const[heart, setHeart] = useState(false);
    const handleHeart = ()=>{
        setHeart((prev)=>prev? prev=false : prev=true);
    }
  return (
    <Card
      className="max-w-sm"
      imgAlt={prop.alt}
      imgSrc={prop.image}
    >
        <div className='w-[300px] flex w-[100%] justify-between'>
            <p className='text-blue-600 font-medium text-xl'>₹ {prop.price}/day</p>
            { heart ? <span className='cursor-pointer' onClick={handleHeart}>❤️</span> : <span className='cursor-pointer' onClick={handleHeart}>🤍</span>}
        </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {prop.alt}
      </h5>
      <div className='text-gray-500'>
        <p>{prop.address}</p>
        <hr />
        <div className='flex justify-between'>
            <p className='flex justify-center items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path></svg>{prop.beds}Beds</p>
            <p className='flex justify-center items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path></svg>{prop.bath}Bath</p>
            <p className='flex justify-center items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"></path></svg>{prop.area}</p>
        </div>
      </div>
    </Card>
  )
}

export default HotelCard