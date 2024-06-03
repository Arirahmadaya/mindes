import React, { useState } from "react";
import { LogIn } from "react-feather";
import * as Icon from "react-feather";
import { Input } from "@nextui-org/react";

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
    <div
  className="h-screen items-center bg-slate-200 px-40 py-16 bg-cover bg-center"
  style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
>
  <div className="flex lg:justify-normal justify-center relative ">
    <div className="w-1/2 bg-auto bg-center bg-no-repeat hidden lg:block rounded-lg">
      <img
        src="img/LoginNew.png"
        alt="logologin"
        className="w-full h-[500px] rounded-lg"
      />
    </div>
    <div className="flex lg:w-1/2 items-center lg:right-0l">
      <div className="bg-white flex flex-row justify-center w-full h-[500px] items-center rounded-lg shadow-2xl">
        <div className="bg-white w-1/2 h-full py-8 ">
          <div className="text-center">
            <h5 className="text-heading-4 font-bold text-black mb-2">Masuk</h5>
          </div>
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="relative w-full mb-8">
              <Input type="email" variant="bordered" label="Email" />
              <p className="text-caption-2 text-gray mt-1 absolute top-full left-3 text-">
                Enter your email
              </p>
            </div>
            <div className="relative w-full">
              <Input type="password" variant="bordered" label="Password" />
              <p className="text-caption-2 text-gray mt-1 absolute top-full left-3">
                Enter your password
              </p>
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
</div>

  );
};

export default Login;
