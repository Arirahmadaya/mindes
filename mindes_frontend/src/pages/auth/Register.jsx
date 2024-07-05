import React, { useState } from "react";
import axios from "axios";
import { UserPlus } from "react-feather";
import { Input, Button, Image, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserPlusIcon } from "@heroicons/react/20/solid";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

    if (!agreeToTerms) {
      setError("Anda harus menyetujui syarat dan ketentuan");
      setIsLoading(false);
      return;
    }

    setError("");

    console.log("Data yang dikirim ke server:", { username, email, password });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );

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

  const handleGoogleRegister = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div
      className="flex items-center justify-center h-screen py-24 bg-center bg-cover bg-slate-200 lg:px-40"
      style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
    >
      <div className="relative flex justify-center w-full lg:justify-normal">
        <div className="flex items-center w-4/5 lg:w-1/2 lg:right-0">
          <div className="bg-white flex flex-row justify-center w-full h-[600px] items-center rounded-lg shadow-2xl">
            <div className="w-2/3 h-full py-4 bg-white lg:w-1/2">
              <div className="text-center">
                <h5 className="mb-2 font-bold text-black text-heading-4">
                  Daftar
                </h5>
              </div>
              <form onSubmit={handleRegister} className="space-y-3">
                <div className="relative w-full">
                  <Input
                    type="text"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-4">
                  <Input
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Saya menyetujui{" "}
                    <Link href="/syaratdanketentuan" underline="hover">
                      syarat dan ketentuan
                    </Link>
                  </label>
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button
                  type="submit"
                  className="flex justify-center w-full gap-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                  color="primary"
                  disabled={isLoading}
                  endContent={<UserPlusIcon className="w-5 h-5" />}
                >
                  {isLoading ? "Loading..." : "Daftar"}
                </Button>
              </form>
              <div className="mt-3 text-center">
                <p className="mb-2 text-black text-caption-1">
                  Atau daftar dengan menggunakan:
                </p>

                <Button
                  size="md"
                  variant="bordered"
                  className=" w-full mb-2 transition duration-300 border border-gray-300 rounded-lg hover:bg-gray-100"
                  onClick={handleGoogleRegister}
                >
                  <Image
                    className="w-6 h-6 mr-2"
                    alt="Google"
                    src="logo/google.png"
                  />
                  Daftar dengan Google
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-gray-600 text-caption-1">
                  Sudah memiliki akun?
                  <Link href="/login" className="pl-1 font-semibold text-blue-500">
                    Masuk
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 bg-center bg-no-repeat bg-auto rounded-lg lg:block">
          <img
            src="/img/LoginNew.png"
            alt="logologin"
            className="w-full h-[600px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
