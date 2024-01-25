import React from 'react';
import image from '../assets/picture.jpeg';

const ContentSection: React.FC = () => {
  return (
    <section className="container pt-8 px-4 mx-auto mt-8 flex flex-col md:flex-row py-4 justify-center items-center ">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full">
        {/* Box 1 */}
        <div className="w-full md:w-1/2 h-auto md:h-96 p-4 px-4 py-4 flex flex-col justify-center items-center">
          
          <h1 className="text-center md:text-4xl font-bold mb-6">UNLEASH THE POWER OF SPEECH,BREAK THE CHAINS OF LANGUAGE</h1>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-r-4 border-b-4 border-blue-500"></div>
          <h1 className="text-center md:text-lg mb-6">
            Discover Shabd: Your ultimate hub for effortless text-to-speech, video-to-video, and audio-to-audio conversion in diverse Indian languages
          </h1>
          <button className="bg-gray-800 text-white px-6 md:px-12 py-3 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Try Now
          </button>
        </div>
        {/* Box 2 */}
        <div className="w-full md:w-1/2 h-auto md:h-96  p-4 flex items-center justify-center">
          <img src={image} alt="Box 2 Image" className=" md:w-[35rem] md:h-[35rem]" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;





