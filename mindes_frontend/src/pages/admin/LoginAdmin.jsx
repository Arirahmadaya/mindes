import React, { useState } from "react";
import { LogIn } from "react-feather";
import { Input } from "@nextui-org/react";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi logic untuk login
    setTimeout(() => {
      if (!validateEmail(username)) {
        setError("Email tidak valid");
        setIsLoading(false);
        return;
      }

      if (username === "admin@gmail.com" && password === "123456") {
        setError("");
        console.log("Login berhasil dengan username:", username);
        localStorage.setItem("isLoggedIn", "true");
        // Redirect ke halaman dashboard atau set sesi login
        window.location.href = "/admin/beranda";
      } else {
        setError("Username atau password salah");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-slate-200 py-24 lg:px-40 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/LoginBlur2.png')` }}
    >
      <div className="flex lg:justify-normal justify-center relative w-full">
        <div className="w-1/2 bg-auto bg-center bg-no-repeat hidden lg:block rounded-lg">
          <img
            src="/img/LoginNew.png"
            alt="logologin"
            className="w-full h-[500px] rounded-lg"
          />
        </div>
        <div className="flex lg:w-1/2 w-4/5 items-center lg:right-0 ">
          <div className="bg-white flex flex-row justify-center w-full h-[500px] items-center rounded-lg shadow-2xl">
            <div className="bg-white lg:w-1/2 w-2/3 h-full py-6">
              <div className="text-center mb-2">
                <h5 className="text-heading-4 font-bold text-black">
                  Selamat Datang
                </h5>
                <img
                  className="w-24 h-24 mx-auto "
                  alt="Kota Tegal"
                  src="/img/kota_tegal.png"
                />
                <h6 className="text-body-2 font-medium text-black text-center">
                  Kelurahan Kalinyamat Kulon <br />
                  Kota Tegal
                </h6>
              </div>
       
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="relative w-full mb-8">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <p className="text-caption-2 text-gray mt-1 absolute top-full left-3">
                    Enter your email
                  </p>
                </div>
                <div className="relative w-full">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="text-caption-2 text-gray mt-1 absolute top-full left-3">
                    Enter your password
                  </p>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Masuk"} <LogIn />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;

// import React, { useState } from "react";
// import { LogIn } from "react-feather";
// import * as Icon from "react-feather";
// const LoginAdmin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simulasi logic untuk login
//     if (username === "admin" && password === "admin123") {
//       setError("");
//       console.log("Login berhasil dengan username:", username);
//       // Redirect ke halaman dashboard atau set sesi login
//     } else {
//       setError("Username atau password salah");
//     }
//   };
//   return (
//     <div className="flex h-screen bg-gray-100 lg:justify-normal justify-center ">
//       <div className="w-3/5 bg-auto bg-center bg-no-repeat hidden lg:block">
//         <img src="/img/LoginNew.png" alt="logologin" className="w-full h-screen h-1/2]"/>
//       </div>
//       <div className="absolute flex lg:w-1/2 items-center lg:right-0 ">
//         <div className="bg-white flex flex-row justify-center w-full h-screen items-center lg:rounded-l-[40px] ">
//           <div className="bg-white w-2/3 h-screen p-8 mx-16 rounded-lg ">
//             <div className="text-center">
//               <h5 className="text-heading-6 font-bold text-black">
//                 Selamat Datang
//               </h5>
//               <img
//                 className="w-24 h-24 mx-auto "
//                 alt="Kota Tegal"
//                 src="img/kota_tegal.png"
//               />
//               <h6 className="lg:text-body-2 font-medium text-black text-center">
//                 Kelurahan Kalinyamat Kulon <br />
//                 Kota Tegal
//               </h6>
//             </div>
//             <form onSubmit={handleLogin} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   className="w-full mt-1 p-2 border-b-2 border-black  "
//                   value={username}
//                   placeholder="Username/Email"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   className="w-full mt-1 p-2 border-b-2 border-black"
//                   value={password}
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <button
//                 type="submit"
//                 className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//               >
//                 Masuk <LogIn />
//               </button>
//             </form>
//             <div className="text-right mt-4">
//               <a href="#" className="text-blue text-caption-1">
//                 Lupa Password?
//               </a>
//             </div>
//             <div className="text-center mt-6">
//               <p className="text-black mb-2 text-caption-1">
//                 Atau masuk dengan menggunakan:
//               </p>
//               <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg mb-2 hover:bg-gray-100 transition duration-300">
//                 <img
//                   className="w-6 h-6 mr-2"
//                   alt="Google"
//                   src="logo/google.png"
//                 />
//                 Masuk dengan Google
//               </button>
//               <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
//                 <Icon.Facebook className="text-blue w-6 h-6 mr-2" />
//                 Masuk dengan Facebook
//               </button>
//             </div>
//             <div className="text-center mt-4 ">
//               <p className="text-gray-600 text-caption-1">
//                 Belum memiliki akun?
//                 <a href="/register" className="text-blue font-semibold pl-1">
//                   Daftar
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginAdmin;
