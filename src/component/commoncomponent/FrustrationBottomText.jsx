import React from 'react'
import { FaQuestion } from 'react-icons/fa'

const FrustrationBottomText = ({text}) => {
  return (
    <div className='pt-3'>
      
    <p className='font-lora font-normal text-[18px] leading-[176%] text-text-black tracking-normal max-w-[438px] flex items-center gap-2' ><FaQuestion className='text-yellow inline-block ml-4'/>{text}</p>

    </div>
  )
}

export default FrustrationBottomText
