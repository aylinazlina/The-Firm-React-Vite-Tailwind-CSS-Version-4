import React from 'react'
import card_one from "../assets/card_one.png"
import alex from "../assets/alex.png"

import Button from './commoncomponent/Button'
const Card = () => {
  return (
    <div className='w-[340px] h-[560.78]  px-[5px] shadow-black
     rounded'>
      <picture>
        <img src={card_one} />
      </picture>
      <h3 className='font-nunito font-bold text-[24px] px-3 py-2'>Lorem Ipsum is </h3>
      <p className='font-lora font-normal text-[17px] leading-[176%] max-w-[292px] px-3 p-4'>Lorem Ipsum is simply  text of the printing and type setting industry.Make a type specimen. </p>

    <div className='w-full h-[4px] bg-red-500'></div>
   <div className='flex justify-between py-2.5 px-2 p-2'>
   <div className='flex'>
    <picture>
      <img src={alex}/>
    </picture>
   <p>Alex Liones</p>
   </div>
   <p>28,Aug 2020, 09:48:00</p>
   </div>
      <Button btnContent="Read More"
        btnDesign={"bg-black font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer m-4"}
      />
    </div>



    
  )
}

export default Card
````