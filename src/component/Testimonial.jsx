import React from "react";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Heading from "../component/commoncomponent/Heading";
import tesImg1 from "../assets/testimonial1.jpg";
import tesImg2 from "../assets/testimonial2.jpg";
import tesImg3 from "../assets/testimonial3.jpg";
import tesImg4 from "../assets/testimonial4.jpg";
import tesImg5 from "../assets/testimonial5.jpeg";

const testimonialData = [
  {
    id: 1,
    name: "Brad Pitt",
    role: "Manager",
    img: tesImg1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    id: 2,
    name: "Robert Patinson",
    role: "Director",
    img: tesImg2,
    description:
      "The wind whispered through the trees, carrying the scent of rain and fresh earth. A lone traveler walked the narrow path, boots crunching against gravel, eyes scanning the horizon for a sign of shelter.",
  },
  {
    id: 3,
    name: "Azlina Arabi Hossain Aylin",
    role: "Forntend Developer",
    img: tesImg3,
    description:
      "The sky, painted in hues of violet and gold, hinted at the approaching dusk. Somewhere in the distance, an owl hooted—a soft reminder that the night belonged to the unseen.",
  },
  {
    id: 4,
    name: "Leonardo Di Caprio",
    role: "Human Resource officer",
    img: tesImg4,
    description:
      "Somewhere in the distance, an owl hooted, marking the beginning of the night’s quiet symphony. Beneath the vast expanse of twinkling stars, a lone traveler adjusted their cloak and continued down the winding path, their footsteps muffled by the soft moss underfoot.",
  },
  {
    id: 5,
    name: "Anonto Jalil",
    role: "General Secretary",
    img: tesImg5,
    description:
      "The sky shimmered with hues of violet and gold as the last rays of the sun dipped below the horizon. A cool breeze whispered through the ancient trees, carrying with it the scent of earth and pine.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationRef = useRef(null);

  return (
    <div className="bg-[#F6F6F6] py-25">
      <div className="container">
        <Heading
          firstText="Our"
          secondText="Testimonials"
          className={
            "font-nunito font-black text-[44px] leading-[134%] text-center"
          }
        />

        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
          }}
          className="relative py-12 flex flex-center overflow-hidden max-w-[1000px] mx-auto"
          wrapperClass="text-center flex justify-center items-center"
        >
          {testimonialData.map((data, index) => (
            <SwiperSlide key={data.id}>
              <div className="relative transition-all duration-300 flex justify-center">
                <div
                  className={`rounded-full transition-all duration-300 w-40 h-40 ${
                    index === activeIndex
                      ? "border-primary border-6 border-yellow object-cover overflow-hidden scale-125"
                      : "border-transparent scale-100 opacity-50"
                  }`}
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full object-cover mx-auto w-40 h-40"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <p className="description w-1/2 text-center mx-auto py-8">
            {testimonialData[activeIndex].description}
          </p>
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold pr-4 border-r-2">
              {testimonialData[activeIndex].name}
            </h3>
            <span className="pl-3 tracking-[0.85px]">
              {testimonialData[activeIndex].role}
            </span>
          </div>
        </div>

        <div
          ref={paginationRef}
          className="my-swiper-pagination flex justify-center mt-6"
        />
      </div>
    </div>
  );
};

export default Testimonial;
