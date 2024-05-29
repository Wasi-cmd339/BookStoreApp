import React from "react";
 

function Cards({item}) {
    // console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-93 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-950 dark:text-white">
          <figure>
            <img
              src={item.image} alt=""/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            {item.title}
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hover:text-pink-500">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-{2px} hover:text-white duration-200 hover:bg-pink-500">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
