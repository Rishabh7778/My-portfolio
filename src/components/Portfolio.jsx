import React, { useState, useEffect } from 'react';
import samasthaImg from '../assets/samastha.png';
import Ashacity from '../assets/asha-city.png';
import FuelYourBody from '../assets/fuel-your-body.png';
import Akaari from '../assets/Akaari.png';
import Clicknest from '../assets/ClicknestSolution.png';
import DigiBuggy from '../assets/DigiBuggy.png';
import Rajdhani from '../assets/Rajdhani.png';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    // FIXED: Properly lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            // Add classes to completely lock the body
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // For some mobile browsers
        } else {
            // Remove classes when modal closes
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        // Cleanup function in case component unmounts while modal is open
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [selectedProject]);

    const filters = [
        "All",
        "Laravel Apps",
        "Shopify Stores",
        "Custom Web"
    ];

    const projects = [
        {
            id: 1,
            title: "Samastha",
            category: "Custom Web",
            img: samasthaImg,
            role: "Frontend Designer & Developer",
            description: "Led the complete frontend design and development for Samastha. Crafted highly engaging, pixel-perfect, and modern web pages that significantly enhanced the visual appeal and overall user experience.",
            contributions: [
                "Designed visually stunning and intuitive user interfaces",
                "Developed fully responsive, mobile-first web pages",
                "Implemented smooth animations and interactive UI elements"
            ],
            link: "https://samastha.co.in/"
        },
        {
            id: 2,
            title: "Asha City",
            category: "Laravel Apps",
            img: Ashacity,
            role: "Backend & API Developer",
            description: "Built the core infrastructure for the Asha City platform. Focused on high-performance server logic and seamless API integration for their frontend interfaces.",
            contributions: [
                "Engineered the application logic using Laravel",
                "Optimized database queries for faster load times",
                "Integrated third-party payment gateways"
            ],
            link: "https://www.ashacity.com/"
        },
        {
            id: 3,
            title: "Fuel Your Body",
            category: "Shopify Stores",
            img: FuelYourBody,
            role: "Shopify Expert / Frontend Dev",
            description: "Designed and developed a premium, high-converting E-Commerce store for a fitness and nutrition brand. Focused on user experience and checkout optimization.",
            contributions: [
                "Customized Liquid themes for a unique brand identity",
                "Integrated custom product configurators",
                "Optimized site speed and mobile responsiveness"
            ],
            link: "https://eatfyb.ca/"
        },
        {
            id: 4,
            title: "Akaari",
            category: "Shopify Stores",
            img: Akaari,
            role: "Full Stack Developer",
            description: "Developed a complete e-commerce solution using Shopify for Akaari. Focused on creating a visually appealing storefront with smooth user experience and seamless functionality.",
            contributions: [
                "Designed and customized Shopify themes with strong focus on frontend UI/UX",
                "Integrated third-party apps and APIs for enhanced store functionality",
                "Managed product listings, collections, and dynamic content",
                "Optimized store performance and mobile responsiveness",
                "Handled store setup including payments, shipping, and basic configurations"
            ],
            link: "https://shopakaari.in/"
        },
        {
            id: 5,
            title: "Rajdhani Besan",
            category: "Shopify Stores",
            img: Rajdhani,
            role: "Web Developer",
            description: "Developed a high-performance Shopify store with a clean, user-friendly design and smooth shopping experience tailored for the brand.",
            contributions: [
                "Designed and customized Shopify theme with focus on modern UI/UX",
                "Managed product listings, collections, and store content",
                "Integrated apps and APIs for enhanced functionality",
                "Optimized store speed, performance, and mobile responsiveness",
                "Configured payments, shipping, and essential store settings"
            ],
            link: "https://rajdhanifoods.com/"
        },
        {
            id: 6,
            title: "DigiBuggy",
            category: "Laravel Apps",
            img: DigiBuggy,
            role: "Frontend & Backend Developer",
            description: "Built a scalable digital platform with a strong focus on modern frontend design and seamless API integration. Delivered a smooth, responsive user experience backed by a reliable Laravel backend.",
            contributions: [
                "Designed and developed modern, responsive UI with focus on user experience",
                "Integrated multiple APIs for dynamic data handling and real-time functionality",
                "Developed efficient backend logic using Laravel with clean architecture",
                "Implemented secure authentication and protected routes",
                "Optimized performance and ensured cross-device compatibility"
            ],
            link: "https://digibuggy.com"
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="bg-[#050505] text-white py-24 relative overflow-hidden" id="portfolio">
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Custom Styles including Premium Scrollbar */}
            <style>
                {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          .glass-panel { background: rgba(25, 25, 25, 0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          
          /* Custom Premium Scrollbar for Modal */
          .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
              background: #111111;
              border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #333333;
              border-radius: 20px;
              border: 2px solid #111111;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #f97316; /* Orange 500 */
          }
        `}
            </style>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3 block">My Work</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Portfolio</span>
                    </h2>

                    {/* Sleek Filter Buttons */}
                    <div className="category flex justify-center gap-3 md:gap-4 p-2 bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-full inline-flex mx-auto shadow-xl">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                                    : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-12 md:pb-0 scrollbar-hide snap-x snap-mandatory px-4 md:px-0">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="min-w-[85vw] md:min-w-0 snap-center group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-[260px] w-full">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
                                    <span className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                                        View Details
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>

                                <span className="absolute top-4 left-4 glass-panel text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
                                    {project.category}
                                </span>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                                <p className="text-orange-500 font-medium text-sm mb-4">{project.role}</p>
                                <p className="text-gray-400 text-sm line-clamp-2 mt-auto">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Project Details Modal - Column Layout */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 md:py-12">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content (Flex Column, Custom Scrollbar) */}
                    <div className="bg-[#111111] border border-white/10 rounded-3xl w-full max-w-3xl relative max-h-full overflow-y-auto custom-scrollbar shadow-2xl shadow-orange-500/10 transform transition-all animate-in fade-in zoom-in-95 duration-300 z-10 flex flex-col">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 bg-black/60 text-gray-300 hover:text-white hover:bg-orange-500 p-2.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Top Side: Image */}
                        <div className="w-full relative h-[250px] md:h-[400px] shrink-0">
                            <img
                                src={selectedProject.img}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover rounded-t-3xl"
                            />
                            {/* Gradient fade to blend image with content below */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent"></div>
                        </div>

                        {/* Bottom Side: Details */}
                        <div className="w-full p-6 md:p-10 flex flex-col gap-6 -mt-8 relative z-10">

                            {/* Header */}
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 rounded-lg text-xs font-bold tracking-wider uppercase border border-orange-500/20">
                                        {selectedProject.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{selectedProject.title}</h3>
                                <p className="text-gray-400 font-medium text-lg border-b border-white/10 pb-5">
                                    Role: <span className="text-white ml-1">{selectedProject.role}</span>
                                </p>
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 block">Project Overview</h4>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Contributions */}
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 block">Key Contributions</h4>
                                <ul className="space-y-3">
                                    {selectedProject.contributions.map((item, index) => (
                                        <li key={index} className="flex items-start text-gray-300 bg-[#1a1a1a] p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors">
                                            <div className="bg-orange-500/20 p-1.5 rounded-full mr-4 mt-0.5 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button */}
                            <div className="mt-4 pt-6 border-t border-white/5">
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-3 w-full md:w-auto md:inline-flex bg-white text-black hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
                                >
                                    Visit Live Project
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;