import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
export const ScrollButton = () => {
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`${
          height > 100
            ? "grid place-items-center fixed bottom-0 right-0 m-6 bg-blue-700 border-blue-200 border-4 block w-10 h-10 text-blue-100 text-xl"
            : "grid place-items-center fixed bottom-0 right-0 m-6 bg-blue-700 border-blue-200 border-4 hidden w-10 h-10 text-blue-100 text-xl"
        }`}
      >
        <button onClick={scrollBackToTop}>
          <FaAngleDoubleUp />
        </button>
      </div>
    </>
  );
};
