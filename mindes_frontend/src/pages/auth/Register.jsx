import React, { useState } from "react";
import { LogIn } from "react-feather";
import * as Icon from "react-feather";
import {Input} from "@nextui-org/react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulasi logic untuk registrasi
    if (password !== confirmPassword) {
      setError("Password tidak sesuai");
      return;
    }
    console.log(
      "Registrasi berhasil dengan username:",
      username,
      "email:",
      email
    );
    // Redirect ke halaman login atau set sesi registrasi
  };

  return (
    <div className="flex h-screen bg-gray-100 lg:justify-normal justify-center">
      <div className="z-10 flex lg:w-1/2 items-center ">
        <div className="bg-white flex flex-row justify-center w-full h-screen items-center lg:rounded-r-[40px]">
          <div className="bg-white w-2/3 h-screen p-4 mx-16 rounded-lg ">
            <div className="text-center">
              <h5 className="text-heading-5 font-bold text-black">
                Daftar Akun Baru
              </h5>
              <img
                className="w-24 h-24 mx-auto"
                alt="Kota Tegal"
                src="img/kota_tegal.png"
              />
              <h6 className="lg:text-body-2 font-medium text-black text-center mb-2" >
                Kelurahan Kalinyamat Kulon <br />
                Kota Tegal
              </h6>
            </div>
            <form onSubmit={handleRegister} className="space-y-2">
              <div>
                <Input variant="bordered" type="text" label="Name" />
              </div>
              
              <div>
                <Input variant="bordered" type="email" label="Email" />
              </div>
              <div>
                <Input variant="bordered" type="password" label="Password" />
              </div>
              <div>
                <Input variant="bordered" type="password" label="Re-Password" />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="gap-2 justify-center w-full flex bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Daftar <LogIn />
              </button>
            </form>
            <div className="text-center mt-6">
              <p className="text-black mb-2 text-caption-1">
                Atau daftar dengan menggunakan:
              </p>
              <div className="w-full flex items-center justify-between ">
                <button className="w-full flex items-center justify-center border border-gray-300 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Google"
                    src="logo/google.png"
                  />
                  Google
                </button>
                
              </div>
            </div>
            <div className="text-center mt-4">
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

      <div className=" w-[55%] bg-auto bg-center bg-no-repeat hidden lg:block fixed top-0  right-0">
        <img
          src="img/register.png"
          alt="Register"
          className="w-full h-screen"
        />
      </div>
    </div>
  );
};

export default Register;
