import React from 'react'
import Heading from "./commoncomponent/Heading"
import ChooseImage from "../assets/choose.png"
import Button from "../component/commoncomponent/Button"
import buzzer from "../assets/buzzer.png"
const Choose = () => {
    return (
        <div className='bg-grey'>
            <div className='container'>
                <div className='p-25' >
                    <Heading firstText="Reason to Choose" secondText="Us" className={"font-nunito font-black text-[44px] leading-[134%] text-center pb-7 "} />

                    <p className='font-lora font-normal text-[18px] leading-[176%] max-w-[864px] pl-20 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                    <div className='flex justify-between pt-13' >
                        <Button btnContent="Market Research" btnDesign={"Design bg-white w-[160px] h-[50px] rounded-lg font-nunito font-black text-[#C4C4C4] leading-[25px] text-[18px] hover:bg-yellow hover:text-white"} />
                        <Button btnContent="Branding" btnDesign={"Design bg-white w-[160px] h-[50px] rounded-lg font-nunito font-black text-[#C4C4C4] leading-[25px] text-[18px] hover:bg-yellow hover:text-white "} />
                        <Button btnContent="Reporting" btnDesign={"Design bg-white w-[160px] h-[50px] rounded-lg font-nunito font-black text-[#C4C4C4] leading-[25px] text-[18px] hover:bg-yellow hover:text-white "} />
                        <Button btnContent="Data Analysis" btnDesign={"Design bg-white w-[160px] h-[50px] rounded-lg font-nunito font-black text-[#C4C4C4] leading-[25px] text-[18px] hover:bg-yellow hover:text-white"} />
                    </div>
                </div>


                <div className='Bottom bg-white w-full h-[413px] rounded-2xl'>
                    <div className='BottomWrapper flex justify-between'>

                        <div className='bottomLeftWrapper w-[556px] h-[291px] rounded-2xl shadow-xl  mt-13 ml-[26px]'>
                            <picture>
                                <img src={ChooseImage} className='rounded-lg mt-4 ml-3' />
                            </picture>
                        </div>

                        <div className='bottomRightWrapper'>
                            <div className='flex mt-13'>
                                <picture>
                                    <img src={buzzer} />
                                </picture>
                                <Heading secondText="Branding" className={"font-bold font-nunito text-[30px] leading-[41px] pb-5"} />
                            </div>
                            <p className='max-w-[500px] font-lora font-normal text-[18px] leading-[176%] pb-7 pl-19'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            <Button btnContent="Read More" btnDesign={"bg-black px-7 py-4 rounded-lg font-nunito font-black text-white leading-[25px] text-[18px] cursor-pointer hover:bg-yellow ml-19"} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
