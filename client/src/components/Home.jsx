import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 h-full">
      <div className=" mx-auto px-4 px-6 px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl text-6xl">
            <span className="block inline">Welcome to My</span>
            <span className="block text-indigo-600 pl-3">Awesome Website</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nulla id nisi tincidunt mollis. Vivamus sed lobortis odio. Proin
            bibendum nunc eu vestibulum laoreet.
          </p>
          <div className="mt-10 flex justify-center justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
