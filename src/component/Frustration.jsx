import React from 'react'
import Heading from "../component/commoncomponent/Heading"
import FrustrationBottomText from './commoncomponent/FrustrationBottomText'
import FrusRightImage from "../assets/FrustrationImage.png"
const Frustration = () => {
    return (

        <div className="bg-[#FBFBFB] p-25">
            <div className='container'>

                <div className='flex'>
                <div className='LeftWrapper'>
                    <Heading firstText="Frustration of" secondText="Clients" className={"font-nunito font-black text-[44px] leading-[134%]"} />

                    <p className='font-lora text-[18px] font-normal leading-[176%] text-text-black max-w-[560px] pt-6 pb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <FrustrationBottomText text="Loren rasion gravida auem is bibenua tase" />
                    <FrustrationBottomText text="Lorem Ipsum is simply dummy text of the." />
                    <FrustrationBottomText text="Printing and typesetting industry. Lorem Ipsum" />
                    <FrustrationBottomText text="When an unknown printer took a galley of type and scrambled it" />
                </div>

                <div className='RightWrapper'>
                <picture>
                    <img src={FrusRightImage}/>
                </picture>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Frustration
