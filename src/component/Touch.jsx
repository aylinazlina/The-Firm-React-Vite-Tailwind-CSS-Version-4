import React from "react";
import Heading from "./commoncomponent/Heading";
import touchImage from "../assets/TouchImageMap.png";
import Button from "../component/commoncomponent/Button";
const Touch = () => {
  return (
    <div className="">
      <div className="pt-24 pb-100">
        <div className="ImageCard">
          <picture>
            <img src={touchImage} className="w-[1442px] h-[396px] " />
          </picture>
          <div className="container ">
            <div className="touchCard w-[938px] h-[507px] bg-white shadow-2xl rounded-2xl pt-18">
              <Heading
                firstText="Get in"
                secondText="Touch"
                className={
                  "font-nunito text-[44px] font-black leading-[134%] text-center"
                }
              />
              <div className="flex justify-around pt-10">
                <div className="NameWrapper flex flex-col">
                  <label className="touchName font-nunito font-bold text-gray-400">Name</label>
                  <input
                    type="text"
                    className="border-b-2  w-[353px] inline-block"
                  />
                </div>

                <div className="EmailWrapper flex flex-col">
                  <label className="touchEmail font-nunito font-bold text-gray-400">Email</label>
                  <input
                    type="email"
                    className="border-b-2 w-[353px] inline-block"
                  />
                </div>
              </div>

              <div className="flex justify-around pt-10">
                <div className="PhoneWrapper flex flex-col">
                  <label className="touchPhone font-nunito font-bold text-gray-400">Phone</label>
                  <input
                    type="number"
                    className="border-b-2 w-[353px] inline-block"
                  />
                </div>

                <div className="SubjectWrapper flex flex-col">
                  <label className="touchSubject font-nunito font-bold text-gray-400">Subject</label>
                  <input
                    type="option"
                    className="border-b-2 w-[353px] inline-block"
                  />
                </div>
              </div>

              <Button
                btnContent="Submit"
                btnDesign={
                  "bg-[#FACA10] px-10 py-3 rounded-lg font-nunito font-black text-[18px] leading-[25px] text-white hover:bg-black mt-20 ml-[40%]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
