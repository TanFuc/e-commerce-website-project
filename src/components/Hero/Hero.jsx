/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from "react-slick";
import Image1 from "/src/assets/hero/headphone.png";
import Image2 from "/src/assets/category/vr.png";
import Image3 from "/src/assets/category/macbook.png";
import Button from '/src/components/Shared/Button.jsx'; 
import PropTypes from 'prop-types';
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptop",
  },
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1, // Add this line to specify the number of slides to show
    autoplay: true, // Add this line to enable autoplay
  };

  return (
    <div className='container'>
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] 
        hero-bg-color flex justify-center items-center">
      <div className='container pb-8 sm:pb-0' >
        {/* Hero section */}
      <Slider {...settings}>
        {HeroData.map((data) => (
          <div key={data.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content */}
              <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
              sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] 
                xl:text-[150px] font-bold'>{data.title2}</h1>
                <div
                data-aos="fade-up" 
                data-aos-duration="500" 
                data-aos-offset="0" 
                data-aos-once="true"
                data-aos-delay="300">
                  <Button 
                    text="Shop By Category"
                    bgColor="bg-primary"
                    textColor="text-white"
                    handler = {handleOrderPopup}
                  />
                </div>
              </div>
              {/* img */}
              <div className='order-1 sm:order-2'>
              <div data-aos="zoom-in"
              data-aos-once="true"
              className='relative z-10'>
                <img src={data.img} alt={`${data.title} ${data.title2}`} className='
               sm:w-[450px] sm:h-[450px] w-[300px] h-[300px]  sm:scale-105 lg:scale-120
                object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
              </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};
Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Hero;
