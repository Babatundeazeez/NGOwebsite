import React from 'react'
import WhatWeDo from '../Components/WhatWeDo'
import OurImpact from '../Components/OurImpact'
import TeamSection from '../Components/TeamSection'
import CallToAction from '../Components/CallToAction'

const AboutUs = () => {
  return (
    <div className='w-full bg-gray-50 mt-24 mb-12'>

      {/* HERO SECTION.........START........... */}
      <section className='bg-green-50 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>

            {/* TEXT.................. */}
            <div>
              <h1 className='text-4xl font-bold text-gray-900'>
                About SuccessCare NGO
                </h1>
                <p className='mt-6 text-gray-700 leading-relaxed'>
                 SuccessCare NGO is a non-profit organization dedicated to improving
                  lives by empowering communities through education, healthcare,
                  and sustainable development initiatives.

                </p>
                <p className='mt-4 text-gray-700 leading-relaxed'>
                Since our inception, we have worked tirelessly to bring hope,
                dignity, and opportunity to individuals and families in need.

                </p>

                {/* IMAGES.................. */}
                <div>
                  <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497" 
                  alt="helping community"
                  className='rounded-lg shadow-md w-full' />
                </div>
            </div>

        </div>

      </section>
      {/* HERO SECTION.........END........... */}

      {/* MISSION & VISSION................ */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12'>

          {/* MISSION............. */}
          <div>
            <h2 className='text-3xl font-semibold text-gray-900'>
              OUR MISSION
              </h2>

              <p className='mt-4 text-gray-700 leading-relaxed'>
              Our mission is to support vulnerable communities by providing
              access to quality education, essential healthcare services, and
              economic empowerment programs that promote self-reliance and
              sustainable growth.
              </p>
          </div>
          {/* VISSION............... */}
          <div>
            <h2 className='text-3xl font-semibold text-gray-900'>
              OUR VISSION
            </h2>
            <p className='mt-4 text-gray-700 leading-relaxed'>
               We envision a world where every individual has equal access to
              opportunities, basic needs, and the resources required to lead a
              healthy and fulfilling life.
            </p>
          </div>


        </div>

      </section>
     
      <section>
        <WhatWeDo />
      </section>
      
      <section>
        <OurImpact />
      </section>
     
      <section>
        <TeamSection />
      </section>

      <section>
        <CallToAction />
      </section>
     
      
      
      </div>
  )
}

export default AboutUs