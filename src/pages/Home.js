import React from "react";
import url from "../utils/URL";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState([]);

  const fetchAlbums = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTab(data);
    setLoading(false);
    // console.log(tab[value].abumName);
  };
  React.useEffect(() => {
    fetchAlbums();
  }, []);
  // React.useEffect(() => {
  //   if (value > tab.length - 1) {
  //     setValue(0);
  //   }
  // }, [value, tab]);
  // React.useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setValue(value + 1);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [value]);
  if (loading) {
    return <Loader />;
  }

  const { name, abumName } = tab[value];
  const { name: image } = tab[value].images[2];
  return (
    <section className="flex w-11/12 md:w-2/3 mx-auto justify-between my-8 flex-wrap md:flex-no-wrap">
      <div className="flex md:flex-col justify-center md:leading-10 text-blue-600 font-semibold md:text-2xl flex-wrap md:flex-no-wrap">
        {tab.map((band, index) => {
          return (
            <button
              key={band.id}
              className={`${
                index === value
                  ? "mx-4 md:mx-0 my-2 font-bold underline text-blue-700 "
                  : "mx-4 md:mx-0 my-2 font-semibold"
              }`}
              onClick={() => {
                setValue(index);
              }}
            >
              {band.name}
            </button>
          );
        })}
      </div>
      <div className="text-center" style={{ width: "500px", height: "500px" }}>
        <img
          className="mt-4 mb:mt-0 h-full w-full object-cover object-top"
          src={image}
          alt={name}
        />
        <h1 className="text-xl text-blue-600 font-semibold mt-4 mb:mt-0">
          {name}
        </h1>
        <h1 className="text-xl text-blue-600 font-semibold mt-4 mb:mt-0">
          {abumName}
        </h1>
      </div>
    </section>
  );
};
