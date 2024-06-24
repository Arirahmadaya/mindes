import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Beritalainnya = () => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRelatedPosts();
  }, []);

  const fetchRelatedPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/berita/related`
      );
      setRelatedPosts(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  return (
    <div className="w-[310px] bg-white p-6 rounded-lg shadow-md">
      <div className="text-black text-heading-6 font-bold font-['Open Sans'] leading-normal mb-4">
        Berita Lainnya
      </div>
      <div className="space-y-4">
        {relatedPosts.map((post, index) => (
          <div
            key={index}
            className="flex items-start mb-4 cursor-pointer"
            onClick={() => navigate(`/berita/${post.id_berita}`)}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}/public${post.img_berita}`}
              alt="Related post"
              className="w-[75px] h-[75px] rounded-lg mr-4 object-cover"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-black text-caption2 font-bold font-['Open Sans'] leading-tight">
                {post.judul}
              </h3>
              <p className="text-black/opacity-20 text-[10px] font-light font-['Open Sans'] uppercase tracking-wide">
                {new Date(post.tgl).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <div className="text-black/opacity-20 text-[10px] font-light font-['Open Sans']">
                Dilihat {post.kunjungan} kali
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beritalainnya;
