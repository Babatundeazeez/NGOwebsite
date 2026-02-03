import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-gray-300'>
        {/* Main footer................ */}
        <div className='max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4'>

          {/* NGO INFO.......... */}
          <div>
            <h2 className='text-2xl font-bold text-white'>SuccessCare NGO</h2>
            <p className='text-sm mt-4 leading-relaxed'>
            SuccessCare NGO is committed to improving lives by supporting
            education, healthcare, and community development initiatives.
            </p>
          </div>
          {/* Quik Links....... */}
          <div>
            <h3 className='text-lg font-semibold text-white'>Our Works</h3>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>
                <Link to='/' className='hover: text-white'>Home</Link>
              </li>
              <li>
                <Link to='/aboutUs' className='hover: text-white'>About Us</Link>
              </li>
              <li>
                <Link to='/project' className='hover: text-white'>Projects</Link>
              </li>
              <li>
                <Link to='/donate' className='hover: text-white'>Donate</Link>
              </li>

            </ul>
          </div>

          {/* Programss................ */}
          <div>
            <h3 className='text-lg font-semibold text-white'>Our Works</h3>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>Education Support</li>
              <li>Healthcare Initiatives</li>
              <li>Community Empowerment</li>
              <li>Food & Relief programs</li>

            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white'>Contact Us</h3>
            <ul>
              <li>Email : info@succesCareNGO.org</li>
              <li>Phone No : 08101 222 333 1</li>
              <li>Location : Nigeria</li>
            </ul>

            <div className='flex space-x-4 mt-4'>
              <Link to='https://wwww.facebook.com' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
              <FaFacebookF />
              {/* <FaFacebook /> */}
              </Link>
              <Link to='https://www.twitter.com' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
              <FaTwitter />
              </Link>
              <Link to='https://www.linkedin.com' className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500'>
              {/* <FaLinkedin /> */}
              <FaLinkedinIn />
              </Link>

            </div>

          </div>

        </div>
        {/* Buttom bar............ */}
        <div className='border-t border-gray-800'>
          <div className='max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400'>
          © {new Date().getFullYear()} SuccessCare NGO. All rights reserved. | Designed by Babzeeztech

          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer