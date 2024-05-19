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
import BeritaAdmin from "./pages/admin/BeritaAdmin";
import Infodesa from "./pages/admin/Infodesa";
import Infografis from "./pages/admin/Infografis";
import Laporan from "./pages/admin/Laporan";
import Realisasi from "./pages/admin/Realisasi";
import User from "./pages/admin/User";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* authentication */}
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/judulberita" element={<DetailBerita />} />{" "}
          {/*buat agar judul berita sesuai dengan judul berita yang sedang dibaca*/}
          <Route path="/profil" element={<ProfilDesa />} />
          <Route path="/about/mindes" element={<Mindes />} />
          {/* Infografis Menus */}
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
          <Route path="/admin/infodesa" element={<Infodesa />} />
          <Route path="/admin/infografis" element={<Infografis />} />
          <Route path="/admin/laporan" element={<Laporan />} />
          <Route path="/admin/realisasi" element={<Realisasi />} />
          <Route path="/admin/user" element={<User />} />
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
