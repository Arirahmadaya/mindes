import React from "react";



export function MapsMain () {
  return (
    <div className="flex justify-center">
      <div className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div
          id="embed-ded-map-canvas"
          className="w-full h-full rounded-xl"
        >
          <iframe
            className="lg:w-[1200px] lg:h-[520px] md:w-[800px] md:h-[350px] w-[400px] h-[250px] rounded-xl"
            
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

export function MapsKecil () {
  return (
    <div className="flex justify-center">
      <div className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div
          id="embed-ded-map-canvas"
          className="w-full h-full rounded-xl"
        >
          <iframe
            className="md:w-[590px] md:h-[360px] w-[400px] h-[250px] rounded-xl"
            
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

