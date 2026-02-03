import React from 'react'
import Button from './Button'

const ProjectComponent = () => {

  const NgoProject = [
    {
      title : "Education Support Program",
      description : "Providing educational materials, scholarships, and school support to underprivileged children to help them achieve a better future.",
      image : "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      categories : "Education"
    },
    {
      title : "HealthCare Outreach",
      description : "Organizing free medical checkups, health awareness campaigns, and access to essential healthcare services for rural communities.",
      image : "https://images.unsplash.com/photo-1584516150909-c43483ee7932",
      categories : "HealthCare"
    },
    {
      title : "Community Development",
      description : "Empowering local communities through skills training, small business support, and leadership development programs.",
      image : " https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      categories : "Community"
    },
    {
      title : "Food and Relief Program",
      description : "Distributing food, clean water, and essential supplies to families affected by poverty and emergencies.",
      image : "https://images.unsplash.com/photo-1603766806340-d81b48f6a6df",
      categories : "Relief",
    },
  ]
  return (
   <section className='bg-gray-50 min-h-screen'>
    {/* PAGE HEADER ..................... */}
    <div className='bg-green-50 py-20 text-center'>
      <h1 className='text-4xl font-bold text-gray-900'>
        Our Projects
      </h1>

      <p className='mt-4 text-gray-700 max-w-2xl mx-auto'>
      Discover the programs and initiatives through which we make a
      meaningful impact in the lives of individuals and communities.

      </p>

    </div>
    {/* PROJECTS F=GRID.................. */}
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {
          NgoProject.map((project, index) =>(
            <div key={index} className='bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden'>
              {/* IMAGE............. */}
              <img 
              src={project.image} 
              alt={project.title}
              className='h-56 w-full object-cover' 
              />

              {/* CONTENT TEXT................ */}
              <div className='p-6'>
                <span className='text-sm text-green-600 font-semibold'>
                  {project.categories}
                </span>
                <h3 className='mt-2 text-xl font-semibold text-gray-900'>
                  {project.title}
                </h3>
                <p className='mt-3 text-gray-700 text-sm leading-relaxed mb-8'>
                  {project.description}
                </p>
                <Button variant='danger'>Learn More</Button>

              </div>

            </div>
          ))
        }

      </div>

    </section>
    {/* CALL TO ACTION................ */}
    <section className='bg-green-600 py-20 text-center text-white'>
      <h2 className='text-3xl font-bold'>
        Supports Our Project
      </h2>
      <p className='mt-4 max-w-xl mx-auto mb-8'>
      Your donations and support help us expand our reach and impact more
      lives.
      </p>
      <Button variant='secondary'>Donate Now</Button>

    </section>

   </section>
  )
}

export default ProjectComponent