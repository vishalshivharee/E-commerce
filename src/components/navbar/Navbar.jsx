import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Fragment, } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Mycontext from '../../context/data/Mycontext'

function Navbar() {

  const [open, setOpen] = useState(false)

  const context = useContext(Mycontext)
  const {islogin, setIslogin} = context;

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () =>{
    localStorage.clear()
    window.location.href = '/login'
  }

  const cartitem = useSelector((state) => state.cart)

  


  return (
    <div className="bg-white sticky top-0 z-50  ">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 ">
                    All Products
                  </Link>

                  

                  {user ? <div className="flow-root">
                    <Link to={'/order'} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ''}
            

                  {user?.user?.email === 'work.vishal@gmail.com' ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      admin
                    </Link>
                  </div> : ""}
                  
                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" >
                      Logout
                    </a>
                  </div> : ''}
                  
                </div>

                <div className="border-t border-gray-200 px-4 py-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      <header>


        {/* <p className='flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white'>Get free delivery on orders over ₹300</p>
         */}
         <marquee className="font-semibold text-base mt-2"><p>Heavy discount on latest collection</p></marquee>



        <nav >
          <div className='bg-gray-100 px-3 sm:px- lg:px-8 shadow-xl flex flex-row justify-between items-center h-16 '>
            <button type="button" className="rounded-md bg-white p-1 mr-2 text-gray-400 lg:hidden md:hidden" onClick={() => setOpen(true)}>
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <div>
              <NavLink to="/">
                {/* <img src="https://codehelp-shopping-cart.netlify.app/logo.png" width={155}></img> */}
                <h2 className='fixed left-14 top-14 text-xl -mt-0 semibold'>Dimpy-Collection</h2>
              </NavLink>
            </div>
            <div className='flex flex-row gap-5'>
              <NavLink to={'/allproducts'} className="hidden md:flex">
                All products
              </NavLink>


              {user ? <NavLink to={'/order'} className="hidden md:flex">
                Order
              </NavLink> : ''}
              
        
              <div className='flex gap-4 -mr-2'>

              <  NavLink to="/login">
              {islogin &&
                <button className='hidden sm:flex'>Login</button>
              }
              </NavLink>

              { islogin &&
              <NavLink to="/signup">
                <button className='button'>Signup</button>
              </NavLink>
              }
              </div>

              {user?.user?.email === 'work.vishalshivhare@gmail.com' ? <NavLink to={'/dashboard'} className="hidden md:flex">
                Admin
              </NavLink> : ''}

              {user ?  <NavLink to={'/'} className="hidden md:flex" onClick={logout} >
                Logout
              </NavLink> : ''}

              <NavLink to={'/cart'} className="flex -mr-1 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 relative">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span className="ml-2 text-sm font-medium text-gray-700 group absolute bg-green-600 text-xs w-4 text-white h-4 animate-bounce rounded-full flex justify-center items-center">{cartitem.length}</span>
                <span className="sr-only">items in cart, view bag</span>
              </NavLink>
            </div>

          </div>
        </nav>


      </header>


    </div>
  )
}

export default Navbar