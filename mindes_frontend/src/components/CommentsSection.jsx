import React from 'react';

const CommentsSection = () => {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-center font-bold mb-4">Komentar</h2>
      <form className="relative">
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md mb-4 pr-20 resize-none"
          placeholder="Tulis komentar/masukanmu disini"
        ></textarea>
        <button
          type="submit"
          className="absolute right-2 bottom-8 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Kirim
        </button>
      </form>
      <div className="mt-1 p-4 bg-gray-100 text-lg text-center font-bold text-gray-600">
        Belum ada komentar
        <br />
        <h2 className="text-center text-black text-sm font-light font-['Open Sans'] leading-tight">Mari berpartisipasi dalam pembangunan desa kita dengan memberikan masukan atau saran.
        </h2>
      </div>
    </div>
  );
};

export default CommentsSection;