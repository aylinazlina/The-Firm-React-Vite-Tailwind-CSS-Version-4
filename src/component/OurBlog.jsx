import React from 'react'
import Card from './Card'


const OurBlog = () => {
  return (
    <div className='Blog'>
        <div className='container'>
          
        <h2 className='text-black font-black font-nunito text-[44px]'>Our Blogs</h2>
          <div className='flex justify-between'>
          <Card/>
          <Card/>
          <Card/>
          </div>
          </div>     
    </div>
  )
}

export default OurBlog
