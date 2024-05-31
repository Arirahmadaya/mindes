import React from 'react';

const CommentsSection = () => {
  return (
    <div className="bg-white p-4 shadow-md mt-8">
      <h2 className="font-bold text-xl mb-4">Komentar</h2>
      <textarea className="w-full p-2 mb-4 border rounded" placeholder="Tulis komentar Anda di sini"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Kirim</button>
      <div className="mt-4">
        <p className="text-gray-600">Belum ada komentar.</p>
      </div>
    </div>
  );
};

export default CommentsSection;
