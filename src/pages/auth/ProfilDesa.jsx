import React from "react";

import Footer from "../../components/Footer";
import { MapsKecil } from "../../components/Maps";
import NavbarUser from "../../components/NavbarUser";
import StrukturPD from "../../components/StrukturPD";

const ProfilDesa = () => {
  return (
    <>
      <NavbarUser />

      <div className="justify-between mx-70 lg:flex p-4 bg-white ">
        <div className=" flex flex-col items-center mr-4">
          <img
            src="img/kota_tegal.png"
            alt="Logo Desa"
            className="h-[300px] w-[300px]"
          />
          <h1 className="text-center font-semibold text-heading-2 text-secondary-50 text-blue whitespace-nowrap">
            Kelurahan Kalinyamat Kulon
            <br />
            Kecamatan Margadana
            <br />
            Kota Tegal
          </h1>
        </div>
        <div className="justify-end">
          <h2 className="text-center text-heading-1 font-bold text-blue">
            VISI
          </h2>
          <p className="text-heading-5 font-reguler ">
            Mewujudkan desa yang mandiri, sejahtera, dan
            <br />
            berbudaya.
          </p>
          <h2 className="text-center text-heading-1 font-bold text-blue">
            MISI
          </h2>
          <p className="text-heading-5 ">
            1. Mewujudkan tata kelola pemerintahan yang baik dan bersih.
            <br />
            2. Meningkatkan kualitas dan daya saing ekonomi daerah.
            <br />
            3. Meningkatkan kualitas infrastruktur dan konektivitas wilayah.
            <br />
            4. Meningkatkan kualitas sumber daya manusia.
            <br />
            5. Melestarikan budaya dan nilai-nilai luhur bangsa.
          </p>
        </div>
      </div>

      <div className="my-40">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Perangkat Desa
        </div>

        <StrukturPD />
      </div>

      
      
      <div>
        <div className="text-center">
          <h1 className="font-bold text-display-2 text-blue">PRIMA</h1>
          <h5 className="text-heading-5 mt-1 mb-8">
            Nilai Budaya Kerja Aparatur Pemerintah Kota Tegal
          </h5>
        </div>
        <div className="flex justify-between mx-70 h-[480px]">
          <div className="bg-secondary-40 w-[230px] h-[420px] rounded-xl justify-center  text-white text-center self-end">
            <div className=" pt-4 font-bold text-heading-2">Profesional</div>
            <div className="  flex flex-col items-center text-center justify-center h-[280px]">
              <div className="px-4 text-body-1">
                Berkompeten - Menyelesaikan Tugas secara Baik dan Benar Tuntas -
                Kreatif - Inovatif - Produktif
              </div>
            </div>
          </div>

          <div className="bg-secondary-40 w-[230px] h-[420px] rounded-xl justify-end text-white text-center">
            <div className=" pt-4 font-bold text-heading-2">Responsif</div>
            <div className="  flex flex-col items-center text-center justify-center h-[280px]">
              <div className="px-4 text-body-1">
                Tanggap dan Peduli - Cepat Bertindak - Demokratif Komunikatif -
                Inisiatif - Dinamis - Aspiratif
              </div>
            </div>
          </div>

          <div className="bg-secondary-40 w-[230px] h-[420px] rounded-xl justify-center  text-white text-center self-end">
            <div className=" pt-4 font-bold text-heading-2">Integritas</div>
            <div className="  flex flex-col items-center text-center justify-center h-[280px]">
              <div className="px-4 text-body-1">
                Jujur - Komitmen - Perilakuk Terpuji - Konsekuen Disiplin -
                Penuh Pengabdian
              </div>
            </div>
          </div>

          <div className="bg-secondary-40 w-[230px] h-[420px] rounded-xl justify-center  text-white text-center">
            <div className=" pt-4 font-bold text-heading-2">Melayani</div>
            <div className="  flex flex-col items-center text-center justify-center h-[280px]">
              <div className="px-4 text-body-1">
                Ramah - Berorientasi pada Kepuasan Masyarakat Berpedoman pada
                Standar Pelayanan - Sopan - Santun Iklhlas - Dapat Bekerja Sama
              </div>
            </div>
          </div>

          <div className="bg-secondary-40 w-[230px] h-[420px] rounded-xl justify-center  text-white text-center self-end">
            <div className=" pt-4 font-bold text-heading-2">Akuntabel</div>
            <div className="  flex flex-col items-center text-center justify-center h-[280px]">
              <div className="px-4 text-body-1">
                Taat Peraturan - Bertanggung Jawab Tidak Korupsi, Kolusi dan
                Nepotisme Memenuhi Target Kinerja
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-2 font-bold text-blue hover:text-bluenight text-center mb-8">
            Sejarah Desa Kalinyamat Kulon
          </h2>

          <div className="mb-8">
            <h3 className="text-body-1 font-bold text-black mb-4">
              Awal Mula dan Pendiri
            </h3>
            <p className="text-gray-700 text-body-2 leading-relaxed">
              Desa Kalinyamat Kulon, yang terletak di Kota Tegal, Jawa Tengah,
              memiliki sejarah panjang yang berawal dari pendiriannya oleh
              Pangeran Kalinyamat, suami Ratu Kalinyamat (Retna Kencana),
              seorang tokoh terkenal dalam sejarah Jawa. Pangeran Kalinyamat
              sendiri memiliki asal-usul yang masih diperdebatkan, antara versi
              pedagang Tiongkok yang terdampar di Jepara dan putra raja dari
              Aceh.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-body-1 font-bold text-gray-800 mb-4">
              Pembentukan dan Perkembangan Desa
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pangeran Kalinyamat mendirikan Desa Kalinyamat di wilayah Tegal
              setelah menikah dengan Retna Kencana. Desa ini kemungkinan besar
              merupakan hasil dari perluasan pemukiman dan komunitas lokal di
              sekitar wilayah tersebut. Faktor-faktor seperti pertumbuhan
              populasi, aktivitas pertanian, perdagangan, serta dinamika sosial
              dan politik lokal pada masa itu, kemungkinan besar turut
              memengaruhi proses pembentukan desa ini.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-body-1 font-bold text-gray-800 mb-4">
              Nama Desa dan Penghormatan kepada Ratu Kalinyamat
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Pemberian nama "Kalinyamat" untuk desa ini merupakan bentuk
              penghormatan terhadap peran dan kontribusi penting Ratu Kalinyamat
              dalam sejarah desa dan wilayah sekitarnya. Ratu Kalinyamat dikenal
              karena kepemimpinannya yang kuat dan pengaruhnya yang signifikan
              dalam politik dan kehidupan masyarakat pada zamannya. Penggunaan
              namanya sebagai nama desa dimaksudkan untuk mengabadikan warisan
              budaya dan sejarah yang ingin dijaga dan dilestarikan oleh
              masyarakat setempat sebagai bagian dari identitas mereka.
            </p>
          </div>

          <div>
            <h3 className="text-body-1 font-bold text-gray-800 mb-4">
              Perkembangan Desa Modern
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Seiring berjalannya waktu, Desa Kalinyamat Kulon terus berkembang
              menjadi sebuah komunitas yang hidup dan beraneka ragam. Warisan
              sejarah dan budayanya tetap menjadi bagian penting dari identitas
              desa ini, sementara masyarakatnya terus berusaha untuk menjaga dan
              merawat nilai-nilai yang ditinggalkan oleh para pendiri mereka.
              Dengan demikian, Desa Kalinyamat Kulon bukan hanya sebuah tempat
              tinggal, tetapi juga sebuah tempat di mana sejarah dan tradisi
              hidup berdampingan dengan kehidupan sehari-hari masyarakat modern.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-8">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Perangkat Desa
        </div>
        <div className="lg:flex mx-70">
          <div className=" bg-indigo-400/50 rounded-[20px]">
            <div className="lg:w-[590px] h-[360px w-[400px] h-[250px] relative ">
              <div className="left-[37px] top-[20px] absolute text-black text-[38px] font-bold font-['Open Sans'] leading-[45.60px]">
                Kalinyamat Kulon
              </div>
              <div className="left-[37px] top-[80px] absolute text-black text-lg font-light font-['Open Sans'] leading-[25.20px]">
                Batas Desa
              </div>
              <div className="left-[377px] top-[111px] absolute">
                <div className="left-0 top-0 absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                  Utara
                </div>
                <div className="left-0 top-[36px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                  Sumurpanggang
                </div>
              </div>
              <div className="left-[377px] top-[184px] absolute">
                <div className="left-0 top-0 absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                  Barat
                </div>
                <div className="left-0 top-[36px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                  Margadana
                </div>
              </div>
              <div className="w-[156px] left-[38px] top-[111px] absolute">
                <div className="w-[156px] h-[60px] left-0 top-0 absolute">
                  <div className="left-0 top-0 absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                    Timur
                  </div>
                  <div className="left-0 top-[36px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                    Kalinyamat Wetan
                  </div>
                </div>
                <div className="w-[102px] h-[60px] left-0 top-[73px] absolute">
                  <div className="left-0 top-0 absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                    Selatan
                  </div>
                  <div className="left-0 top-[36px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                    Dukuhturi
                  </div>
                </div>
              </div>
              <div className="w-[550px] h-[0px] left-[37px] top-[75px] absolute border border-black"></div>
              <div className="w-[550px] h-[0px] left-[37px] top-[260px] absolute border border-black"></div>
              <div className="left-[37px] top-[266px] absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                Luas Daerah
              </div>
              <div className="w-[550px] h-[0px] left-[37px] top-[304px] absolute border border-black"></div>
              <div className="left-[37px] top-[310px] absolute text-black text-[28px] font-bold font-['Open Sans'] leading-[30.80px]">
                Jumlah Penduduk
              </div>
              <div className="left-[378px] top-[270px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                1.530.000 m2
              </div>
              <div className="left-[377px] top-[314px] absolute text-black text-xl font-light font-['Open Sans'] leading-normal">
                6.844 Jiwa
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <MapsKecil />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilDesa;
