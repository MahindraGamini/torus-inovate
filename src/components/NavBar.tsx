import React, { useState } from "react";
import { LayoutDashboard, BarChart2, Settings, LogOut, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", path: "/dashboard" },
    { icon: <BarChart2 className="w-5 h-5" />, label: "Analytics", path: "/analytics" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/settings" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">Dashboard</span>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path} 
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md flex items-center space-x-2 transition duration-300"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="text-red-600 hover:bg-red-50 hover:text-red-800 px-3 py-2 rounded-md flex items-center space-x-2 transition duration-300"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path} 
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md flex items-center space-x-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}

              <button
                onClick={handleLogout}
                className="w-full text-left text-red-600 hover:bg-red-50 hover:text-red-800 px-3 py-2 rounded-md flex items-center space-x-2"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
