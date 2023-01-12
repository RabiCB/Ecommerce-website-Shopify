import React from "react";
import Items from "./Data";
import "./App.css";
import { AiOutlineStar } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
const Productdetails = () => {
  const { Id } = useParams();
  const product = Items.find((prod) => prod.id === Id);
  const { name, img, about, rating } = product || {};
  return (
    <>
      
      <div className="flex  items-center h-screen justify-center flex-col">
      <Link
          className="border-2 max-md:absolute max-md:bottom-2  h-8 rounded-md pt-2 pb-2 flex items-center justify-center pl-4 pr-4 absolute right-6 top-4 "
          style={{ textDecoration: "none" }}
          to="/"
        >
          Back
        </Link>
        <div className=" mt-4 card border-none relative flex h-96 ">
          <img
            className="picture w-96 rounded-md object-contain"
            src={img}
            alt="shop-item-image"
          />
          
          <div className="flex flex-col gap-4">
            <h5 className="font-semibold">{name}</h5>
            <p>{about}</p>
            <div className="flex gap-4 ">
            <span className="cursor-pointer text-black ml-2 w-20 h-8 items-center flex justify-center rounded-md bg-green-600">
              {rating}
              <AiOutlineStar className="ml-2 text-white" />
            </span>
            <button className="border-2 max-sm:gap-8 max-md:p-0 m w-20 flex items-center justify-center h-8 text-center pb-1 pt-1 pr-2 pl-2 rounded-md">
                    Order
                  </button>
          </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Productdetails;
