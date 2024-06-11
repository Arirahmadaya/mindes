import React, { useState } from "react";
import { LogIn } from "react-feather";
import * as Icon from "react-feather";
const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi logic untuk login
    if (username === "admin" && password === "admin123") {
      setError("");
      console.log("Login berhasil dengan username:", username);
      // Redirect ke halaman dashboard atau set sesi login
    } else {
      setError("Username atau password salah");
    }
  };
  return (
    <div className="flex h-screen bg-gray-100 lg:justify-normal justify-center ">
      <div className="w-3/5 bg-auto bg-center bg-no-repeat hidden lg:block">
        <img src="img/LoginNew.png" alt="logologin" className="w-full h-screen h-1/2]"/> 
      </div>
      <div className="absolute flex lg:w-1/2 items-center lg:right-0 ">
        <div className="bg-white flex flex-row justify-center w-full h-screen items-center lg:rounded-l-[40px] ">
          <div className="bg-white w-2/3 h-screen p-8 mx-16 rounded-lg ">
            <div className="text-center">
              <h5 className="text-heading-6 font-bold text-black">
                Selamat Datang
              </h5>
              <img
                className="w-24 h-24 mx-auto "
                alt="Kota Tegal"
                src="img/kota_tegal.png"
              />
              <h6 className="lg:text-body-2 font-medium text-black text-center">
                Kelurahan Kalinyamat Kulon <br />
                Kota Tegal
              </h6>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border-b-2 border-black  "
                  value={username}
                  placeholder="Username/Email"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border-b-2 border-black"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Masuk <LogIn />
              </button>
            </form>
            <div className="text-right mt-4">
              <a href="#" className="text-blue text-caption-1">
                Lupa Password?
              </a>
            </div>
            <div className="text-center mt-6">
              <p className="text-black mb-2 text-caption-1">
                Atau masuk dengan menggunakan:
              </p>
              <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg mb-2 hover:bg-gray-100 transition duration-300">
                <img
                  className="w-6 h-6 mr-2"
                  alt="Google"
                  src="logo/google.png"
                />
                Masuk dengan Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                <Icon.Facebook className="text-blue w-6 h-6 mr-2" />
                Masuk dengan Facebook
              </button>
            </div>
            <div className="text-center mt-4 ">
              <p className="text-gray-600 text-caption-1">
                Belum memiliki akun?
                <a href="/register" className="text-blue font-semibold pl-1">
                  Daftar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
