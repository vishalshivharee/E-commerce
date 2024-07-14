import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import toast from 'react-hot-toast'
import Mycontext from '../../context/data/Mycontext';

function ProductCard() {
    const context = useContext(Mycontext);
    const { product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice,setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);
    console.log(cartItems)

    const addCart = (product)=> {
        dispatch(addToCart(product));
        toast.success('Item added successfully');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="grid xs-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto ">
                    {product.filter((obj,index)=>obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).slice(0,8).map((item, index) => {
                        const { title, price, description, imageurl,id } = item;
                        return (
                            <div    key={index} className="p-4 drop-shadow-lg " >
                                <div  className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                                    <div onClick={()=> window.location.href = `/productinfo/${id}`} className="flex justify-center cursor-pointer loading-lazy" >
                                        <img className=" rounded-2xl w-full h-80 p-10 bg-white hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageurl} alt="blog" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Dimppy-Collection</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title.slice(0,13)}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className="leading-relaxed mb-3">₹{price}</p>
                                        <div className=" flex justify-center">
                                            <button type="button" 
                                            onClick={()=> addCart(item)}
                                            className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}




                </div>

            </div>
        </section >

    )
}

export default ProductCard