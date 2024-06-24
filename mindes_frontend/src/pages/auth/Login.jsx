import React, { useState } from "react";
import { LogIn } from "react-feather";
import { Input } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Data yang dikirim ke server:", { email, password });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });

      const { token, role } = response.data;
      console.log("Response dari server:", response.data); // Tambahkan ini untuk debugging
      localStorage.setItem("token", token);
      localStorage.setItem("role", role); // Simpan role di localStorage
      toast.success("Login Berhasil!, mengalihkan ke Beranda");

      // Redirect ke halaman dashboard berdasarkan peran pengguna setelah 2.5 detik
      setTimeout(() => {
        if (role === "admin" || role === "superadmin") {
          navigate("/admin/beranda");
        } else {
          navigate("/");
        }
      }, 2500);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        setError("Terjadi kesalahan saat login.");
        toast.error("Terjadi kesalahan saat login.");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen py-24 bg-center bg-cover bg-slate-200 lg:px-40"
      style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
    >
      <div className="relative flex justify-center w-full lg:justify-normal">
        <div className="hidden w-1/2 bg-center bg-no-repeat bg-auto rounded-lg lg:block">
          <img
            src="/img/LoginNew.png"
            alt="logologin"
            className="w-full h-[500px] rounded-lg"
          />
        </div>
        <div className="flex items-center w-4/5 lg:w-1/2 lg:right-0 ">
          <div className="bg-white flex flex-row justify-center w-full h-[500px] items-center rounded-lg shadow-2xl">
            <div className="w-2/3 h-full py-8 bg-white lg:w-1/2">
              <div className="text-center">
                <h5 className="mb-2 font-bold text-black text-heading-4">
                  Masuk
                </h5>
              </div>
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="relative w-full mb-8">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    errorMessage
                  />
                  <p className="absolute mt-1 text-caption-2 text-gray top-full left-3">
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
                  <p className="absolute mt-1 text-caption-2 text-gray top-full left-3">
                    Enter your password
                  </p>
                </div>
                {error && (
                  <p className="text-center text-danger text-caption-2">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="flex justify-center w-full gap-2 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                >
                  Masuk <LogIn />
                </button>
              </form>
              <div className="mt-1 text-right">
                <a href="#" className="text-blue text-caption-2">
                  Lupa Password?
                </a>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-2 text-black text-caption-2">
                  Atau masuk dengan menggunakan:
                </p>
                <button className="flex items-center justify-center w-full py-1 mb-2 transition duration-300 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Google"
                    src="logo/google.png"
                  />
                  Masuk dengan Google
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-caption-2 ">
                  Belum memiliki akun?
                  <a
                    href="/register"
                    className="pl-1 font-semibold text-blue text-caption-1"
                  >
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
