import React from 'react';

const RelatedNews = () => {
  const relatedPosts = [
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "Dilihat 100 kali",
      image: "/img_berita/berita2.jpg",
    },
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "Dilihat 100 kali",
      image: "/img_berita/berita2.jpg",
    },
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "Dilihat 100 kali",
      image: "/img_berita/berita2.jpg",
    },
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "Dilihat 100 kali",
      image: "/img_berita/berita2.jpg",
    },
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "Dilihat 100 kali",
      image: "/img_berita/berita2.jpg",
    },
  ];

  return (
    <div className="w-[310px] h-[1700px] bg-white p-6 rounded-lg shadow-md">
      <div className="text-black text-heading-6 font-bold font-['Open Sans'] leading-normal mb-4">Berita Lainnya</div>
      <div className="space-y-4">
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-start mb-4">
            <img src={post.image} alt="Related post" className="w-[75px] h-[75px] rounded-lg mr-4 object-cover" />
            <div className="flex flex-col justify-between">
              <h3 className="text-black text-caption2 font-bold font-['Open Sans'] leading-tight">{post.title}</h3>
              <p className="text-black/opacity-20 text-[10px] font-light font-['Open Sans'] uppercase tracking-wide">{post.date}</p>
              <div className="text-black/opacity-20 text-[10px] font-light font-['Open Sans']">{post.views}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="text-black text-sm font-normal font-['Open Sans'] leading-tight mb-2">ADVERTISEMENT</div>
        <div className="relative">
          <div className="w-full h-[310px] bg-gray-200 rounded-lg" />
          <img className="w-[309px] h-[314px] rounded-lg absolute top-1 left-0" src="/img_berita/berita1.jpg" alt="Ad" />
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;