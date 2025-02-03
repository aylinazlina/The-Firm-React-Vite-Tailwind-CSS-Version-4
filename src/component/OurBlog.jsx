import React from 'react'
import Card from '../component/commoncomponent/Card'
import headingImage from "../assets/card_one.png"
import headingImage2 from "../assets/Rectangle_63.png"
import headingImage3 from "../assets/Rectangle_65.png"
import profileOne from "../assets/alex.png"
import profileTwo from "../assets/Ellipse.png"
import profileThree from "../assets/Ellipse3.png"
import Heading from './commoncomponent/Heading'


const OurBlog = () => {
  return (
    <div className='Blog bg-grey p-25'>
      <div className='container'>

      <Heading  className={"text-center font-nunito text-[44px] font-black leading-[58.7%] mb-16"} firstText="Our" secondText="Blogs"/>
       
        <div className='flex justify-between'>
          <Card image={headingImage} cardTitle={"Lorem Ipsum is "}
            cardtext={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."} profile={profileOne} />
          <Card image={headingImage2} cardTitle={"Lorem Ipsum is "}
            cardtext={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."} profile={profileTwo} />
          <Card image={headingImage3} cardTitle={"Lorem Ipsum is "}
            cardtext={"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."} profile={profileThree} />


        </div>
      </div>
    </div>
  )
}

export default OurBlog
