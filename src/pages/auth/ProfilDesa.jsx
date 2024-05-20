import React from "react";

import NavbarN from "../../components/Navbar";
import Footer from "../../components/Footer";
import Maps from "../../components/Maps";
import TestDaisy from "../../components/TestDaisy";

const ProfilDesa = () => {
  return (
    <>
      <NavbarN />
      <TestDaisy />
      

      <img src="/img/kota_tegal.png" alt="" />
      <div className="">
        Kelurahan Kalinyamat Kulon Kecamatan Margadana Kota Tegal
      </div>
      <div className="">Visi</div>
      <div className="">
        Mewujudkan Kota Tegal yang Sejahtera, Maju, dan Berbudaya
      </div>
      <div className="">Misi</div>
      <ul>
        <li>1. Mewujudkan tata kelola pemerintahan yang baik dan bersih.</li>
        <li>2. Meningkatkan kualitas dan daya saing ekonomi daerah.</li>
        <li>
          3. Meningkatkan kualitas infrastruktur dan konektivitas wilayah.
        </li>
        <li>4. Meningkatkan kualitas sumber daya manusia.</li>
        <li>5. Melestarikan budaya dan nilai-nilai luhur bangsa.</li>
      </ul>
      <div className="">PRIMA</div>
      <div>Nilai Budaya Kerja Aparatur Pemerintah Kota Tegal</div>
      {/* make card */}
      <div className="">Sejarah Desa Kalinyamat Kulon</div>
      <p>
        Awal Mula dan Pendiri Desa Kalinyamat Kulon, yang terletak di Kota
        Tegal, Jawa Tengah, memiliki sejarah panjang yang berawal dari
        pendiriannya oleh Pangeran Kalinyamat, suami Ratu Kalinyamat (Retna
        Kencana), seorang tokoh terkenal dalam sejarah Jawa. Pangeran Kalinyamat
        sendiri memiliki asal-usul yang masih diperdebatkan, antara versi
        pedagang Tiongkok yang terdampar di Jepara dan putra raja dari Aceh.
        Pembentukan dan Perkembangan Desa Pangeran Kalinyamat mendirikan Desa
        Kalinyamat di wilayah Tegal setelah menikah dengan Retna Kencana. Desa
        ini kemungkinan besar merupakan hasil dari perluasan pemukiman dan
        komunitas lokal di sekitar wilayah tersebut. Faktor-faktor seperti
        pertumbuhan populasi, aktivitas pertanian, perdagangan, serta dinamika
        sosial dan politik lokal pada masa itu, kemungkinan besar turut
        memengaruhi proses pembentukan desa ini. Nama Desa dan Penghormatan
        kepada Ratu Kalinyamat Pemberian nama Kalinyamat untuk desa ini
        merupakan bentuk penghormatan terhadap peran dan kontribusi penting Ratu
        Kalinyamat dalam sejarah desa dan wilayah sekitarnya. Ratu Kalinyamat
        dikenal karena kepemimpinannya yang kuat dan pengaruhnya yang signifikan
        dalam politik dan kehidupan masyarakat pada zamannya. Penggunaan namanya
        sebagai nama desa dimaksudkan untuk mengabadikan warisan budaya dan
        sejarah yang ingin dijaga dan dilestarikan oleh masyarakat setempat
        sebagai bagian dari identitas mereka. Perkembangan Desa Modern Seiring
        berjalannya waktu, Desa Kalinyamat Kulon terus berkembang menjadi sebuah
        komunitas yang hidup dan beraneka ragam. Warisan sejarah dan budayanya
        tetap menjadi bagian penting dari identitas desa ini, sementara
        masyarakatnya terus berusaha untuk menjaga dan merawat nilai-nilai yang
        ditinggalkan oleh para pendiri mereka. Dengan demikian, Desa Kalinyamat
        Kulon bukan hanya sebuah tempat tinggal, tetapi juga sebuah tempat di
        mana sejarah dan tradisi hidup berdampingan dengan kehidupan sehari-hari
        masyarakat modern.
      </p>
      <div className="">Peta Lokasi Desa</div>
      <Maps />
      {/* NEED EDIT, buat lebih simple karna import from tailwind*/}
      <div className="w-[616px] h-[370px] relative bg-indigo-400/opacity-50 rounded-[20px]">
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
      <Footer />
    </>
  );
};

export default ProfilDesa;
