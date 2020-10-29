import React from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending
} from "react-icons/ai";
import { useProductContext } from "../../context/products";
export const Filters = () => {
  const { search, setSearch, sortedAZ, sortedZA } = useProductContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // search und sortieren alphabet
  return (
    <article className="flex items-center  bg-blue-200 md:w-1/2 w-11/12 mx-auto p-6 my-4 rounded-md justify-between">
      <form className="flex-grow " onSubmit={handleSubmit}>
        <label className="mr-4" htmlFor="suche">
          Suche:
        </label>
        <input
          className="rounded bg-blue-100"
          id="suche"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="w-1/3 flex flex-row justify-around">
        <div className="grid place-items-center">
          <button className="bg-blue-400 rounded w-8 h-8 " onClick={sortedAZ}>
            <AiOutlineSortAscending />
          </button>
        </div>
        <div className="grid place-items-center">
          <button className="bg-blue-400 rounded w-8 h-8" onClick={sortedZA}>
            <AiOutlineSortDescending />
          </button>
        </div>
      </div>
    </article>
  );
};
