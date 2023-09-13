import React from "react";
import sorting from "../assets/portfolio/sorting.jpg";
import login from "../assets/portfolio/login.png";
import order_summary from "../assets/portfolio/order_summary.jpg";
// import sudoku from "../assets/portfolio/sudoku.jpg";
import rabbit_hole from "../assets/portfolio/rabbit_hole.jpg";
import chrome_extension from "../assets/portfolio/chrome_extension.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sorting,
    },
    {
      id: 2,
      src: login,
    },
    {
      id: 3,
      src: order_summary,
    },
    {
      id: 4,
      src: rabbit_hole,
    },
    // {
    //   id: 5,
    //   src: sudoku,
    // },
    {
      id: 6,
      src: chrome_extension,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here on github </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                {/* <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  https://github.com/sanjay-k-j/
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
