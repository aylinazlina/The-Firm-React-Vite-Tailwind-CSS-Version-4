import React from 'react'
import Conatiner from './commoncomponent/Conatiner'
import Button from './commoncomponent/Button'
import banner from "../assets/banner.png"



const Banner = () => {
    return (

        <div className='bg-cover bg-center bg-no-repeat z-10 bg-[url(C:\Users\DeLL\Desktop\react_my_firm\src\assets\bannerbackground.png)] 
        relative after:absolute after:content-[" "] after:w-full after:h-full left-0 top-0 after:bg-light-500 after:-z-10' >
            
            <div className="container">
               <div className='BannerWrapper flex items-center '>
               <div className='w-[60%] py-[100px]'>
                    <h1 className='font-nunito text-black font-black text-[48px] leading-[133%]'>Get Bussiness <br/>Solutions with <span className='text-[55px]'>TheFirm.</span></h1>
                    <p className='mt-7 font-lora text-text-black  text-[18px] font-normal leading-[176%] max-w-[54%]'>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy.</p>

                    <Button btnContent="Get in Touch"
                        btnDesign={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer mt-[32px] px-[21px] py-[12px] hover:bg-red-500"}
                    />
                </div>

                <div className='w-[720px] h-full right-0  absolute'>

                    <picture>
                        <img src={banner} alt={banner}className='w-full h-full object-cover'></img>
                    </picture>

                </div>
               </div>
             
        
            </div>


        </div>

    )
}

export default Banner
