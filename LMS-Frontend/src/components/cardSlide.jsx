import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import 'glidejs/dist/css/glide.core.min.css';
import 'glidejs/dist/css/glide.theme.min.css';
import 'tailwindcss/tailwind.css';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import about from '../assets/about.png';
import imgc1 from '../assets/html.png';
import imgc2 from '../assets/css.png';
import imgc3 from '../assets/javascript.png';
import imgc4 from '../assets/nodejs.jpeg';
import imgc5 from '../assets/reactjs.png';
import imgc6 from '../assets/qualityassurance.png';
import imgc7 from '../assets/uiux.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardSlide = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (glideRef.current) {
      const config = {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        gap: 24,
        autoplay: 2000,
        breakpoints: {
          1280: {
            perView: 4,
          },
          1024: {
            perView: 3,
          },
          768: {
            perView: 1,
          },
        },
      };

      const glide = new Glide(glideRef.current, config);

      glide.mount();
    }
  }, []);

  return (
    <div className='pt-20 md:pt-20'>
    <div className="flex  flex-col items-center">
        <div className="section-title mb-8 flex" data-aos="fade-up">
          <h1 className="text-xl md:text-3xl font-bold md:font-bold text-center">About</h1>
        </div>
        </div>
      <div className="grid grid-flow-row-dense grid-cols-5 md:mx-10 md:my-10">
        <div className="col-span-5 md:col-span-2 mx-5 flex flex-col justify-center items-center mb-5">
          <img src={about} alt="About Image" />
        </div>
        <div className="col-span-5 md:col-span-3 mx-5 flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-4xl font-bold md:font-bold mb-4 text-center"><p className='text-blue-500'>15+ Years</p><p> Of Industrial Training Experience</p></h1>
          <ul className="list-disc pl-5 space-y-2">
        <li className="flex items-center space-x-3 my-3">
        <FontAwesomeIcon icon={faCheckDouble} className="text-blue-500 text-lg" />
          <p className="sm:text-base">Kirabiz is an IT-based training institute dedicated to providing comprehensive education and expertise in the field of Information Technology.</p>
        </li>
        <li className="flex items-center space-x-3 my-1">
        <FontAwesomeIcon icon={faCheckDouble} className="text-blue-500 text-lg" />
          <p className="sm:text-base">Our institute offers a supportive learning environment where students receive personalized attention and access to a wide range of resources to enhance their learning experience.</p>
        </li>
        <li className="flex items-center space-x-3 my-1">
        <FontAwesomeIcon icon={faCheckDouble} className="text-blue-500 text-lg" />
          <p className="sm:text-base">We take pride in providing placement assistance and fostering the development of essential skills such as problem-solving, logical thinking, and effective communication.</p>
        </li>
        <li className="flex items-center space-x-3 my-1">
        <FontAwesomeIcon icon={faCheckDouble} className="text-blue-500 text-lg" />
          <p className="sm:text-base">Kirabiz is backed by the support of two prominent IT companies with over 7 years of experience in the industry, further enhancing our credibility and expertise.</p>
        </li>
      </ul>
        </div>
      </div>

      <div className="bg-cover flex mt-20 md:mt-0 flex-col  justify-center items-center">
        <div className="section-title mb-8 flex" data-aos="fade-up">
          <h2 className="text-xl md:text-3xl font-bold md:font-bold text-center">Technologies Taught</h2>
        </div>
        <div
          className="glide xl:w-[80rem] lg:w-[60rem] md:w-[40rem] sm:w-[30rem] px-16 py-8 bg-opacity-60 rounded-3xl relative"
          ref={glideRef}
        >
          <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
        <li className="glide__slide group relative">
      <div className="flex flex-col text-center bg-red-500 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
        <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
          <img src={imgc1} alt="Slide 1" className="w-12 h-12" />
        </div>
        <span className="text-black font-bold pt-5">
          HTML
        </span>
          </div>
          <span className="absolute w-4 h-4 rounded-full bg-red-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        </li>

        <li className="glide__slide group relative">  
          <div className="flex flex-col text-center bg-orange-400 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
            <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
              <img src={imgc2} alt="Slide 2" className="w-12 h-12" />
            </div>
            <span className="text-black font-bold pt-5">
              CSS
            </span>
          </div>
          <span className="absolute w-4 h-4 rounded-full bg-orange-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        </li>

        <li className="glide__slide group relative">
          <div className="relative flex flex-col text-center bg-yellow-500 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
            <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
              <img src={imgc3} alt="Slide 3" className="w-12 h-12" />
            </div>
            <span className="text-black font-bold pt-5">
              JAVASCRIPT
            </span>
          </div>
          <span className="absolute w-4 h-4 rounded-full bg-yellow-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        </li>

        <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center bg-teal-500 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
                <img src={imgc4} alt="Slide 4" className="w-12 h-12" />
              </div>
              <span className="text-black font-bold pt-5">
                NODEJS
              </span>
            </div>
            <span className="absolute w-4 h-4 rounded-full bg-teal-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          </li>

          <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center bg-fuchsia-400 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
                <img src={imgc5} alt="Slide 5" className="w-12 h-12" />
              </div>
              <span className="text-black font-bold pt-5">
                REACT
              </span>
            </div>
            <span className="absolute w-4 h-4 rounded-full bg-fuchsia-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          </li>

          <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center bg-sky-300 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
                <img src={imgc6} alt="Slide 6" className="w-12 h-12" />
              </div>
              <span className="text-black font-bold pt-5">
                QUALITY ASSURANCE
              </span>
            </div>
            <span className="absolute w-4 h-4 rounded-full bg-sky-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          </li>

          <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center bg-cyan-300 h-60 items-center justify-center rounded-3xl duration-300 ease-in-out group-hover:bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
                <img src={imgc7} alt="Slide 7" className="w-12 h-12" />
              </div>
              <span className="text-black font-bold pt-5">
                UI/UX
              </span>
            </div>
            <span className="absolute w-4 h-4 rounded-full bg-cyan-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          </li>

          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
