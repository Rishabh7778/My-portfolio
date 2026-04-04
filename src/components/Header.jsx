import React, { useState } from 'react';

// You can use a library like react-icons (which includes FontAwesome)
// npm install react-icons
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
    // State to toggle the sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            <header className="container mx-auto px-6 py-6 flex justify-between items-center z-50 relative">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <span className="text-orange-500">My Portfolio</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#home" className="text-orange-500 hover:text-orange-400">Home</a>
                    <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
                    <a href="#about" className="text-gray-400 hover:text-white transition">About me</a>
                    <a href="#experience" className="text-gray-400 hover:text-white transition">Experience</a>
                    <a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact me</a>
                </nav>

                {/* Desktop CTA Button */}
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2.5 rounded shadow-lg transition hidden md:block">
                    Hire Me
                </a>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-white text-2xl z-50 focus:outline-none"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleSidebar}
            ></div>

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-[#1a1a1a] z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl border-l border-gray-800 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col pt-20 px-6 space-y-6">
                    <a href="#home" onClick={toggleSidebar} className="text-lg font-medium text-orange-500 hover:text-white">Home</a>
                    <a href="#services" onClick={toggleSidebar} className="text-lg font-medium text-gray-400 hover:text-orange-500 transition">Services</a>
                    <a href="#about" onClick={toggleSidebar} className="text-lg font-medium text-gray-400 hover:text-orange-500 transition">About me</a>
                    <a href="#portfolio" onClick={toggleSidebar} className="text-lg font-medium text-gray-400 hover:text-orange-500 transition">Portfolio</a>
                    <a href="#contact" onClick={toggleSidebar} className="text-lg font-medium text-gray-400 hover:text-orange-500 transition">Contact me</a>

                    <div className="pt-6 border-t border-gray-700">
                        <a href="#hire" onClick={toggleSidebar} className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded transition">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};