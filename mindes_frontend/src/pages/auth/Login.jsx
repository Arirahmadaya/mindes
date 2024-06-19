import React, { useState } from "react";
import { LogIn } from "react-feather";
import { Input } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();

    // Simulasi logic untuk login
    setTimeout(() => {
      if (username === "user@gmail.com" && password === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login Berhasil!, mengalihkan ke Beranda");

        // Redirect ke halaman dashboard setelah 2 detik
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setError("Username atau password salah");
        toast.error("Username atau password salah");
      }
    });
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-slate-200 py-24 lg:px-40 bg-cover bg-center"
      style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
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
            <div className="bg-white lg:w-1/2 w-2/3 h-full py-8">
              <div className="text-center">
                <h5 className="text-heading-4 font-bold text-black mb-2">
                  Masuk
                </h5>
              </div>
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="relative w-full mb-8">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Email/Username"
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
                <button
                  type="submit"
                  className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
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
              </div>
              <div className="text-center mt-4">
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
      <ToastContainer />
    </div>
  );
};

export default Login;
