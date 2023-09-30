import  { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import 'glidejs/dist/css/glide.core.min.css';
import 'glidejs/dist/css/glide.theme.min.css';
import 'tailwindcss/tailwind.css';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FaGraduationCap } from 'react-icons/fa';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import teach2 from '../assets/teach2.png'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';





import AOS from 'aos';
import 'aos/dist/aos.css';

const StaticCard = () => {
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
        perView: 5,
        gap: 16,
        
        breakpoints: {
          1280: {
            perView: 5,
          },
          1024: {
            perView: 3,
            autoplay: 2000,
          },
          768: {
            perView: 1,
            autoplay: 2000,
          },
        },
      };

      const glide = new Glide(glideRef.current, config);

      glide.mount();
    }
  }, []);

  return (
    <div className='pt-20'>
          <div className="bg-cover flex flex-col justify-center items-center">
      <div className="section-title mb-8 flex" data-aos="fade-up">
        <h2 className="text-xl md:text-3xl font-bold md:font-bold">Value Added Services</h2>
      </div>
      <div
        className="glide xl:w-[90rem] lg:w-[70rem] md:w-[50rem] sm:w-[40rem] px-16 py-8 bg-opacity-60 rounded-3xl relative"
        ref={glideRef}
      >
        <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
        <li className="glide__slide group relative">
      <div className="flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-slate-100">
        <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
        <FaGraduationCap  className='w-10 h-10'/>
        </div>
        <span className="text-black font-bold pt-5">
          Placement Assistence
        </span>
          </div>
          {/* <span className="absolute w-4 h-4 rounded-full bg-red-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span> */}
        </li>

        <li className="glide__slide group relative">  
          <div className="flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-slate-100">
            <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
          <FontAwesomeIcon icon={faBuilding} className='w-8 h-8'/>
             </div>
            <span className="text-black font-bold pt-5">
            Industrial Interaction 
            </span>
          </div>
          {/* <span className="absolute w-4 h-4 rounded-full bg-orange-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span> */}
        </li>

        <li className="glide__slide group relative">
          <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-slate-100">
            <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
            <FontAwesomeIcon icon={faLaptop} size='2x' />            </div>
            <span className="text-black font-bold pt-5">
            Mock Interviews
            </span>
          </div>
          {/* <span className="absolute w-4 h-4 rounded-full bg-yellow-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span> */}
        </li>

        <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size='2x' />
              </div>
              <span className="text-black font-bold pt-5">
              Profile Building
              </span>
            </div>
            {/* <span className="absolute w-4 h-4 rounded-full bg-teal-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span> */}
          </li>

          <li className="glide__slide group relative">
            <div className="relative flex flex-col text-center h-40 items-center justify-center rounded-3xl duration-300 ease-in-out bg-slate-100">
              <div className="rounded-full bg-white shadow-2xl w-20 h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} size='2x' />
              </div>
              <span className="text-black font-bold pt-5">
              Real-time Projects
              </span>
            </div>
            {/* <span className="absolute w-4 h-4 rounded-full bg-fuchsia-600 right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span> */}
          </li>


          </ul>
        </div>
        {/* <div className="glide__arrows flex justify-center items-center left-0 right-0 mt-10" data-glide-el="controls">
  <button className="glide__arrow glide__arrow--left border border-none relative" data-glide-dir="<">
    <div className="bg-blue-800 rounded-full my-auto hover:bg-red-500 duration-300 ease-in-out transform group-hover:scale-105 p-1">
    <FontAwesomeIcon icon={faCaretLeft} className="text-white-800 text-xl h-10 w-10 rounded-full my-auto" />
    </div>
  </button>
  <button className="glide__arrow glide__arrow--right right-2 border border-none relative" data-glide-dir=">">
    <div className="bg-blue-800 rounded-full my-auto hover:bg-red-500 duration-300 ease-in-out transform group-hover:scale-105 p-1">
      <FontAwesomeIcon icon={faCaretRight} className="text-white-800 text-xl h-10 w-10 rounded-full my-auto" />
    </div>
  </button>
</div> */}
  </div>
    </div>
    <div className="grid grid-flow-row-dense grid-cols-4 my-10 md:mx-10 md:my-10 ">
     <div className=" col-span-4 md:col-span-2 mx-5 flex flex-col justify-center items-center">
      <img src={teach2}></img>
     </div>
     <div className=" col-span-4 md:col-span-2 mx-5 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-4">What we do special apart from social learning platform?</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Customized Training Programs by trainer.</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Live Virtual Training</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Practical Application and Projects</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Assessments and Certifications</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Industry Connections and Networking Opportunities</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Career Services and Job Placement Assistance</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Ongoing Support and Alumni Engagement</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Continuous Learning Resources</p>
        </li>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />
          <p className="sm:text-base">Collaborative Projects and Teamwork</p>
        </li>
      </ul>
    </div>
    </div>
    </div>

  );
};

export default StaticCard;
