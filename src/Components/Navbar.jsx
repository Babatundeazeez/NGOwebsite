import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../AuthContext/authContext'
import Button from './Button'

const Navbar = () => {

    const {isOpen, setIsOpen} = useContext(authContext)
  return (
    <nav className='bg-blue-100 shadow-md fixed w-full top-0 left-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>
            {/* logo section start here */}
            <div className='flex flex-col'>
                <div className='flex items-center space-x-2'>
                    {/* image place here */}
                    <h2 className='text-2xl md:text-3xl font-extrabold text-gray-600 tracking-wide'>NGO WEBSITE</h2>

                </div>
                <span className='text-xs md:text-sm text-gray-500 font-medium'>Helping the less priviledge</span>

            </div>
            {/* logo section end here */}
            {/* desktop menu......................... */}
            <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
                <li>
                    <Link to='/' className='hover:text-blue-700'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutUs' className='hover:text-blue-700'>About Us</Link>
                </li>
                <li>
                    <Link to='/project' className='hover:text-blue-700'>Our Projects</Link>
                </li>
                <li>
                    <Link to='/donate' className='hover:text-blue-700'>Donate</Link>
                </li>

            </ul>
            <Button variant='secondary' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</Button>

        </div>
        {/* on mobile view....... */}
        {
            isOpen && (
                <div className='md:hidden bg-white shadow-md px-6 py-4'>
                    <ul className='space-y-4 text-gray-700 font-medium'>
                        <li>
                        <Link to='/' className='hover:text-blue-700'>Home</Link>
                        </li>
                        <li>
                         <Link to='/aboutUs' className='hover:text-blue-700'>About Us</Link>
                        </li>
                         <li>
                        <Link to='/project' className='hover:text-blue-700'>Our Projects</Link>
                        </li>
                        <li>
                        <Link to='/donate' className='hover:text-blue-700'>Donate</Link>
                        </li>


                    </ul>

                </div>
            )
        }

    </nav>
  )
}

export default Navbar