import { FaPlay, FaHeart, FaInfoCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/thumbs"; 
import "./banner.css"; 

import movies from "../data/movies";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-full h-[800px] relative">
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[800px] mb-4 overflow-hidden"
        spaceBetween={10}
        slidesPerView={1}
       

      >
        {movies.map((m, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[800px] bg-no-repeat bg-cover relative"
              style={{
                backgroundImage: `url(${m.bg})`,
                backgroundPosition: "center",
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent "></div>
              <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-10">
                <div className="flex flex-col space-y-5 items-baseline w-[50%] space-x-6 absolute left-4" >
                  <p className="text-white text-xl py-2 px-4
                bg-gradient-to-r from-red-700 to-white ">Phim bộ mới</p>
                  <div className="flex flex-col space-y-4">
                    <h2 className=" text-5xl text-white font-bold ">{m.title}</h2>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-black text-xl py-2 px-4 
                bg-white rounded-md">{m.age}</p>
                    <p className="text-white text-xl py-2 px-4 
                 bg-black rounded-md ">{m.year}</p>
                    <p className="text-white text-xl py-2 px-4 
                 bg-black rounded-md ">{m.episodes}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {m.tags.map((tag, i) => (
                      <p
                        key={i}
                        className="text-white text-xl py-2 px-4 bg-transparent border rounded-md"
                      >
                        {tag}
                      </p>
                    ))}

                  </div>
                  <p className="text-white line-clamp-3 w-[70%]"
                  >
                    {m.desc}
                  </p>
                  <div className="pl-10 flex items-center space-x-20 justify-center">
                    <a href="#" className="
              flex items-center justify-center 
               w-20 h-20 rounded-full text-2xl
               border-2 border-red-700 text-white bg-red-700
               hover:bg-red-600 hover:text-white hover:border-white
               transition-all duration-300 ease-in-out 
               transform hover:scale-110">
                      <FaPlay />
                    </a>
                    <div className="flex items-center justify-center space-x-10 text-2xl shadow-lg bg-black/40 border-gray-400 
                         text-white border-2 rounded-full px-8 py-4">
                      <button className="hover:text-red-500 transition-all duration-300 ease-in-out  transform hover:scale-125">
                        <FaHeart />
                      </button>
                      <button className="hover:text-yellow-500 transition-all duration-300 ease-in-out  transform hover:scale-125">
                        <FaInfoCircle />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="absolute bottom-20 right-10 w-[50%] z-20 ">
        <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={5}
        spaceBetween={10}
        watchSlidesProgress
        className="w-full h-[100px]"
        >
          {movies.map((m, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={m.thumb}
                alt={m.title}
                className="w-full h-full object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </SwiperSlide>
        ))}
        </Swiper>

      </div>


    </div>
  )
}

export default Banner