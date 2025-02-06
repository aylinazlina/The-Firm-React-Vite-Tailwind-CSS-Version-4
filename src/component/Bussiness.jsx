import React from 'react'
import Heading from './commoncomponent/Heading'
import Button from "../component/commoncomponent/Button"
import BussinessImg from "../assets/businessImage.png"
const Bussiness = () => {
    return (
        <div className=' p-25'>
            <div className="container">

                <div className='WrapperFull flex justify-between'>
                <div className='LeftWrapper'>
                    <picture>
                        <img src={BussinessImg} className='w-[656px] h-[777px]'/>
                    </picture>
                </div>

                <div className='RightWrapper'>
                    <Heading firstText="Perfect Solution for
Your" secondText="Bussiness" className={"font-nunito font-black text-[44px] leading-[134%] text-text-black max-w-[442px] pt-[112px] pb-10"} />
                    <p className="font-lora font-normal text-[18px] leading-[176%] max-w-[430px] pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                    <Button btnContent="Read More" btnDesign={"btn bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer mt-[32px] px-[21px] py-[12px]"} />

                </div>
                </div>

            </div>
        </div>
    )
}

export default Bussiness
