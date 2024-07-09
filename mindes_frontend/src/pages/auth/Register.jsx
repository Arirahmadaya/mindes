import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Checkbox,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Check } from "react-feather";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );

      toast.success("Registrasi berhasil! Silahkan login.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
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

  const handleAgree = () => {
    setAgreeToTerms(true);
    onOpenChange(false);
  };

  return (
    <div
      className="flex items-center justify-center h-screen py-24 bg-center bg-cover bg-slate-200 lg:px-40"
      style={{ backgroundImage: `url('img/LoginBlur2.png')` }}
    >
      <div className="relative flex justify-center w-full lg:justify-normal">
        <div className="flex items-center w-4/5 lg:w-1/2 lg:right-0">
          <div className="bg-white flex justify-center w-full h-[550px] items-center rounded-lg shadow-2xl px-[30px] md:px-[60px] lg:px-[100px]">
            <div className="w-full h-auto items-center">
              <div className="text-center">
                <h5 className="mb-2 font-bold text-black text-heading-4">
                  Daftar
                </h5>
              </div>
              <form onSubmit={handleRegister} className="space-y-2">
                <div className="relative w-full mb-1">
                  <Input
                    type="text"
                    variant="bordered"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full ">
                  <Input
                    type="email"
                    variant="bordered"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    errorMessage
                  />
                </div>
                <div className="relative w-full ">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full ">
                  <Input
                    type="password"
                    variant="bordered"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center mb-4">
                  <Checkbox
                    isSelected={agreeToTerms}
                    onChange={() => setAgreeToTerms(!agreeToTerms)}
                    color="primary"
                    size="md"
                  >
                    
                  </Checkbox>
                  <p className="lg:text-caption-1 text-caption-2">
                      Saya menyetujui{" "}
                      <span
                        className="text-blue cursor-pointer"
                        onClick={onOpen}
                      >
                        syarat dan ketentuan
                      </span>
                    </p>
                </div>
                {error && (
                  <p className="text-caption-2 text-center text-danger">
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  className="flex justify-center w-full gap-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                  color="primary"
                  isLoading={isLoading}
                  endContent={<UserPlusIcon className="w-5 h-5" />}
                >
                  {isLoading ? "Loading..." : "Daftar"}
                </Button>
              </form>
              <div className="mt-3 text-center">
                <p className="mb-2 text-black lg:text-caption-1 text-caption-2">
                  Atau daftar dengan menggunakan:
                </p>
                <Button
                  size="md"
                  variant="bordered"
                  className="w-full mb-2 transition duration-300 border border-gray-300 rounded-lg hover:bg-gray-100"
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
                <p className="text-gray-600 lg:text-caption-1 text-caption-2">
                  Sudah memiliki akun?
                  <Link to="/login" className="pl-1 font-semibold text-blue">
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
            className="w-full h-[550px] rounded-lg"
          />
        </div>
      </div>
      <ToastContainer />
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white text-black",
          header: "border-b-[1px] border-[#292f46]/10",
          footer: "border-t-[1px] border-[#292f46]10",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Syarat dan Ketentuan
              </ModalHeader>
              <ModalBody>
                <div className="flex-1 overflow-auto">
                  <section id="section1" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Menerima Ketentuan
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Dengan menggunakan layanan kami, Anda setuju untuk
                      mematuhi ketentuan yang tercantum di sini. Kami berhak
                      memperbarui ketentuan ini kapan saja tanpa pemberitahuan
                      sebelumnya.
                    </p>
                  </section>
                  <section id="section3" className="">
                    <h2 className="text-2xl font-bold mb-4">
                      Menggunakan Produk Kami
                    </h2>
                    <p className="text-gray-600 ">
                      Anda setuju untuk menggunakan layanan kami hanya untuk
                      tujuan yang sah dan sesuai dengan ketentuan layanan ini.
                      Anda tidak boleh menggunakan layanan kami untuk tujuan
                      yang melanggar hukum atau merugikan.
                    </p>
                  </section>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-success shadow-lg shadow-indigo-500/20 text-white font-semibold"
                  onPress={handleAgree}
                >
                  Setuju <Check className="w-5 h-5" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Register;
