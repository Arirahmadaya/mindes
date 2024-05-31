import React from 'react';

const RelatedNews = () => {
  const relatedPosts = [
    {
      title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
      date: "5 Mei 2024, 16:53 WIB",
      views: "100 kali",
      image: "/img_berita/berita2.jpg",
    },
    {
        title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
        date: "5 Mei 2024, 16:53 WIB",
        views: "100 kali",
        image: "/img_berita/berita2.jpg",
      },
      {
        title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
        date: "5 Mei 2024, 16:53 WIB",
        views: "100 kali",
        image: "/img_berita/berita2.jpg",
      },
      {
        title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
        date: "5 Mei 2024, 16:53 WIB",
        views: "100 kali",
        image: "/img_berita/berita2.jpg",
      },
      {
        title: "Kegiatan Pembangunan Aspal Kelurahan Kalinyamat Kulon",
        date: "5 Mei 2024, 16:53 WIB",
        views: "100 kali",
        image: "/img_berita/berita2.jpg",
      },
    // Tambahkan post lain sesuai kebutuhan
  ];

  return (
    <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-black mb-4">Berita Lainnya</h2>
      <div className="space-y-4">
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center">
            <img src={post.image} alt="Related post" className="w-16 h-16 rounded-lg mr-4" />
            <div>
              <h3 className="text-md font-semibold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date} · Dilihat {post.views}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-black mb-4">ADVERTISEMENT</h2>
        <img src="/img_berita/berita1.jpg" alt="Advertisement" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default RelatedNews;
