import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Beranda from "./pages/admin/Beranda";
import BeritaAdmin from "./pages/admin/berita/BeritaAdmin";
import Penduduk from "./pages/admin/penduduk/Penduduk";
import Laporan from "./pages/admin/realisasi/Laporan";
import Realisasi from "./pages/admin/realisasi/Realisasi";
import User from "./pages/admin/user/User";
import LoginAdmin from "./pages/admin/LoginAdmin";
import TambahBerita from "./pages/admin/TambahBerita";
import FormPenduduk from "./pages/admin/penduduk/FormPenduduk";
import FormUser from "./pages/admin/user/FormUser";
import Agenda from "./pages/admin/agenda/Agenda";
import FormAgenda from "./pages/admin/agenda/FormAgenda";
import FormBerita from "./pages/admin/berita/FormBerita";
import KtgBerita from "./pages/admin/berita/KtgBerita";
import Akuntansi from "./pages/admin/realisasi/Akuntansi";
import Bidang from "./pages/admin/realisasi/Bidang";
// import DetailAgenda from "./pages/auth/DetailAgenda";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* authentication */}
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/judulberita" element={<DetailBerita />} />{" "}
          {/* <Route path="/detail/agenda" element={<DetailAgenda />} /> */}
          {/*buat agar judul berita sesuai dengan judul berita yang sedang dibaca*/}
          <Route path="/profil" element={<ProfilDesa />} />
          <Route path="/about/mindes" element={<Mindes />} />
          {/* Infografis Menus */}
          <Route path="/infografis" element={<InfografisAPBDes />} />
          <Route path="/infografis/apbdes" element={<InfografisAPBDes />} />
          <Route path="/infografis/cekdata" element={<InfografisCekdata />} />
          <Route path="/infografis/penduduk" element={<InfografisPenduduk />} />
          <Route path="/infografis/sdgs" element={<InfografisSDGs />} />
          <Route path="/infografis/stunting" element={<InfografisStunting />} />
          {/* login and register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADMIN */}
          <Route path="/admin/beranda" element={<Beranda />} />
          <Route path="/admin/berita" element={<BeritaAdmin />} />
          <Route path="/admin/tambahberita" element={<TambahBerita />} />
          {/* infografis penduduk */}
          <Route path="/admin/penduduk" element={<Penduduk />} />
          <Route path="/admin/penduduk/mutasi" element={<FormPenduduk />} />
          {/* table user */}
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/user/tambah" element={<FormUser />} />
          {/* Agenda  */}
          <Route path="/admin/agenda" element={<Agenda />} />
          <Route path="/admin/agenda/tambah" element={<FormAgenda />} />
          {/* Berita  */}
          <Route path="/admin/berita" element={<BeritaAdmin />} />
          <Route path="/admin/berita/tambah" element={<FormBerita />} />
          <Route path="/admin/berita/kategori" element={<KtgBerita />} />
          {/* Realisasi */}
          <Route path="/admin/realisasi" element={<Realisasi />} />
          <Route path="/admin/realisasi/akuntansi" element={<Akuntansi />} />
          <Route path="/admin/realisasi/bidang" element={<Bidang />} />
          <Route path="/admin/realisasi/laporan" element={<Laporan />} />

          <Route path="/admin/login" element={<LoginAdmin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

//TESTING
// import React from 'react'
// import Register from './pages/auth/Register'

// const App = () => {
//   return (
//     <div>
//       <h1>Muncul ga</h1>
//       <Register />

//       </div>
//   )
// }

// export default App

// import{ BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./pages/auth/Home";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

// export default function App() {
//   return (
//     <BrowserRouter BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         {/* <h1 className="text-3xl font-bold underline text-gradient-60">Hello React</h1> */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
