import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RelatedNews = () => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRelatedPosts();
  }, []);

  const fetchRelatedPosts = async () => {
    try {
      const response = await axios.get('http://data.mindes.my.id/berita/related');
      setRelatedPosts(response.data.data);
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  return (
    <div className="w-[310px] bg-white p-6 rounded-lg shadow-md">
      <div className="text-black text-heading-6 font-bold font-['Open Sans'] leading-normal mb-4">
        Berita Lainnya
      </div>
      <div className="space-y-4">
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-start mb-4" onClick={() => navigate(`/berita/${post.id_berita}`)}>
            <img
              src={`http://data.mindes.my.id${post.img_berita}`}
              alt="Related post"
              className="w-[75px] h-[75px] rounded-lg mr-4 object-cover"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-black text-caption2 font-bold font-['Open Sans'] leading-tight">
                {post.judul}
              </h3>
              <p className="text-black/opacity-20 text-[10px] font-light font-['Open Sans'] uppercase tracking-wide">
                {new Date(post.tgl).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <div className="text-black/opacity-20 text-[10px] font-light font-['Open Sans']">
                Dilihat {post.kunjungan} kali
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="text-black text-sm font-normal font-['Open Sans'] leading-tight mb-2">
          ADVERTISEMENT
        </div>
        <div className="relative">
          <div className="w-full h-[310px] bg-gray-200 rounded-lg" />
          <img
            className="w-[309px] h-[314px] rounded-lg absolute top-1 left-0"
            src="/img_berita/berita1.jpg"
            alt="Ad"
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
