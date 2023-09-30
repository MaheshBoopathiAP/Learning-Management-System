import React from 'react';

function Contact() {
  return (

    <div className='pt-20'>
         {/* Title Section */}
         <div className=" px-4 text-center">
        <h2 className="text-xl md:text-3xl font-bold md:font-bold mb-8" data-aos="fade-up">
          Contact Us
        </h2>
      </div>
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 lg:p-8">
   

      {/* Address Section */}
      <div className="lg:w-1/2 mb-20 p-4 lg:pl-20 pr-10">
        <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
        <p className="text-gray-600 mb-2">15C, Krishna Havisha, SA Garden, Sarojini Nagar, Selvapuram Muthuswamy Colony, Selvapuram South, Coimbatore,<br/> Tamil Nadu 641026.</p>
        <p className="text-gray-600 mb-2">Phone: 0123456789</p>
        <p className="text-gray-600">Email: info@example.com</p>
      </div>

      {/* Contact Form Section */}
      <div className=" w-[100%] lg:w-1/2 p-4 lg:pr-20 px-10 ">
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2 focus:outline-none ml-40 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
