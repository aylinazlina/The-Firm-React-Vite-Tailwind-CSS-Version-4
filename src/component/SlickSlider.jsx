import React from 'react'
import Heading from './commoncomponent/Heading'
import windows from "../assets/windows_logo.png"
import google from "../assets/google_logo.png"
import firefox from "../assets/firefox_logo_icon.png"
import opera from "../assets/Opera_Software_logo.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Partner = () => {

  const item = [

    {
      id: 1,
      img: windows,
    },
    {
      id: 2,
      img: google,
    },
    {
      id: 3,
      img: firefox,
    },

    {
      id: 4,
      img: opera,
    },


  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  //react slick slider customArrows 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse absolute right-0 top-1/2 -translate-y-1/2  rounded-full "
        }
        style={{
          ...style,
          display: "block",
          padding: "20px",
          background: "purple",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
        onClick={onClick}
      >
        <div>
          <IoIosArrowForward className="text-white  text-2xl cursor-grab" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse shadow-2xl absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10"
        }
        style={{
          ...style,
          display: "block",
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-white  text-2xl cursor-grab" />
      </div>
    );
  }

  return (
    <div className='p-25'>
      <div className="container">
        <Heading className={"text-center font-nunito text-[44px] font-black leading-[58.7%] p-12"} firstText="Our" secondText="Partner" />

        {/* slick slider */}

        <div className="slider-container">
          <Slider {...settings}>

            {item.map((data) => (

              <div className='p-6'>
                <div className='bg-grey p-8 rounded-2xl flex justify-center items-center cursor-pointer'>

                  <img src={data.img} className='w-[120px] h-[120px]  object-contain grayscale hover:grayscale-0' />

                </div>
              </div>

            ))}




          </Slider>
        </div>



        {/* slick slider */}



      </div>
    </div>
  )
}

export default Partner
