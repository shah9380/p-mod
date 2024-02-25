import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import HotelContainer from './components/hotel-container/HotelContainer'


function App() {
  const[searched,setSearched] = useState('');
  const[sorted,setSorted] = useState({
    city: 'All',
    date: '',
    priceRange: '0-3000',
    propertyType: 'All',
});
  const onSearch =(value)=>{
    setSearched(value)
  }

  const onSubmit = (arr)=>{
      setSorted(arr);
  }
  return (
    <>
      <Header onSearch={onSearch} onSubmit={onSubmit}></Header>
      <HotelContainer searchValue={searched} filterSort={sorted}></HotelContainer>
    </>
  )
}

export default App
