import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import brandlogo from '../assets/brand.png';
import { Link, animateScroll  } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../css/Home.css'

function Nav() {
  const [click, setClick] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const handleClick = () => setClick(!click);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setClick(false);
  };

  const content = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900'>
      <ul className='text-center text-xl p-20'>
        <li
          className={`my-4 py-4 border-b border-slate-800 hover:bg-cyan-400 hover:rounded ${
            selectedLink === 'Home' ? 'text-cyan-400 border-cyan-400' : 'text-white'
          }`}
        >
          <Link
            to='Home'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </Link>
        </li>
        <li
          className={`my-4 py-4 border-b border-slate-800 hover:bg-cyan-400 hover:rounded ${
            selectedLink === 'About' ? 'text-cyan-400 border-cyan-400' : 'text-white'
          }`}
        >
          <Link
            to='About'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick('About')}
          >
            About
          </Link>
        </li>
        <li
          className={`my-4 py-4 border-b border-slate-800 hover:bg-cyan-400 hover:rounded ${
            selectedLink === 'Contact' ? 'text-cyan-400 border-cyan-400' : 'text-white'
          }`}
        >
          <Link
            to='Contact'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </Link>
        </li>
        <li
          className={`my-4 py-4 border-b border-slate-800 hover:bg-cyan-400 hover:rounded ${
            selectedLink === 'Courses' ? 'text-cyan-400 border-cyan-400' : 'text-white'
          }`}
        >
          <Link
            to='Courses'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick('Courses')}
          >
            Courses
          </Link>
        </li>
        <li
          className={`my-4 py-4 border-b border-slate-800 hover:bg-cyan-400 hover:rounded ${
            selectedLink === 'Services' ? 'text-cyan-400 border-cyan-400' : 'text-white'
          }`}
        >
          <Link
            to='Services'
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick('Services')}
          >
            Services
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='fixed top-0 w-full bg-blue-950 opacity-90 z-50  py-2'>
      <nav>
        <div className='h-10vh flex justify-between z-50 text-white pl-20'>
          <div className='flex items-center flex-1'>
            <span className='text-3xl font-bold'>
              <img src={brandlogo} className='w-14 h-14 ' alt='Brand Logo' />
            </span>
          </div>
          <div className='lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden'>
            <div className='flex-10 '>
              <ul className='flex gap-8 mr-16 text-[18px] mt-3'>
                <li
                  className={`hover:text-cyan-400 transition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer ${
                    selectedLink === 'Home' ? 'text-cyan-400 selected-link' : 'text-white'
                  }`}
                >
                  <Link
                    to='Home'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick('Home')}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`hover:text-cyan-400 transition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer ${
                    selectedLink === 'About' ? 'text-cyan-400 selected-link' : 'text-white'
                  }`}
                >
                  <Link
                    to='About'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick('About')}
                  >
                    About
                  </Link>
                </li>
                <li
                  className={`hover:text-cyan-400 transition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer ${
                    selectedLink === 'Contact' ? 'text-cyan-400 selected-link' : 'text-white'
                  }`}
                >
                  <Link
                    to='Contact'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick('Contact')}
                  >
                    Contact
                  </Link>
                </li>
                <li
                  className={`hover:text-cyan-400 transition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer ${
                    selectedLink === 'Courses' ? 'text-cyan-400 selected-link' : 'text-white'
                  }`}
                >
                  <Link
                    to='Courses'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick('Courses')}
                  >
                    Courses
                  </Link>
                </li>
                <li
                  className={`hover:text-cyan-400 transition border-b-2 border-slate-900 hover:border-cyan-400 cursor-pointer ${
                    selectedLink === 'Services' ? 'text-cyan-400 selected-link' : 'text-white'
                  }`}
                >
                  <Link
                    to='Services'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick('Services')}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>{click && content}</div>
          <button className='block sm:hidden transition px-20' onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
