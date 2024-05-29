import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="dark:bg-slate-900 max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="mt-28 overflow-hidden items-center text-center">
          <h1 className="text-xl font-semibold md:text-3xl">
            We're Dolighted To Have You {""}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quis debitis maxime blanditiis inventore itaque facilis ex sequi
            alias perferendis, dolor minus repudiandae aliquid quas autem
            doloribus ducimus iste amet delectus laborum perspiciatis sit
            pariatur. Maiores tempore voluptatem fugiat possimus?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 rounded-lg mt-5">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
