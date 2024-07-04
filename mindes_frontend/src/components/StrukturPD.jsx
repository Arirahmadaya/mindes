import React, { useState } from "react";

const treeData = [
  {
    id: "1",
    name: "Arianto, S. AP",
    title: "Kepala Kelurahan Kalinyamat Kulon",
    imgUrl: "/img_desa/kepala_desa.png",
    diamond: false,
    children: [
      {
        id: "2",
        name: "Maksus",
        title: "Kasi P2M",
        imgUrl: "/img_desa/maksus.jpg",
        diamond: false,
        children: [
          {
            id: "3",
            name: "Bowo Leksono",
            title: "Staf",
            imgUrl: "/img_desa/bowo_leksono.jpg",
            diamond: false,
          },
        ],
      },
      {
        id: "4",
        name: "-",
        title: "Kasi Permas",
        imgUrl: "/img_desa/user.png",
        diamond: false,
      },
      {
        id: "5",
        name: "-",
        title: "Kasi Trantibun",
        imgUrl: "/img_desa/user.png",
        diamond: false,
      },
      {
        id: "6",
        name: "Supriyatno, S.IP",
        title: "Sekretaris Desa",
        imgUrl: "/img_desa/supriyatno.jpg",
        diamond: false,
        children: [
          {
            id: "7",
            name: "Akhmad Ari M., A.Md",
            title: "Staf",
            imgUrl: "/img_desa/akhmad_ari.jpg",
            diamond: false,
            children: [
              {
                id: "8",
                name: "Sudirmo",
                title: "Staf",
                imgUrl: "/img_desa/sudirmo.jpg",
                diamond: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

const StrukturPD = () => {
  return (
    <div className="tree flex justify-center items-center min-h-screen">
      {treeRendering(treeData)}
      <style>
        {`
          .tree ul {
              padding-top: 20px; position: relative;
              transition: all 0.5s;
          }

          .tree li {
              float: left; text-align: center;
              list-style-type: none;
              position: relative;
              padding: 20px 5px 0 5px;
              transition: all 0.5s;
          }

          .tree li::before, .tree li::after{
              content: '';
              position: absolute; top: 0; right: 50%;
              border-top: 2px solid #3A0507;
              width: 50%; height: 20px;
          }
          .tree li::after{
              right: auto; left: 50%;
              border-left: 2px solid #3A0507;
          }

          .tree li:only-child::after, .tree li:only-child::before {
              display: none;
          }

          .tree li:only-child{ padding-top: 0;}

          .tree li:first-child::before, .tree li:last-child::after{
              border: 0 none;
          }
          .tree li:last-child::before{
              border-right: 2px solid #3A0507;
              border-radius: 0 5px 0 0;
          }

          .tree li:first-child::after{
              border-radius: 5px 0 0 0;
          }

          .tree ul ul::before{
              content: '';
              position: absolute; top: 0; left: 50%;
              border-left: 2px solid #3A0507;
              width: 0; height: 20px;
          }

          .tree li div{
              border: 1px solid #3A0507;
              display: inline-block;
              border-radius: 10px;
              transition: all 0.5s;
          }

          .tree li div:hover, .tree li div:hover+ul li div {
              background: #c8e4f8; border: 2px solid #94a0b4;
          }

          .tree li div:hover+ul li::after, 
          .tree li div:hover+ul li::before, 
          .tree li div:hover+ul::before, 
          .tree li div:hover+ul ul::before{
              border-color: #94a0b4;
          }

          /* New styles for specific child levels */
          .tree > ul > li > div {
              border-top: 5px solid #BB5F62;
          }

          /* Targeting the second child */
          .tree > ul > li > ul > li > div {
              border-top: 5px solid #1A5C92;
          }

          /* Targeting all further descendants */
          .tree ul ul ul li div {
              border-top: 5px solid #F1A025;
          }

        `}
      </style>
    </div>
  );
};

const treeRendering = (treeData) => {
  return (
    <ul>
      {treeData.map((item) => (
        <li key={item.id}>
          <div className={`bg-primary-10 lg:py-4 md:py-3 py-[6px] px-auto lg:w-[270px] md:w-[200px] ${item.id === "1" ? "w-[180px]" : "w-[70px]"} h-auto rounded-[15px]`}>
            <img
              src={item.imgUrl}
              alt={item.name}
              className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 rounded-full bg-secondary-20 mx-auto lg:-mt-8 -mt-4"
            />
            <span className="lg:text-heading-6 md:text-body-2 text-caption-2 font-semibold lg:text-nowrap">
              {item.name}
            </span>
            <br />
            <span className="lg:caption-1 md:text-caption-2 text-[10px] font-thin lg:text-nowrap">
              {item.title}
            </span>
          </div>
          {item.children && item.children.length > 0 && treeRendering(item.children)}
        </li>
      ))}
    </ul>
  );
};


export default StrukturPD;
