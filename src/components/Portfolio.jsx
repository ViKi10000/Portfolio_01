import React from "react";
import  stuck from "../assets/portfolio/stuck.png";
import brand from "../assets/portfolio/brand.png";
import pizza from "../assets/portfolio/pizza.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: stuck,
      git:"https://github.com/ViKi10000/stuck--MERN",
      deploy:""
    },
    {
      id: 2,
      src: brand,
      git:"https://github.com/ViKi10000/react-app-brand",
      deploy:"https://react-app-brand.vercel.app/"
    },
    {
      id: 3,
      src: pizza,
      git:"https://github.com/ViKi10000/react-pizzahutclone",
      deploy:"https://react-pizzahutclone.vercel.app/"
    }
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,git,deploy}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={deploy}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href={git}>
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
