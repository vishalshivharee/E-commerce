import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)
  return (
    <Layout>
      <HeroSection/>
      {/* <Filter/> */}
      <ProductCard/>
      <div className='flex justify-center -mt-10 mb-4'>
        <Link to="/allproducts">
            <button className='bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  )
} 

export default Home