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
      const response = await axios.get("https://data.mindes.my.id/berita");
      const dataWithImgUrls = response.data.data.map((item) => {
        if (item.img_berita) {
          item.img_berita_url = `http://data.mindes.my.id/public${item.img_berita}`;
        } else {
          item.img_berita_url = null;
        }
        return item;
      });
      setList(dataWithImgUrls);
      setFilteredList(dataWithImgUrls); // Initialize filteredList
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat data berita", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://data.mindes.my.id/kategori");
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
      <div className="mb-28 mt-5">
        <div className="lg:mx-70 mx-10">
          <div className="mb-0 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20">
            Berita Kalinyamat Kulon
          </div>
          <div className="mb-5 font-regular text-center text-heading-6 text-black relative z-20">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
            artikel-artikel jurnalistik dari Kalinyamat Kulon
          </div>

          <div className="flex justify-end mb-4">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="bg-primary-30 text-white font-semibold"> <Filter /> Kategori</Button>
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
          <div className="w-full h-auto flex justify-center border-2"> <CardBerita list={filteredList} /> </div>

          
        </div>
      </div>

      <div className="lg:mx-70 mx-10">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
          Agenda Desa Kalinyamat Kulon
        </div>
        <div className="mb-0 text-center text-heading-6 text-black">
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
