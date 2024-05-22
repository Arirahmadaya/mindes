import React, { useState } from "react";
import { LogIn } from "react-feather";

const Login = () => {
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
    <div className="flex h-screen bg-gray-100">
      <div
        className="flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('img/loginNew.png')` }}
      >
        <div className="flex items-center justify-center w-full bg-opacity-10"></div>
        <div className="absolute bottom-5 left-5 text-blue">
          <h2 className="text-heading-6">Kalinyamat Kulon</h2>
          <h2 className="text-heading-6">Kota Tegal</h2>
        </div>
      </div>
      <div className="absolut flex w-1/2 items-center justify-center">
        <div className="bg-white flex flex-row justify-center w-full h-screen items-center">
          <div className="bg-white w-[480px] p-8 my-16 rounded-lg shadow-lg">
            <div className="text-center my-12-6">
              <h5 className="text-heading-5 font-bold text-gray-700">
                Selamat Datang
              </h5>
              <img
                className="w-24 h-24 mx-auto my-4"
                alt="Kota Tegal"
                src="img/kota_tegal.png"
              />
              <h6 className="text-body-1 font-medium text-black text-center">
                Kelurahan Kalinyamat Kulon <br />
                Kota Tegal
              </h6>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded "
                  value={username}
                  placeholder="Username/Email"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="gap-2 justify-center w-full flex bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600 transition duration-300"
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
                  src="google-icon.png"
                />
                Masuk dengan Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                <img
                  className="w-6 h-6 mr-2"
                  alt="Facebook"
                  src="facebook-icon.png"
                />
                Masuk dengan Facebook
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600 text-caption-1">
                Belum memiliki akun?
                <a href="#" className="text-blue font-semibold pl-1">
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

export default Login;
