import React from "react";

export default function CardDish({ data }) {
  const { name, category, image, price, description } = data;
  const handleChangeStock = () => {
    console.log("test");
  };
  return (
    <div
      className={`bg-gray-100 mt-4 w-11/12 pt-10 grid lg:grid-cols-2 rounded-xl border-t-8 mx-auto border-red-400`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 pb-5 mb-2">
            <div className="w-2/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-user text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Name</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{name}</h3>
            </div>
          </div>

          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 py-5 mb-2">
            <div className="w-2/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-envelope text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Category</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{category.replace("_", " ")}</h3>
            </div>
          </div>

          <div className="w-full h-10 flex items-center border-b-2 border-gray-200 py-5 mb-2">
            <div className="w-2/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-phone text-white"></i>
              <h2 className="text-white font-bold text-center p-2">Price</h2>
            </div>
            <div className="w-3/4 mx-auto px-2">
              <h3 className="text-center">{`$ ${price}`}</h3>
            </div>
          </div>

          <div className="w-full flex items-center border-b-2 border-gray-200 py-5 mb-2">
            <div className="w-2/4 bg-blue-500 h-10  rounded-r-xl flex items-center justify-center">
              <i className="bx bxs-phone text-white"></i>
              <h2 className="text-white font-bold text-center p-2">
                Description
              </h2>
            </div>
            <div className="w-3/4 mx-auto ">
              <p className="text-center">{description}</p>
            </div>
          </div>
        </div>
        <div className="my-5 mx-2">
          <select
            className="w-full xl:w-2/3 border bg-blue-200 text-indigo-800 font-bold rounded-xl px-3 py-3 outline-none"
            value="IN_STOCK"
            onChange={() => handleChangeStock()}
          >
            <option value="IN_STOCK" className="py-1">
              IN STOCK
            </option>
            <option value="CANCELLED" className="py-1">
              EXPIRED
            </option>
          </select>
        </div>
      </div>

      <div className="w-full grid  border-b-2 border-gray-200 ">
        <div>
          <img className="w-48 rounded-lg mx-auto" src={image} alt="image" />
        </div>

        <div className="w-full flex justify-end items-end my-5">
          <button
            className="bg-red-200 border border-gray-300 rounded-2xl text-red-800 active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 h-14"
            type="button"
            style={{ transition: "all .15s ease" }}
            // onClick={handleDeleteOrder}
          >
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
}
