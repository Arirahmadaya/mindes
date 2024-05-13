import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 ">
                <Link to="/" className="nav-link">
                    Beranda
                </Link> 
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
                <Link to="/infografis" className="nav-link">
                    Infografis
                </Link>
                <Link to="/contact" className="nav-link">
                    Berita
                </Link>         
            </div>
        </>
    )
}

export default Navbar




































// const Navbar = () => {
//   return ( 
//     <>
//     <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown"> {/*  */}
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="text-xl btn btn-ghost">daisyUI</a>
//   </div>
//   <div className="hidden navbar-center lg:flex">
//     <ul className="px-1 menu menu-horizontal">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     </>   
//   )
// }

// export default Navbar;