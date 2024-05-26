import React from 'react';

const people = [
  {
    name: 'Arianto, S. AP',
    title: 'Kepala Kelurahan Kalinyamat Kulon',
    imgUrl: '/img_desa/kepala_desa.png',
  },
  // Tambahkan data 7 orang tambahan
  {
    name: 'Supriyatno, S.IP',
    title: 'Sekretaris Desa',
    imgUrl: '/img_desa/sekretaris_desa.png',
  },
  {
    name: 'Akhmad Ari M., A.Md',
    title: 'Staf',
    imgUrl: '/img_desa/staf1.png',
  },
  {
    name: 'Sudirmo',
    title: 'Staf',
    imgUrl: '/img_desa/staf2.png',
  },
  {
    name: 'Maksus',
    title: 'Kasi PSM',
    imgUrl: '/img_desa/kasi_psm.png',
  },
  {
    name: 'Bowo Leksono',
    title: 'Staf',
    imgUrl: '/img_desa/staf3.png',
  },
  // Tambahkan data orang lain sesuai kebutuhan
];

const StrukturPD = () => {
  const PersonCard = ({ person }) => {
    return (
      <div className="flex justify-evenly items-center mt-20">
        <div className="relative bg-secondary-30 w-[320px] h-[120px] p-5 flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          {/* Bagian foto */}
          <div className="absolute -top-10 bg-secondary-20 w-24 h-24 flex items-center justify-center rounded-full">
            <img src={person.imgUrl} alt={person.name} className="w-full h-full rounded-full" />
          </div>
          {/* Bagian nama dan jabatan */}
          <div className="mt-10 text-white font-semibold text-center text-xl">
            <div>{person.name}</div>
            <div>{person.title}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
};

export default StrukturPD;
