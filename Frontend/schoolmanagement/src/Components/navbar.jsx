// import { useState } from "react";
// import { FaBars, FaTimes, FaUser, FaBell, FaSun, FaMoon } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { logout } from "../services/authService"; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(3);
//   const isAuthenticated = false; 
//   const userRole = "student";

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   const handleLogout = async () => {
//     try {
//       await logout(); // Attempt API logout
//     } catch (error) {
//       console.warn("Forcing frontend logout due to error:", error);
//     }
    
//     // Clear session & redirect
//     localStorage.removeItem("token");
//     sessionStorage.clear();
//     window.location.href = "/login";
//   };
  

//   const linksBeforeLogin = [
//     { title: "Home", href: "#" },
//     { title: "About", href: "#" },
//     { title: "Contact", href: "#" },
//     { title: "Login/Signup", href: "#" }
//   ];

//   const linksAfterLogin = [
//     { title: "Home", href: "#" },
//     { title: "About", href: "#" },
//     { title: "Contact", href: "#" },
//     { title: "Profile", href: userRole === "admin" ? "#admin" : userRole === "teacher" ? "#teacher" : "#student" }
//   ];

//   return (
//     <nav className={`fixed w-full z-50 top-0 left-0 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <img className="h-8 w-8" src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="School Logo" />
//           </div>

//           <div className="hidden md:flex flex-1 justify-end space-x-6">
//             {(isAuthenticated ? linksAfterLogin : linksBeforeLogin).map((link, index) => (
//               <a key={index} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#FF8559] hover:text-white">
//                 {link.title}
//               </a>
//             ))}

//             {isAuthenticated && (
//               <>
//                 <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
//                   <FaBell className="h-5 w-5" />
//                   {notifications > 0 && (
//                     <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-[#E65447] text-xs text-white text-center">
//                       {notifications}
//                     </span>
//                   )}
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleDarkMode} aria-label="Toggle dark mode">
//                   {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
//                 </button>
//                 <button 
//                   className="bg-[#E65447] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
//                   onClick={handleLogout}
//                 >
//                   <FiLogOut className="inline mr-2" /> Logout
//                 </button>
//               </>
//             )}
//           </div>

//           <div className="-mr-2 flex md:hidden">
//             <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
//             {(isAuthenticated ? linksAfterLogin : linksBeforeLogin).map((link, index) => (
//               <a key={index} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FF8559] hover:text-white">
//                 {link.title}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaBell, FaSun, FaMoon } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../services/authService"; // Adjust the import path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("student");

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("userRole");
    setIsAuthenticated(authStatus === "true");
    setUserRole(role || "student");
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLogout = async () => {
    try {
      await logout(); // Attempt API logout
    } catch (error) {
      console.warn("Forcing frontend logout due to error:", error);
    }
    
    // Clear session & redirect
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    sessionStorage.clear();
    window.location.href = "/login";
  };
  
  const linksBeforeLogin = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Login/Signup", href: "#" }
  ];

  const linksAfterLogin = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Profile", href: userRole === "admin" ? "#admin" : userRole === "teacher" ? "#teacher" : "#student" }
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="School Logo" />
          </div>

          <div className="hidden md:flex flex-1 justify-end space-x-6">
            {(isAuthenticated ? linksAfterLogin : linksBeforeLogin).map((link, index) => (
              <a key={index} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#FF8559] hover:text-white">
                {link.title}
              </a>
            ))}

            {isAuthenticated && (
              <>
                <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
                  <FaBell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-[#E65447] text-xs text-white text-center">
                      {notifications}
                    </span>
                  )}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                  {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </button>
                <button 
                  className="bg-[#E65447] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                  onClick={handleLogout}
                >
                  <FiLogOut className="inline mr-2" /> Logout
                </button>
              </>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
            {(isAuthenticated ? linksAfterLogin : linksBeforeLogin).map((link, index) => (
              <a key={index} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FF8559] hover:text-white">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
