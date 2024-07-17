import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/auth/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Berita from "./pages/auth/Berita";
import DetailBerita from "./pages/auth/DetailBerita";
import ProfilDesa from "./pages/auth/ProfilDesa";
import Mindes from "./pages/auth/Mindes";
import InfografisAPBDes from "./pages/auth/InfografisAPBDes";
import InfografisCekdata from "./pages/auth/InfografisCekdata";
import InfografisPenduduk from "./pages/auth/InfografisPenduduk";
import InfografisSDGs from "./pages/auth/InfografisSDGs";
import InfografisStunting from "./pages/auth/InfografisStunting";
import TermsAndConditions from "./pages/auth/TermsAndConditions";
import Beranda from "./pages/admin/Beranda";
import BeritaAdmin from "./pages/admin/berita/BeritaAdmin";
import Penduduk from "./pages/admin/penduduk/Penduduk";
import Laporan from "./pages/admin/realisasi/Laporan";
import Realisasi from "./pages/admin/realisasi/Realisasi";
import EditRealisasi from "./pages/admin/realisasi/EditRealisasi";
import User from "./pages/admin/user/User";
import TambahPenduduk from "./pages/admin/penduduk/TambahPenduduk";
import EditPenduduk from "./pages/admin/penduduk/EditPenduduk";
import TambahUser from "./pages/admin/user/TambahUser";
import EditUser from "./pages/admin/user/EditUser";
import Agenda from "./pages/admin/agenda/Agenda";
import TambahAgenda from "./pages/admin/agenda/TambahAgenda";
import EditAgenda from "./pages/admin/agenda/EditAgenda";
import TambahBerita from "./pages/admin/berita/TambahBerita";
import EditBerita from "./pages/admin/berita/EditBerita";
import KtgBerita from "./pages/admin/datamaster/KtgBerita";
import Akuntansi from "./pages/admin/datamaster/Akuntansi";
import Bidang from "./pages/admin/datamaster/Bidang";
import UserProfile from "./pages/auth/UserProfile";
import MindesTeam from "./pages/auth/MindesTeam";
import TambahKtgBerita from "./pages/admin/datamaster/TambahKtgBerita";
import EditKtgBerita from "./pages/admin/datamaster/EditKtgBerita";
import TambahAkuntansi from "./pages/admin/datamaster/TambahAkuntansi";
import EditAkuntansi from "./pages/admin/datamaster/EditAkuntansi";
import TambahBidang from "./pages/admin/datamaster/TambahBidang";
import EditBidang from "./pages/admin/datamaster/EditBidang";
import TambahRealisasi from "./pages/admin/realisasi/TambahRealisasi";
import Pencatatan from "./pages/admin/realisasi/Pencatatan";
import TambahPencatatan from "./pages/admin/realisasi/TambahPencatatan";
import Bantuan from "./pages/auth/Bantuan";
import BantuanAdmin from "./pages/admin/Bantuan";
import UserProfileAdmin from "./pages/admin/UserProfile";

// Call image whatsapp
import callImage from "../public/img/call.png";



const Main = () => {
  const location = useLocation();
  const hideElements =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  useEffect(() => {
    if (!hideElements) {
      const script = document.createElement("script");
      script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [hideElements]);

  const openWhatsApp = () => {
    const whatsappNumber = "6282269140660";
    const preFilledMessage = "Halo, Saya ingin melaporkan";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      preFilledMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      {!hideElements && (
        <button className="whatsapp-button" onClick={openWhatsApp}>
          <img src={callImage} alt="WhatsApp" />
        </button>
      )}
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id_berita" element={<DetailBerita />} />
        <Route path="/profil" element={<ProfilDesa />} />
        <Route path="/about/mindes" element={<Mindes />} />
        <Route path="/about/mindes/madilog-team" element={<MindesTeam />} />
        <Route path="/infografis" element={<InfografisAPBDes />} />
        <Route path="/infografis/apbdes" element={<InfografisAPBDes />} />
        <Route path="/infografis/cekdata" element={<InfografisCekdata />} />
        <Route path="/infografis/penduduk" element={<InfografisPenduduk />} />
        <Route path="/infografis/sdgs" element={<InfografisSDGs />} />
        <Route path="/infografis/stunting" element={<InfografisStunting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofil" element={<UserProfile />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/syaratdanketentuan" element={<TermsAndConditions />} />
        {/* Admin */}
        <Route path="/admin/beranda" element={<Beranda />} />
        <Route path="/admin/berita" element={<BeritaAdmin />} />
        <Route path="/admin/tambahberita" element={<TambahBerita />} />
      
        <Route path="/admin/berita/edit/:id_berita" element={<EditBerita />} />
        <Route path="/admin/penduduk" element={<Penduduk />} />
        <Route path="/admin/penduduk/mutasi" element={<TambahPenduduk />} />
        <Route path="/admin/penduduk/edit/:id_penduduk" element={<EditPenduduk />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/user/tambah" element={<TambahUser />} />
        <Route path="/admin/user/edit/:id" element={<EditUser />} />
        <Route path="/admin/agenda" element={<Agenda />} />
        <Route path="/admin/agenda/tambah" element={<TambahAgenda />} />
        <Route path="/admin/agenda/edit/:id" element={<EditAgenda />} />
        <Route path="/admin/berita/tambah" element={<TambahBerita />} />
        <Route path="/admin/realisasi" element={<Realisasi />} />
        <Route path="/admin/realisasi/tambah" element={<TambahRealisasi />} />
        <Route path="/admin/realisasi/edit/:id_realisasi" element={<EditRealisasi />} />
        <Route path="/admin/laporan" element={<Laporan />} />
        <Route path="/admin/realisasi/pencatatan" element={<Pencatatan />} />
        <Route path="/admin/realisasi/pencatatan/tambah" element={<TambahPencatatan />} />
        <Route path="/admin/kategori" element={<KtgBerita />} />
        <Route path="/admin/kategori/tambah" element={<TambahKtgBerita />}
        />
        <Route path="/admin/kategori/edit/:id" element={<EditKtgBerita />} />
        <Route path="/admin/akuntansi" element={<Akuntansi />} />
        <Route path="/admin/akuntansi/tambah" element={<TambahAkuntansi />} />
        <Route path="/admin/akuntansi/edit/:id" element={<EditAkuntansi />} />
        <Route path="/admin/bidang" element={<Bidang />} />
        <Route path="/admin/bidang/tambah" element={<TambahBidang />} />
        <Route path="/admin/bidang/edit/:id" element={<EditBidang />} />
        <Route path="/admin/userprofil" element={<UserProfileAdmin />} />
        <Route path="/admin/bantuan" element={<BantuanAdmin />} />
        
        {/* FormPencatatan akan menuju ke menu edit di setiap record table, dan PencatatanDetail akan menuju ke tambah record di setiap pencatatannya yang anntinya akan berhubungan dengan isi yang ada di FormPencatatan */}
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;