import React from "react";

export function MapsMain() {
  return (
    <div className="flex justify-center">
      <div className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 w-full max-w-screen-xl">
        <div id="embed-ded-map-canvas" className="w-full h-full rounded-xl">
          <iframe
            className="w-full h-[35vh] lg:h-[79vh] md:h-[65vh] rounded-xl"
            src="https://www.google.com/maps/embed/v1/place?q=Kalinyamat+Kulon,+Kota+Tegal,+Jawa+Tengah,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
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
}

export function MapsKecil() {
  return (
    <div className="flex justify-center">
      <div className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 w-full max-w-screen-md">
        <div id="embed-ded-map-canvas" className="w-full h-full rounded-xl">
          <iframe
            className="w-full h-[35vh] md:h-[60vh] rounded-xl"
            src="https://www.google.com/maps/embed/v1/place?q=Kalinyamat+Kulon,+Kota+Tegal,+Jawa+Tengah,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
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
}
