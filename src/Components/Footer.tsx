// Footer Component
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 relative py-2 ">
      <div className="mx-auto w-full max-w-screen-xl flex md:flex-col sm:flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4 py-4 lg:py-6">
        <div className="flex justify-end flex-col">
          <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
        </div>
            {/* Social media icons */}
            <div className="flex-row flex flex-wrap items-center">
            <a href="#npm" className="text-gray-500 hover:text-blue-500 mr-2">
              <i className="fab fa-envelope"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600 mx-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 mx-2">
              <i className="fab fa-github"></i>
            </a>
          </div>
          </div>
          <div>
        

            <ul className=" flex  space-x-8 text-gray-500 dark:text-gray-400 font-medium text-left">
              <li className="mb-4">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
