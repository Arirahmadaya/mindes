import React from "react";
import { Mail, HelpCircle, PhoneCall } from "react-feather";
import NavbarAdmin from "../../components/NavbarAdmin";
import Sidebares from "../../components/Sidebar";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const BantuanAdmin = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <NavbarAdmin />
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/bantuan">Bantuan</BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex flex-col items-center ">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full ">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
              Pusat Bantuan Admin
            </h2>

            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>
              <div className="space-y-6">
                <FaqItem
                  question="Bagaimana cara menambahkan data desa baru?"
                  answer="Anda dapat menambahkan data desa baru melalui menu 'Data Desa' kemudian pilih 'Tambah Data' dan isi formulir yang disediakan."
                />
                <FaqItem
                  question="Bagaimana cara mengubah data desa?"
                  answer="Untuk mengubah data desa, akses menu 'Data Desa', pilih data yang ingin diubah, dan klik tombol 'Edit' untuk memperbarui informasi."
                />
                <FaqItem
                  question="Bagaimana cara menghapus data desa?"
                  answer="Anda dapat menghapus data desa melalui menu 'Data Desa', pilih data yang ingin dihapus, dan klik tombol 'Hapus'."
                />
                <FaqItem
                  question="Bagaimana cara mengelola pengguna?"
                  answer="Akses menu 'Pengguna' untuk melihat daftar pengguna, menambahkan pengguna baru, atau mengedit informasi pengguna."
                />
                <FaqItem
                  question="Bagaimana cara mengelola berita dan acara?"
                  answer="Untuk mengelola berita dan acara, akses menu 'Berita dan Acara' di panel admin, dan gunakan opsi untuk menambah, mengedit, atau menghapus entri."
                />
              </div>
            </div>

            {/* Contact Support Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Kontak Dukungan
              </h3>
              <div className="space-y-6">
                <ContactItem
                  icon={<PhoneCall className="w-6 h-6 mr-3 text-blue-600" />}
                  contact="+62 812 3456 7890"
                />
                <ContactItem
                  icon={<Mail className="w-6 h-6 mr-3 text-blue-600" />}
                  contact="support@mindes.com"
                />
              </div>
            </div>

            {/* User Guide Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Panduan Pengguna
              </h3>
              <p className="text-gray-700 mb-4">
                Anda dapat mengunduh panduan pengguna untuk mempelajari lebih
                lanjut tentang cara menggunakan sistem ini.
              </p>
              <button
                onClick={() =>
                  (window.location.href = "/path/to/user-guide.pdf")
                }
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Unduh Panduan Pengguna
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm transition duration-300 ease-in-out hover:shadow-md">
    <h4 className="text-xl font-medium flex items-center text-blue-600">
      <HelpCircle className="w-6 h-6 mr-2" />
      {question}
    </h4>
    <p className="text-gray-700 mt-3">{answer}</p>
  </div>
);

const ContactItem = ({ icon, contact }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm flex items-center transition duration-300 ease-in-out hover:shadow-md">
    {icon}
    <span className="text-lg text-gray-700">{contact}</span>
  </div>
);

export default BantuanAdmin;
