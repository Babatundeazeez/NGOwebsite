import React from 'react'

const WhatWeDo = () => {

    const OurService = [
        {
        title : "Education Support",
        text : "Providing scholarships, school supplies, and educational programs for children."
    },
    {
        title : "HealthCare Initiative",
        text : "Supporting medical outreaches and access to basic healthcare services."
    },
    {
        title : "Community Development",
        text : "Empowering communities through skills training and capacity building."
    }
        ]


  return (
    <section className='py-20 bg-blue-50'>

         <div className='max-w-7xl mx-auto px-6'>

            <h2 className='text-3xl font-bold text-center text-gray-900'>
                What We Do
            </h2>

            <div className='mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    OurService.map((client, index) =>(
                        <div key={index} className='bg-white p-6 rounded-lg shadow'>
                            <h3 className='text-xl font-semibold text-gray-900'>
                                {client.title}
                            </h3>
                            <p className='mt-4 text-gray-700'>
                                {client.text}
                            </p>

                        </div>
                    ))
                }

            </div>

        </div>

    </section>
  )
}

export default WhatWeDo