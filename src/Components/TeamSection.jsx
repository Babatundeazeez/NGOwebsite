import { Quote } from 'lucide-react'
import React from 'react'

const TeamSection = () => {

    const teams = [
        {
            name : "Azeez Aderemi",
            role : "Team Lead",
            feedBack : "",
            image : "/Image/profileImage2.jpg"
        },
        {
            name : "Mustaqeem Olasunkami",
            role : "Zonal Coordinator",
            feedBack : "",
            image : ""
        },
        {
            name : "Summayah Iremide",
            role : "Assistance Team Lead",
            feedBack : "",
            image : ""
        }
    ]
  return (
    <section className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
                Meet Our Teams
            </h2>

            <div className='"mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    teams.map((team, index) =>(
                        <div key={index} className='bg-white p-6 rounded-lg shadow text-center'>
                            <Quote className='w-10 h-10 text-blue-500 mb-4' />
                            <p className='text-gray-600 italic'>{team.feedBack}</p>
                            <img 
                            src={team.image} 
                            alt={team.image}
                            className='w-32 h-32 mx-auto rounded-full object-cover' />
                            <h3 className='mt-4 text-xl font-semibold text-gray-900'>{team.name} </h3>
                            <span className='text-gray-600'>{team.role}</span>


                        </div>
                    ))
                }

            </div>

        </div>

    </section>
  )
}

export default TeamSection