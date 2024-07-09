// pages/auth/Login.jsx
import React, { useState } from "react";
import { LogIn } from "react-feather";
import { Input, Button, Image } from "@nextui-org/react";
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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      const { token, roles } = response.data;
      console.log("Response dari server:", response.data); // Debugging
      console.log("role pengguna:", roles); // Debugging

      localStorage.setItem("token", token);
      localStorage.setItem("roles", roles); // Simpan role di localStorage
      console.log("Token saved:", token); // Debugging
      toast.success("Login Berhasil!, mengalihkan ke Beranda");

      // Redirect ke halaman dashboard berdasarkan peran pengguna setelah 2.5 detik
      setTimeout(() => {
        if (roles === "admin" || roles === "superadmin") {
          navigate("/admin/beranda");
        } else {
          navigate("/");
        }
      }, 2500);
    } catch (err) {
      console.error("Error saat login:", err); // Debugging
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        setError("Terjadi kesalahan saat login.");
        toast.error("Terjadi kesalahan saat login.");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
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
          <div className="bg-white flex flex-row justify-center w-full h-[500px] items-center rounded-lg shadow-2xl px-[30px] md:px-[60px] lg:px-[100px]">
            <div className="w-full h-full py-8">
              <div className="text-center">
                <h5 className="mb-2 font-bold text-black text-heading-4">
                  Login
                </h5>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative w-full ">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Masukkan Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    errorMessage
                    size="md"
                  />
                </div>
                <div className="relative w-full">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Masukkan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    errorMessage
                    size="md"
                  />
                </div>
                {error && (
                  <p className="text-center text-danger text-caption-2">
                    {error}
                  </p>
                )}
                <Button
                  color="primary"
                  type="submit"
                  size="md"
                  endContent={<LogIn />}
                  className="flex justify-center w-full gap-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                >
                  <p className=" text-white text-body-2">Login </p>
                </Button>
              </form>
              <div className="mt-1 text-right">
                <a href="#" className="text-blue text-caption-2">
                  Lupa Password?
                </a>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-2 text-black text-caption-1">
                  Atau Login dengan menggunakan:
                </p>
                <Button
                  size="md"
                  variant="bordered"
                  className=" w-full mb-2 transition duration-300 border border-gray-300 rounded-lg hover:bg-gray-100"
                  onClick={handleGoogleLogin}
                >
                  <Image
                    className=" h-6 mr-2"
                    alt="Google"
                    src="logo/google.png"
                  />
                  Login dengan Google
                </Button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-caption-1 ">
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
