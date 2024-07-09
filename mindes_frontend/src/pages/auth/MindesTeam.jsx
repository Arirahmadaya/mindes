import React from "react";
import NavbarMINDes from "../../components/NavbarMINDes";

const MindesTeam = () => {
  const hustler = {
    name: "Massayu Urbaningrum Sarijati",
    image: "/img/massayu.png",
  };

  const hackers = [
    { name: "Ari Rahmadaya", image: "/img/ari.png" },
    { name: "Rajawali Adigraha", image: "/img/raj.png" },
    { name: "Nunut Willian", image: "/img/nut.png" },
  ];

  const hipsters = [
    { name: "Rafis Darul Prasetyo", image: "/img/raf.png" },
    { name: "Muhammad Thoriq Azhari", image: "/img/haji.png" },
  ];

  return (
    <div>
      <NavbarMINDes />
      <main className="max-w-6xl mx-auto p-4">
        <div className="mb-8">
          {/* <img src={logo} alt="Logo" className="w-6 h-6 mr-2" /> */}
          <a href="/about/mindes/madilog-team" className="text-blue-500 font-semibold hover:underline">
            Back to Home
          </a>
        </div>
        <section className="mb-16">
          <div className="text-secondary-50 text-blue text-[54px] font-bold leading-[64.80px]">
            HUSTLER
          </div>
          <div className="">
            <img
              className="max-w-[340px] h-[334px] rounded-[20px]"
              src={hustler.image}
            />
            <div className="ml-4">
              <h3 className="max-w-[340px] text-black text-2xl font-normal leading-[28.80px] mt-2">
                {hustler.name}
              </h3>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-secondary-50 text-blue text-[54px] font-bold leading-[64.80px]">
            HACKER
          </h2>
          <div className="text-black text-sm font-semibold leading-tight">
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackers.map((hacker, index) => (
              <div key={index} className="">
                <img
                  className="max-w-[340px] h-[334px] rounded-[20px]"
                  src={hacker.image}
                />
                <h3 className="max-w-[340px] text-black text-2xl font-normal leading-[28.80px] mt-2">
                  {hacker.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-secondary-50 text-blue text-[54px] font-bold leading-[64.80px]">
            HIPSTER
          </h2>
          <div className="text-black text-sm font-semibold leading-tight">
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hipsters.map((hipster, index) => (
              <div key={index} className="">
                <img
                  className="max-w-[340px] h-[334px] rounded-[20px]"
                  src={hipster.image}
                />
                <h3 className="max-w-[340px] text-black text-2xl font-normal leading-[28.80px] mt-2">
                  {hipster.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Madilog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MindesTeam;
