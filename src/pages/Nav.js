
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

import { useState } from "react";
// import '../src/assets/ddd.png'

// import './/assets/contactA.png';
// import './/assets/login.png';
// import './/assets/Jamie Chastain (1).mp4';
// import './/assets/aaa.png';
// import './/assets/sgin-up.png';

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cdnq0ls', 'template_9unefiq', form.current, '3Ow72KHAu62yOOm-D')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  // ============
  const [navbar, setNavbar] = useState(false);
  // ============
  return (



    <div>
      <nav id="header" className="w-full z-30 top-0 py-1  ">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="order-1 md:order-2 mt-2 max-md:mr-10 ">
            <a className="flex items-text-white tracking-wide no-underline hover:no-underline font-bold  text-xl max-sm:text-base" href="#">
              <img className="h-10" src="/src/assets/ddd.png" />
              New york
            </a>
          </div>

          <div className="order-1 md:order-2 mr-20 max-md:mr-8 max-sm:mr-5">
            <a className="flex items-text-white tracking-wide no-underline hover:no-underline font-bold  text-xl max-sm:text-base " href="#">
              <svg className="fill-current text-amber-300  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              GOLDEN WHISSPER
            </a>
          </div>


          <div className="order-2 md:order-3 flex items-center" id="nav-content">

            <a className="inline-block no-underline font-medium  text-2xl max-sm:text-base " href="#">
              Login
            </a>

            <a className="pl-3 inline-block no-underline   " href="#">
              <svg className="fill-current text-amber-300   " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </a>

          </div>
        </div>

      </nav>
      <nav id="header" className="w-full z-30 top-0 py-1  bg-white shadow ">
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none   focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3">

          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div >
            <div
              className={`flex-1 justify-self-center border-t-2  border-black   pb-3 mt-8 md:block md:pb-0 md:mt-2 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="md:flex  items-center justify-between text-1xl pt-6 md:pt-0">
                <li><a className="inline-block no-underline font-medium md:text-sm   hover:text-gray-200   py- px-20" href="#">home</a></li>
                <li><a className="inline-block no-underline font-medium md:text-sm  hover:text-gray-200 py-2 px-20" href="#">Contact </a></li>
                <li><a className="inline-block no-underline font-medium md:text-sm  hover:text-gray-200 py-2 px-20" href="#">About </a></li>
                <li><a className="inline-block no-underline font-medium  md:text-sm hover:text-gray-200 py-2 px-20" href="#">Products</a></li>
              </ul>
            </div>
          </div>


        </div>
      </nav>
      
      
    
      </div>
)}