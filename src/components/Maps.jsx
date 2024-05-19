import React from "react";

const Maps = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div
          id="embed-ded-map-canvas"
          className="w-auto h-auto rounded-xl"
        >
          <iframe
            className="lg:w-[1000px] lg:h-[500px] md:w-[700px] md:h-[300px]  rounded-xl"
            frameborder=""
            src="https://www.google.com/maps/embed/v1/place?q=Kalinyamat+Kulon,+Kota+Tegal,+Jawa+Tengah,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <style>{`
                #embed-ded-map-canvas img {
                max-width: none!important;
                background: none!important;
                font-size: inherit;
                font-weight: inherit;
                }
      `}</style>
      </div>
    </div>
  );
};

export default Maps;
