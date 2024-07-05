import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-full sm:w-1/4 bg-white p-8 border-r border-gray-200">
        <h2 className="text-lg font-semibold mb-6">Ketentuan Layanan</h2>
        <nav className="space-y-4">
          <a href="#section1" className="block text-blue-500 font-medium">1. Menerima Ketentuan</a>
          <a href="#section2" className="block text-gray-700">2. Perubahan Ketentuan</a>
          <a href="#section3" className="block text-gray-700">3. Menggunakan Produk Kami</a>
          <a href="#section4" className="block text-gray-700">4. Pembatasan Umum</a>
          <a href="#section5" className="block text-gray-700">5. Kebijakan Konten</a>
          <a href="#section6" className="block text-gray-700">6. Hak Anda</a>
          <a href="#section7" className="block text-gray-700">7. Kebijakan Hak Cipta</a>
          <a href="#section8" className="block text-gray-700">8. Panduan Hubungan</a>
          <a href="#section9" className="block text-gray-700">9. Kebijakan Tanggung Jawab</a>
          <a href="#section10" className="block text-gray-700">10. Ketentuan Hukum Umum</a>
        </nav>
      </aside>

      <main className="flex-1 p-12 overflow-auto">
        <section id="section1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Menerima Ketentuan</h2>
          <p className="text-gray-600 mb-4">
            Dengan menggunakan layanan kami, Anda setuju untuk mematuhi ketentuan yang tercantum di sini. Kami berhak memperbarui ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
          </p>
          <p className="text-gray-600 mb-4">
            Anda bertanggung jawab untuk secara berkala meninjau ketentuan ini untuk setiap perubahan. Penggunaan layanan yang terus menerus setelah perubahan ketentuan berarti Anda menerima dan menyetujui perubahan tersebut.
          </p>
        </section>

        <section id="section2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Perubahan Ketentuan</h2>
          <p className="text-gray-600 mb-4">
            Kami dapat mengubah ketentuan ini dari waktu ke waktu. Jika perubahan tersebut signifikan, kami akan memberikan pemberitahuan yang lebih mencolok (termasuk, untuk layanan tertentu, pemberitahuan email tentang perubahan ketentuan).
          </p>
        </section>

        <section id="section3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Menggunakan Produk Kami</h2>
          <p className="text-gray-600 mb-4">
            Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan ketentuan layanan ini. Anda tidak boleh menggunakan layanan kami untuk tujuan yang melanggar hukum atau merugikan.
          </p>
        </section>

        <section id="section4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pembatasan Umum</h2>
          <p className="text-gray-600 mb-4">
            Anda setuju untuk tidak menyalahgunakan layanan kami. Misalnya, Anda tidak boleh mengganggu layanan kami atau mencoba mengaksesnya menggunakan metode selain antarmuka dan instruksi yang kami sediakan.
          </p>
        </section>

        <section id="section5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Kebijakan Konten</h2>
          <p className="text-gray-600 mb-4">
            Kami tidak bertanggung jawab atas konten yang diunggah oleh pengguna. Anda bertanggung jawab sepenuhnya atas konten yang Anda unggah dan harus memastikan bahwa konten tersebut tidak melanggar hukum atau hak orang lain.
          </p>
        </section>

        <section id="section6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Hak Anda</h2>
          <p className="text-gray-600 mb-4">
            Anda memiliki hak untuk mengakses dan menggunakan layanan kami sesuai dengan ketentuan layanan ini. Kami menghargai privasi dan hak kekayaan intelektual Anda.
          </p>
        </section>

        <section id="section7" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Kebijakan Hak Cipta</h2>
          <p className="text-gray-600 mb-4">
            Kami menghormati hak kekayaan intelektual orang lain dan mengharapkan pengguna kami untuk melakukan hal yang sama. Jika Anda yakin bahwa karya Anda telah disalin dengan cara yang melanggar hak cipta, harap beri tahu kami segera.
          </p>
        </section>

        <section id="section8" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Panduan Hubungan</h2>
          <p className="text-gray-600 mb-4">
            Kami menghargai setiap hubungan yang kami jalin dengan pengguna kami. Anda setuju untuk berinteraksi dengan kami dan pengguna lain dengan sopan dan hormat.
          </p>
        </section>

        <section id="section9" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Kebijakan Tanggung Jawab</h2>
          <p className="text-gray-600 mb-4">
            Kami tidak bertanggung jawab atas kerusakan atau kerugian yang mungkin timbul dari penggunaan layanan kami. Layanan kami disediakan "sebagaimana adanya" dan "sebagaimana tersedia".
          </p>
        </section>

        <section id="section10" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ketentuan Hukum Umum</h2>
          <p className="text-gray-600 mb-4">
            Ketentuan layanan ini diatur oleh hukum yang berlaku di negara kami. Setiap perselisihan yang timbul dari atau terkait dengan ketentuan layanan ini akan diselesaikan melalui pengadilan yang berwenang di yurisdiksi kami.
          </p>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="sendCopy" className="mr-2" />
            <label htmlFor="sendCopy" className="text-gray-600">Kirim salinan ke email saya</label>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            Saya Setuju
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
