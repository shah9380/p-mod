import React from 'react'
import { useState } from 'react'

const Header = (prop) => {
   let priceRange = [
        "0-500",
        "500-1000",
        "1000-1500",
        "1500-2000",
        "2000-2500",
        "2500-3000"
    ]
    let propertyType = [
        "All","House","PG","Farm House","Villa", "Hotel"
    ]

    const [formData, setFormData] = useState({
        city: 'All',
        date: '',
        priceRange: '0-3000',
        propertyType: 'All',
    });
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        prop.onSubmit(formData);
    }
    const handleSearchValue = ()=>{
        prop.onSearch(searchValue);
    }
  return (
    <header className='flex flex-col gap-8'>
        <div className='flex flex-wrap justify-between items-center bg-gray-200/50 p-2'>
            <svg stroke="currentColor" fill="currentColor" className='text-green-800' stroke-width="0" viewBox="0 0 1024 1024" class="mb-1 text-success" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
            <h1 className='text-gray-700 text-3xl'>Search properties to rent</h1>
            <div className='flex gap-2 w-[100%] max-w-[400px] border'>
                <input className='border w-36 h-8 p-2 roinded-sm outline-none grow' value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} type="text" placeholder='Search' />
                <button onClick={handleSearchValue} className='border border-black p-1 px-2 rounded-md hover:bg-gray-200 active:scale-[0.97]'>Search</button>
                <button className='border border-black p-1 px-2 rounded-md hover:bg-gray-200 active:scale-[0.97]'>Liked</button>
            </div>
        </div>
        <form className='flex flex-wrap max-w-[1280px] mx-auto w-[100%] min-w-[280px] bg-gray-200/50 p-2' onSubmit={handleSubmit}>
            <div className='flex flex-col border-r border-black/25 p-2 grow max-w-[49%]'>
                <label>Enter City</label>
                <input className='border h-8 rounded-sm outline-none p-2 grow' type="text" name="city"
            value={formData.city}
            onChange={handleInputChange} defaultValue="All" />
            </div>
            <div className='flex flex-col border-r border-black/25 p-2 grow min-w-[150px] max-w-[100%]'>
                <label>Date</label>
                <input className='border h-8 rounded-sm outline-none p-2 grow' name="date"
            value={formData.date}
            onChange={handleInputChange} type="date"/>
            </div>
            <div className='flex flex-col border-r border-black/25 p-2 grow max-w-[49%]'>
                <label>Price</label>
                <select name="priceRange"
            id="price-range"
            className='border h-8 rounded-sm outline-none grow'
            value={formData.priceRange}
            onChange={handleInputChange}>
                    <option value="0-3000">0-3000</option>
                    {
                        priceRange.map((ele)=>{
                            return <option value={ele}>Rs. {ele}</option>
                        })
                    }
                </select>
            </div>
            <div className='flex flex-col border-r border-black/25 p-2 grow max-w-[49%]'>
                <label>Property Type</label>
                <select name="propertyType"
            id="property-type"
            className='border h-8 rounded-sm outline-none grow'
            value={formData.propertyType}
            onChange={handleInputChange}>
                    {
                        propertyType.map((ele)=>{
                            return <option value={ele}>{ele}</option>
                        })
                    }
                </select>
            </div>
            <div className='flex justify-center items-center grow max-w-[49%]'>
                <button type='submit' className='p-1 px-2 bg-blue-600 rounded-md text-white'>Submit</button>
            </div>
        </form>
    </header>
  )
}

export default Header