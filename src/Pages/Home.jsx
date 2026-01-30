import { ArrowBigRight } from 'lucide-react'
import React from 'react'
import Button from '../Components/Button'

const Home = () => {
  return (
    <div className=' w-full mt-24 mb-12'>
      {/* HERO SECTION...... */}
      <section className='bg-green-700 text-white'>
        <div className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                  Making a Difference, <br /> One Life at a Time
            </h1>
            <p className='mt-6 text-lg text-green-100'>
              We are committed to empowering community, 
              supporting education, Healthcare, and sustainable development

            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <button className='bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100'>
                Donate Now
              </button>
              <button className='flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-green-600'>
                Learn More <ArrowBigRight size={18} />
                </button>

            </div>
          </div>
          <div className='hidden md:block'>
            <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e" 
            alt="helping hands" 
            className='rounded-xl shadow-lg'/>

          </div>

        </div>

      </section>
      {/* About section......start.................. */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>
            Our Mission
          </h2>
          <p className='mt-6 text-gray-600 max-w-3xl mx-auto'>
            Our NGO is dedicated to improving lives by addressing poverty,
            education gap, health challenges, widows, and social inequality 
            through community-driven initiatives.

          </p>

        </div>

      </section>
      {/* About section......end.................. */}

      {/* Impact Lifes....start..... */}
      <section className='py-20 bg-white px-6'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center '>
          <div>
            <h3 className='text-4xl font-bold text-green-700'>10K</h3>
            <p className='text-gray-600 mt-2'>Lives Impacted</p>
          </div>

          <div>
            <h3 className='text-4xl font-bold text-green-700'>120+</h3>
            <p className='text-gray-600 mt-2'>Communities</p>
          </div>

          <div>
            <h3 className='text-4xl font-bold text-green-700'>50+</h3>
            <p className='text-gray-600 mt-2'>Projects</p>
          </div>

          <div>
            <h3 className='text-4xl font-bold text-green-700'>8+</h3>
            <p className='text-gray-600 mt-2'>Years Experience</p>
          </div>

        </div>

      </section>
      {/* Impact Lifes....ends..... */}
      {/* Programm event......start.......... */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-center text-gray-800 '>
            Our Focus Areas
          </h2>
          <div className='mt-12 grid md:grid-cols-3 gap-8'>
            {[
              {
                title : "Education Support",
                text : "Providing access to quality education for underpriviledge children"
              }, 
              {
                title : "Healthcare",
                text : "Improving access to medical care and health awereness."
              },
              {
                title : "Community Development",
                text : "Empowering Community through skills and sustainability programs. "
              },
              
            ].map((items, index)=>(
              <div
              key={index}
              className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-green-700'>
                  {items.title}
                </h3>
                <p className='mt-4 text-gray-600'>
                  {items.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* Programm event........ends........ */}
      {/* Call to Action....start.................. */}
      <section className='py-20 px-6 bg-green-700 text-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-bold'>
            Join Us In Making Difference
          </h2>
          <p className='mt-4 text-green-100'>
            Your support can help transform lives and create lasting impact.

          </p>
          <div className='mt-8'>
          {/* <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100">
              Become a Volunteer
            </button> */}
            <Button variant='success'>Become a Volunteer</Button>

          </div>

        </div>

      </section>
      {/* Call to Action.........end............. */}

    </div>
  )
}

export default Home