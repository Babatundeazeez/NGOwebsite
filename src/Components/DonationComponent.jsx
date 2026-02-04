import React, { useState } from 'react'
import Button from './Button'
import { Currency } from 'lucide-react'

const DonationComponent = () => {
    const publicKey = import.meta.VITE_PAYSTACK_PUBLIC_KEY

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")

    const payWithStack = () =>{
        if (!email || !amount) {
            alert("Please fill all fields")
            return
        }

        const handler = window.PaystackPop.setup({
            key : publicKey,
            email : email,
            amount : amount * 100,
            Currency : "NGN",
            ref : "NGO_" + Math.floor(Math.random() * 1000000000),
            metadata: {
                custom_fields: [
                    {
                        display_name : name,
                        variable_name : "donor_name",
                        value : name,
                    },
                ],
            },
            callback: function (response) {
                alert("Payment Successful ! Ref: " + response.reference)
            },
            onClose: function (){
                alert("Payment window close")
            },
        })
        handler.openIframe()
    }
  return (
    <div className='bg-gray-50 min-h-screen'>

        {/* HERO SECTION...... */}
        <section className='bg-green-600 text-white py-20 text-center px-6'>
            <h1 className='text-4xl font-bold'>
                Support Our Cause
            </h1>
            <p className='mt-4 max-w-2xl mx-auto'>
            Your donation helps us provide education, healthcare, and essential
            support to vulnerable communities.
            </p>

        </section>
        {/* DONATION OPTIONS........... */}
        <section className='max-w-5xl mx-auto px-6 py-20'>
            <div className='grid md:grid-cols-2 gap-12'>
                {/* LEFT SIDE INFO............. :  */}

                <div>
                    <h2 className='text-3xl font-bold text-gray-900'>
                        Why Donate ?
                    </h2>
                    <p className='mt-4 text-gray-700 leading-relaxed'>
                    Every contribution makes a difference. Your support helps us
                    reach underserved communities and deliver life-changing programs.
                    </p>

                    <ul className='mt-6 space-y-3 text-gray-700'>

                    <li>✔ ₦5,000 provides school supplies</li>
                    <li>✔ ₦10,000 supports healthcare outreach</li>
                    <li>✔ ₦25,000 empowers community projects</li>

                    </ul>

                    <img 
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" 
                    alt="donation Impact"
                    className='mt-8 rounded-lg shadow-md' 
                    />
                </div>

                {/* RIGHT DONATION......... */}
                <div className='bg-white p-8 rounded-lg shadow-md'>
                    <h3 className='text-2xl font-semibold text-gray-900'>
                        Make a Donation
                    </h3>

                    <form className='mt-6 space-y-5'>
                        <input 
                        type="text"
                        placeholder='Full Name'
                        className='w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                        <input 
                        type="email"
                        placeholder='Email Address'
                        className='w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />

                         <input 
                         type="number"
                         placeholder='Donation Amount (#)'
                         className='w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                         value={amount}
                         onChange={(e) => setAmount(e.target.value)}
                          />

                          <select 
                          name="" id=""
                          className='w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500'

                          >
                            <option value="">One-time Donation</option>
                            <option value="">Monthly Donation</option>
                          </select>

                          <Button variant='warning' onClick={payWithStack}>Donate Now</Button>

                          <p className='text-sm text-gray-500 text-center'>
                            Secure payment processing. Your information is safe
                          </p>

                    </form>

                </div>

            </div>

        </section>
        {/* TRUST SECTION................. */}
        <section className='bg-white py-16 text-center px-6'>
            <h2 className='text-2xl font-bold text-gray-900'>
                Transparent & Trust
            </h2>
            <p className='mt-4 max-w-2xl mx-auto text-gray-700'>
            We are committed to transparency and accountability. Every donation
            is used responsibly to maximize impact.
            </p>

        </section>

    </div>
  )
}

export default DonationComponent