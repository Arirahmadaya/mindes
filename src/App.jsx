import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/auth/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


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
// import Homepage from "./pages/auth/Homepage";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

// export default function App() {
//   return (
//     <BrowserRouter BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         {/* <h1 className="text-3xl font-bold text-gradient-60 underline">Hello React</h1> */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
