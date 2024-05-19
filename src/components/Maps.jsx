import React from "react";

const Maps = () => {
  return (
    <div className="flex justify-center mr-10">
      <div className="">
        <div
          id="embed-ded-map-canvas"
          className="w-auto h-auto rounded-xl"
        >
          <iframe
            className="w-[1000px] h-[500px] rounded-xl"
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
