import React from "react";
import aboutpic from "../assets/about.png";
export const About = () => {
  return (
    <section className="flex w-4/5 mx-auto flex-wrap mt-4 h-screen items-center">
      <div style={{ width: "400px" }}>
        <img src={aboutpic} alt="store" className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:ml-6">
        <h1 className="text-indigo-600 text-2xl font-mono text-center mt-4 md:mt-0">
          Über uns
        </h1>
        <p className="text-indigo-500 tracking-wider">
          I'm baby keffiyeh roof party bushwick sriracha. Bespoke pickled
          fashion axe taxidermy freegan pour-over slow-carb selvage photo booth
          artisan jean shorts literally truffaut. Shaman live-edge master
          cleanse ethical. Crucifix chia adaptogen banh mi paleo truffaut man
          braid kombucha skateboard glossier narwhal literally. Pok pok palo
          santo squid direct trade bespoke. Chia yr tbh, brooklyn kitsch lyft
          fixie subway tile pitchfork. Iceland schlitz food truck bitters
          taxidermy marfa shabby chic flexitarian shoreditch seitan tacos
          slow-carb tousled. Vice tilde bushwick scenester. Vegan palo santo
          jianbing messenger bag occupy chicharrones. Blue bottle leggings
          dreamcatcher master cleanse yuccie.
        </p>
      </div>
    </section>
  );
};
