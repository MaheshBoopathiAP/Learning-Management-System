// Footer.js
import footerimg from '../assets/footerimg.png'
import logo from '../assets/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5">
      {/* Brand and Content Columns */}
      <div className="px-4 py-8 lg:col-span-3 lg:pl-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <img className='w-20 h-20' src={logo} alt="Company Logo" />
            <ul className="mt-6 space-y-4 text-sm">
              <li >
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Crafting Tomorrow&apos;s Solutions, Today – Kirabiz is your strategic partner for technology consultancy. Our expert team specializes in IT strategies, software solutions, cybersecurity, and digital transformation. With a focus on innovation and excellence, we empower businesses to thrive in the digital age. Join us on the journey towards success.
                </a>
              </li>
              <li >
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
              <div className="flex items-center mt-5">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>info@kirabiz.in</span>
              </div>               
               </a>
              </li>
              <li >
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91 9111884992</span>
              </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center">
  <div>
    <p className="font-medium text-gray-900 dark:text-white">Useful Links</p>
  </div>
  
  <div>
    <ul className="mt-6 space-y-4 text-sm text-center">
      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Courses
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Services
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>

        <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul>
            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
              &copy; 2022. Kirabiz Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Other Column */}
      <div className="relative h-48 lg:col-span-2 lg:h-full flex align-items-center justify-center">
        <img
          src={footerimg}
          alt="image"
          className="absolute inset-0 h-[150%] w-[90%] md:h-[90%] md:w-[90%] mt-10 mx-5"
        />
      </div>
    </footer>
  );
};

export default Footer;
