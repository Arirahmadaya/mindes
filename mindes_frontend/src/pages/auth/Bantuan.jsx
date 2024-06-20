import React from "react";
import NavbarUser from "../../components/NavbarUser";
import { Mail, HelpCircle, PhoneCall } from "react-feather";

const Bantuan = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarUser />
      <div className="flex-grow flex flex-col items-center py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Pusat Bantuan
          </h2>

          {/* FAQ Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <div className="space-y-6">
              <FaqItem
                question="Bagaimana cara mengakses data desa?"
                answer="Anda dapat mengakses data desa melalui menu 'Data Desa' pada navigasi utama."
              />
              <FaqItem
                question="Bagaimana cara menghubungi dukungan teknis?"
                answer="Anda dapat menghubungi dukungan teknis melalui kontak yang tersedia di bagian 'Kontak Dukungan'."
              />
              <FaqItem
                question="Bagaimana cara memperbarui informasi profil?"
                answer="Anda dapat memperbarui informasi profil melalui menu 'Profile' pada navigasi utama."
              />
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Kontak Dukungan
            </h3>
            <div className="space-y-6">
              <ContactItem
                icon={<PhoneCall className="w-6 h-6 mr-3 text-blue-600" />}
                contact="+62 812 3456 7890"
              />
              <ContactItem
                icon={<Mail className="w-6 h-6 mr-3 text-blue-600" />}
                contact="support@mindes.com"
              />
            </div>
          </div>

          {/* User Guide Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Panduan Pengguna
            </h3>
            <p className="text-gray-700 mb-4">
              Anda dapat mengunduh panduan pengguna untuk mempelajari lebih
              lanjut tentang cara menggunakan sistem ini.
            </p>
            <button
              onClick={() => (window.location.href = "/path/to/user-guide.pdf")}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Unduh Panduan Pengguna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm transition duration-300 ease-in-out hover:shadow-md">
    <h4 className="text-xl font-medium flex items-center text-blue-600">
      <HelpCircle className="w-6 h-6 mr-2" />
      {question}
    </h4>
    <p className="text-gray-700 mt-3">{answer}</p>
  </div>
);

const ContactItem = ({ icon, contact }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm flex items-center transition duration-300 ease-in-out hover:shadow-md">
    {icon}
    <span className="text-lg text-gray-700">{contact}</span>
  </div>
);

export default Bantuan;

// import React from "react";
// import NavbarUser from "../../components/NavbarUser";
// import { Tabs, Tab, Input } from "@nextui-org/react";
// import { Mail, HelpCircle, PhoneCall } from "react-feather";

// const Bantuan = () => {
//   const [selectedTab, setSelectedTab] = React.useState("categories");

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <NavbarUser />
//       <div className="flex-grow flex flex-col items-center py-12">
//         <div className="flex bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
//           <div className="border-2 w-1/2">
//             <div className="flex justify-between items-center mb-6 ">
//               <h2 className="text-4xl font-bold text-blue-600">FAQ</h2>
//               <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
//                 <HelpCircle className="w-6 h-6 text-white" />
//               </div>
//             </div>
//             <p className="text-xl mb-4">How can we help you?</p>
//             <Input
//               clearable
//               fullWidth
//               size="lg"
//               placeholder="Write your question"
//               className="mb-8"
//             />

//             <Tabs
//               fullWidth
//               size="md"
//               aria-label="Help Tabs"
//               selectedKey={selectedTab}
//               onSelectionChange={setSelectedTab}
//               className="mb-8"
//             >
//               <Tab key="categories" title="Categories">
//                 <div className="space-y-4">
//                   <CategoryItem title="Getting started" icon={<HelpCircle />} />
//                   <CategoryItem title="Design Features" icon={<HelpCircle />} />
//                   <CategoryItem title="Functionality" icon={<HelpCircle />} />
//                 </div>
//               </Tab>
//               <Tab key="contact" title="Contact us">
//                 <div className="space-y-4">
//                   <ContactItem title="+62 812 3456 7890" icon={<PhoneCall />} />
//                   <ContactItem title="support@desainfo.com" icon={<Mail />} />
//                 </div>
//               </Tab>
//             </Tabs>
//           </div>
//           <div className="w-1/2"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategoryItem = ({ title, icon }) => (
//   <div className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
//     <div className="flex items-center space-x-2">
//       {icon}
//       <span className="text-lg font-medium text-gray-700">{title}</span>
//     </div>
//     <button className="bg-gray-200 text-gray-600 rounded-full p-2 focus:outline-none hover:bg-gray-300">
//       +
//     </button>
//   </div>
// );

// const ContactItem = ({ title, icon }) => (
//   <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-center space-x-2">
//     {icon}
//     <span className="text-lg text-gray-700">{title}</span>
//   </div>
// );

// export default Bantuan;
