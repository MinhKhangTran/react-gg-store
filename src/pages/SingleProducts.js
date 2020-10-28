import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductContext } from "../context/products";
import { Loader } from "../components/Loader";

export const SingleProducts = () => {
  const { id } = useParams();
  const history = useHistory();
  const { loading, tab } = useProductContext();
  console.log(tab);

  const newAlbum = tab.find((album) => album.id === parseInt(id));
  console.log(newAlbum);

  const { name, Tracklist, Erscheinungsdatum, abumName, images } = newAlbum;
  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <article className="grid grid-cols-1 md:grid-cols-2 mt-8 w-11/12 md:w-4/5 mx-auto">
      <div style={{ maxWidth: "500px", height: "500px" }}>
        <img
          className="h-full w-full object-cover"
          src={images[1].name}
          alt={name}
        />
      </div>
      <div className="my-4">
        <h1>
          <span className="bg-blue-100 text-blue-500 text-lg px-3 rounded-full">
            Girls Group:
          </span>{" "}
          {name}
        </h1>
        <h1>
          <span className="bg-blue-100 text-blue-500 text-lg px-3 rounded-full">
            Album:
          </span>{" "}
          {abumName}
        </h1>
        <h1>
          <span className="bg-blue-100 text-blue-500 text-lg px-3 rounded-full">
            Tracklist:
          </span>{" "}
          {Tracklist}
        </h1>
        <h1>
          <span className="bg-blue-100 text-blue-500 text-lg px-3 rounded-full">
            Release Date:
          </span>{" "}
          {Erscheinungsdatum}
        </h1>
        <h1>
          <span className="bg-blue-100 text-blue-500 text-lg px-3 rounded-full">
            Preis:
          </span>{" "}
          20 €
        </h1>
        <button
          className="mt-4 bg-blue-500 text-lg px-2 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out inline-block"
          onClick={() => {
            history.push("/cart");
          }}
        >
          In den Einkaufskorb
        </button>
      </div>
    </article>
  );
};
