import React from 'react'
import Button from './Button'

const CallToAction = () => {
  return (
   <section className='py-20 bg-green-600 text-white text-center'>
    <h2 className='text-3xl font-bold'>
    Join Us in Making a Difference
    </h2>

    <p className='mt-4 max-w-xl mx-auto mb-8'>
    Your support helps us reach more communities and change more lives.
    </p>

    <Button variant='success'>Support Our Cause</Button>

   </section>
  )
}

export default CallToAction