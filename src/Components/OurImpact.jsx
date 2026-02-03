import React from 'react'

const OurImpact = () => {

  return (
   <section className='py-20 bg-white'>
     <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        {/* IMAGE............ */}
        <img 
        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" 
        alt="NGO IMPACT"
        className='rounded-lg shadow-md' 
        />

        {/* TEXT........................ */}
        <div>
            <h2 className='text-3xl font-bold text-gray-900'>
                OUR IMPACT
            </h2>

            <p className='mt-4 text-gray-700 leading-relaxed'>
             Through our programs, we have impacted hundreds of individuals
              and families by improving access to education, healthcare, and
              sustainable livelihoods.
            </p>

            <ul className='mt-6 space-y-3 text-gray-700'>
                <li>✔ Supported over 1,000 beneficiaries</li>
                <li>✔ Partnered with local communities</li>
                <li>✔ Delivered long-term sustainable solutions</li>

            </ul>
        </div>

    </div>
   </section>
  )
}

export default OurImpact