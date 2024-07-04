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
import User from "./pages/admin/user/User";
import TambahBerita from "./pages/admin/TambahBerita";
import FormPenduduk from "./pages/admin/penduduk/FormPenduduk";
import FormUser from "./pages/admin/user/FormUser";
import Agenda from "./pages/admin/agenda/Agenda";
import FormAgenda from "./pages/admin/agenda/FormAgenda";
import EditAgenda from "./pages/admin/agenda/EditAgenda";
import FormBerita from "./pages/admin/berita/FormBerita";
import KtgBerita from "./pages/admin/berita/KtgBerita";
import Akuntansi from "./pages/admin/realisasi/Akuntansi";
import Bidang from "./pages/admin/realisasi/Bidang";
import UserProfile from "./pages/auth/UserProfile";
import MindesTeam from "./pages/auth/MindesTeam";
import FormKtgBeritaTambah from "./pages/admin/berita/FormKtgBeritaTambah";
import KtgBeritaEdit from "./pages/admin/berita/KtgBeritaEdit";
import FormAkuntansiTambah from "./pages/admin/realisasi/FormAkuntansiTambah";
import FormAkuntansiEdit from "./pages/admin/realisasi/FormAkuntansiEdit";
import FormBidangTambah from "./pages/admin/realisasi/FormBidangTambah";
import FormBidangEdit from "./pages/admin/realisasi/FormBidangEdit";
import FormRealisasi from "./pages/admin/realisasi/FormRealisasi";
import FormPencatatan from "./pages/admin/realisasi/FormPencatatan";
import TambahRealisasiForm from "./components/TambahRealisasiForm";
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
        <Route path="/admin/penduduk" element={<Penduduk />} />
        <Route path="/admin/penduduk/mutasi" element={<FormPenduduk />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/user/tambah" element={<FormUser />} />
        <Route path="/admin/agenda" element={<Agenda />} />
        <Route path="/admin/agenda/tambah" element={<FormAgenda />} />
        <Route path="/admin/agenda/edit/:id" element={<EditAgenda />} />
        <Route path="/admin/berita/tambah" element={<FormBerita />} />
        <Route path="/admin/realisasi" element={<Realisasi />} />
        <Route path="/admin/realisasi/tambah" element={<FormRealisasi />} />
        <Route path="/admin/laporan" element={<Laporan />} />
        <Route path="/admin/realisasi/pencatatan" element={<FormPencatatan />} />
        <Route path="/admin/realisasi/pencatatan/tambah" element={<TambahRealisasiForm />} />
        <Route path="/admin/datamaster/kategori" element={<KtgBerita />} />
        <Route path="/admin/datamaster/kategori/tambah" element={<FormKtgBeritaTambah />}
        />
        <Route path="/admin/datamaster/kategori/edit/:id" element={<KtgBeritaEdit />} />
        <Route path="/admin/datamaster/akuntansi" element={<Akuntansi />} />
        <Route path="/admin/datamaster/akuntansi/tambah" element={<FormAkuntansiTambah />} />
        <Route path="/admin/datamaster/akuntansi/edit/:id" element={<FormAkuntansiEdit />} />
        <Route path="/admin/datamaster/bidang" element={<Bidang />} />
        <Route path="/admin/datamaster/bidang/tambah" element={<FormBidangTambah />} />
        <Route path="/admin/datamaster/bidang/edit/:id" element={<FormBidangEdit />} />
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