// src/hooks/useAuthRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useAuthRedirect = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
  
      if (token) {
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
  
        console.log("Decoded token:", decodedToken); // Debugging
  
        if (decodedToken.roles === "admin" || decodedToken.roles === "superadmin") {
          navigate("/admin/beranda");
        } else {
          navigate("/");
        }
      }
    }, [navigate]);
  };
  
  export default useAuthRedirect;

// const useAuthRedirect = () => {
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       const params = new URLSearchParams(window.location.search);
//       const token = params.get("token");
  
//       if (token) {
//         try {
//           const decodedToken = jwtDecode(token);
  
//           console.log("Token found:", token);
//           console.log("Decoded token:", decodedToken);
  
//           localStorage.setItem("token", token);
//           localStorage.setItem("roles", decodedToken.roles);
  
//           if (decodedToken.roles === "admin" || decodedToken.roles === "superadmin") {
//             navigate("/admin/beranda");
//           } else {
//             navigate("/");
//           }
//         } catch (error) {
//           console.error("Invalid token:", error);
//           navigate("/login"); // Redirect to login if token is invalid
//         }
//       } else {
//         const storedToken = localStorage.getItem("token");
//         if (storedToken) {
//           try {
//             const decodedStoredToken = jwtDecode(storedToken);
//             console.log("Stored Token found:", storedToken);
//             console.log("Decoded Stored Token:", decodedStoredToken);
  
//             if (decodedStoredToken.roles === "admin" || decodedStoredToken.roles === "superadmin") {
//               navigate("/admin/beranda");
//             } else {
//               navigate("/");
//             }
//           } catch (error) {
//             console.error("Invalid stored token:", error);
//             localStorage.removeItem("token");
//             localStorage.removeItem("roles");
//             navigate("/login"); // Redirect to login if stored token is invalid
//           }
//         } else {
//           navigate("/login");
//         }
//       }
//     }, [navigate]);
//   };
  
//   export default useAuthRedirect;