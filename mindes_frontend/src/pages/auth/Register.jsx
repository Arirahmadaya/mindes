import React, { useState } from "react";
import axios from "axios";
import { UserPlus } from "react-feather";
import { Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi logic untuk register
    // setTimeout(() => {
      if (!validateEmail(email)) {
        setError("Email tidak valid");
        setIsLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Password dan konfirmasi password tidak cocok");
        setIsLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("Password harus lebih dari 6 karakter");
        setIsLoading(false);
        return;
      }

      setError("");
      
    console.log("Data yang dikirim ke server:", { username, email, password });

    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });
  
      console.log("Respon dari server:", response.data);
      toast.success("Registrasi berhasil! Silahkan login.");
      navigate("/login");
    } catch (err) {
      console.error("Error saat registrasi:", err);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Terjadi kesalahan saat registrasi.");
      }
      setIsLoading(false);
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-slate-200 py-24 lg:px-40 bg-cover bg-center"
      style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
    >
      <div className="flex lg:justify-normal justify-center relative w-full">
        <div className="flex lg:w-1/2 w-4/5 items-center lg:right-0">
          <div className="bg-white flex flex-row justify-center w-full h-[500px] items-center rounded-lg shadow-2xl">
            <div className="bg-white lg:w-1/2 w-2/3 h-full py-4">
              <div className="text-center">
                <h5 className="text-heading-4 font-bold text-black mb-2">
                  Daftar
                </h5>
              </div>
              <form onSubmit={handleRegister} className="space-y-3">
                <div className="relative w-full ">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
                  // disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Daftar"} <UserPlus />
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="text-black mb-2 text-caption-1">
                  Atau daftar dengan menggunakan:
                </p>
                <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg mb-2 hover:bg-gray-100 transition duration-300">
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Google"
                    src="logo/google.png"
                  />
                  Daftar dengan Google
                </button>
              </div>

              <div className="text-center mt-3">
                <p className="text-gray-600 text-caption-1">
                  Sudah memiliki akun?
                  <a href="/login" className="text-blue font-semibold pl-1">
                    Masuk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-auto bg-center bg-no-repeat hidden lg:block rounded-lg">
          <img
            src="/img/LoginNew.png"
            alt="logologin"
            className="w-full h-[500px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
