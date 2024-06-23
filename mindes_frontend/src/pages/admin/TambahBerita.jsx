import React from "react";
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import InputCKEditor from "../../components/InputCKEditor";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,

} from "@nextui-org/react";

const TambahBerita = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());

  const selectedValue = React.useMemo(() => {
    const items = Array.from(selectedKeys).map(
      (key) => key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
    );
    return items.length ? items.join(", ") : "Pilih Kategori";
  }, [selectedKeys]);

  const handleSelectionChange = (keys) => {
    setSelectedKeys(keys);
  };

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Tambah Berita</div>

        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500  ">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto "></div>
              <div className="flex flex-col p-10 gap-5">
                <div className="relative w-full">
                  <Input type="text" variant="bordered" label="Judul Berita" />
                </div>
                

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize text-left w-full"
                    >
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Multiple selection example"
                    variant="flat"
                    closeOnSelect={false}
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={handleSelectionChange}
                  >
                    <DropdownItem key="text">Text</DropdownItem>
                    <DropdownItem key="number">Number</DropdownItem>
                    <DropdownItem key="date">Date</DropdownItem>
                    <DropdownItem key="single_date">Single Date</DropdownItem>
                    <DropdownItem key="iteration">Iteration</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <div className="">
                  <InputCKEditor />
                </div>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahBerita;
