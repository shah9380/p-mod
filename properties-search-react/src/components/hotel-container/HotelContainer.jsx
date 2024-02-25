import React, { useEffect, useState } from 'react';
import HotelCard from './hotel-card/HotelCard';
import data from '../../utils/data';

const HotelContainer = (props) => {
  // State to hold the filtered data
  const [filteredData, setFilteredData] = useState(data);

  // Effect to filter data based on search value
  useEffect(() => {
    const tempData = data.filter(
      (ele) =>
        ele.name.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        ele.city.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        ele.type.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        ele.address.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        ele.price <= parseInt(props.searchValue)
    );
    setFilteredData(tempData);
  }, [props.searchValue]);

  // Effect to filter data based on sorting options
  useEffect(() => {
    let tempData = [...data];

    // Filter by city
    if (props.filterSort.city.toLowerCase() !== 'all') {
      tempData = tempData.filter((ele) =>
        ele.city.toLowerCase().includes(props.filterSort.city.toLowerCase())
      );
    }

    // Filter by date
    if (props.filterSort.date) {
      const date = new Date(props.filterSort.date);
      tempData = tempData.filter(
        (ele) =>
          ele.info.date[1] === date.getDate() &&
          ele.info.date[0] === date.getMonth() + 1
      );
    }

    // Filter by price range
    const [minPrice, maxPrice] = props.filterSort.priceRange.split('-');
    tempData = tempData.filter(
      (ele) => ele.price >= parseInt(minPrice) && ele.price <= parseInt(maxPrice)
    );

    // Filter by property type
    if (props.filterSort.propertyType.toLowerCase() !== 'all') {
      tempData = tempData.filter((ele) =>
        ele.type.toLowerCase().includes(props.filterSort.propertyType.toLowerCase())
      );
    }

    setFilteredData(tempData);
  }, [props.filterSort]);

  return (
    <div className='flex flex-wrap gap-4 justify-center mx-auto max-w-[1200px] mt-4'>
      {filteredData.map((ele) => (
        <HotelCard
          key={ele.id}
          image={ele.image}
          alt={ele.name}
          price={ele.price}
          address={ele.address}
          area={ele.info.bed}
          bath={ele.info.bathrooms}
          bed={ele.info.bed}
        />
      ))}
    </div>
  );
};

export default HotelContainer;
