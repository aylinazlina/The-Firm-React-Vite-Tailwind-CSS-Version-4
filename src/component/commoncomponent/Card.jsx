import React from 'react'
import Button from './Button'
const Card = ({image,cardTitle,cardtext,profile}) => {
  return (
    <div className='w-[340px] h-[560.78]  px-[5px] shadow-lg shadow-amber-400
     rounded bg-white'>
      <picture>
        <img src={image} />
      </picture>
      <h3 className='font-nunito font-bold text-[24px] px-3 py-2'>{cardTitle}</h3>
      <p className='font-lora font-normal text-[17px] leading-[176%] max-w-[292px] px-3 p-4'>{cardtext} </p>

    <div className='w-full h-[4px] bg-grey'></div>
   <div className='flex justify-between py-2.5 px-2 p-2'>
   <div className='flex'>
    <picture>
      <img src={profile}/>
    </picture>
   <p className='font-nunito text-[14px] font-light'>Alex Liones</p>
   </div>
   <p>28,Aug 2020, 09:48:00</p>
   </div>
      <Button btnContent="Read More"
        btnDesign={"btn bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer m-4"}
      />
    </div>



    
  )
}

export default Card
