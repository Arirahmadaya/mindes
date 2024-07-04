import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dropdown,
  Button,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"; // Periksa kembali impor
import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import CardBerita from "../../components/CardBerita";
import Agenda from "../../components/Agenda";
import { Filter } from "react-feather";

const Berita = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("semua");

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/berita`);
      const dataWithImgUrls = response.data.data.map((item) => {
        if (item.img_berita) {
          item.img_berita_url = `${import.meta.env.VITE_API_URL}/public${item.img_berita}`;
        } else {
          item.img_berita_url = null;
        }
        return item;
      });
      setList(dataWithImgUrls);
      setFilteredList(dataWithImgUrls); 
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat data berita", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/kategori`);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat kategori", error);
    }
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "semua") {
      setFilteredList(list);
    } else {
      const filtered = list.filter(
        (item) => item.id_kategori === parseInt(category)
      );
      setFilteredList(filtered);
    }
  };

  return (
    <>
      <NavbarUser className="absolute" />
      <div className="mt-5 mb-28">
        <div className="mx-5 lg:mx-70">
          <div className="relative z-20 mb-0 font-bold text-center text-heading-5 lg:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl">
            Berita Kalinyamat Kulon
          </div>
          <div className="relative z-20 mb-5 text-center text-black font-regular lg:text-heading-6 text-body-2">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
            artikel-artikel jurnalistik dari Kalinyamat Kulon
          </div>

          <div className="flex mb-4">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="font-semibold text-white bg-primary-30"
                  color="secondary"
                >
                  <Filter /> Filter
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Kategori Berita">
                <DropdownItem
                  key="semua"
                  onClick={() => handleFilterChange("semua")}
                >
                  Semua
                </DropdownItem>
                {categories.map((category) => (
                  <DropdownItem
                    key={category.id_kategori}
                    onClick={() => handleFilterChange(category.id_kategori)}
                  >
                    {category.nama}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="w-full h-auto"> </div>
          <div className="flex justify-center w-full h-auto">
            {" "}
            <CardBerita list={filteredList} />{" "}
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-70">
        <div className="mb-2 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
          Agenda Desa Kalinyamat Kulon
        </div>
        <div className="mb-0 text-center text-black lg:text-heading-6 text-body-2">
          Lihat Agenda Desa yang bisa anda ketahui lebih lanjut di sini
        </div>

        <div className="my-10 relative z-20 lg:mx-70 mx-[20px]">
          <div className="w-4/5">
            <Agenda />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Berita;
