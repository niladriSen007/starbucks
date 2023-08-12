import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-6 md:px-12 mt-24 w-[99vw]">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-5 md:flex-row justify-between items-start ">
        <div className=" mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </p>
        </div>
        <div className="">
          <ul className='flex flex-col gap-5'>
            <li className='font-bold  text-xl'>About Us</li>
            <li>Our Heritage</li>
            <li>Our Company</li>
            <li>Coffeehouse</li>
          </ul>
        </div>
        <div className="">
          <ul className='flex flex-col gap-5'>
            <li className='font-bold  text-xl'>Responsibility</li>
            <li>Community</li>
            <li>Ethical Sourcing</li>
            <li>Environment</li>
            <li>Diversity</li>
          </ul>
        </div>
        <div className="">
          <ul className='flex flex-col gap-5'>
            <li className='font-bold  text-xl'>Quick Links</li>
            <li>Delivery</li>
            <li>Season/'s Gifting</li>
            <li>Careers</li>
            <li>Customer Service</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold">Visit Us</h2>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-300">Find a Store</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300">Store Locator</a>
          </p>
        </div>
      </div>
      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Starbucks Corporation. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
