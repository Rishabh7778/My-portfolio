import React, { useRef } from 'react';
import aboutImg from '../assets/profile-pic.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef();


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%", // Starts when the top of the section is 80% from the top of viewport
                toggleActions: "play none none none"
            }
        });

        // 1. Header Animation
        tl.from(".about-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            // 2. Image & Arch Background Animation
            .from(".about-image-box", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4")
            // 3. Text Content & Button Animation
            .from(".about-text-content > *", {
                x: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.8")
            // 4. Skills Circular Progress Animation
            .from(".skill-item", {
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.2");

    }, { scope: container });

    const CircularProgress = ({ percent, name, icon }) => {
        const radius = 35;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percent / 100) * circumference;

        return (
            <div className="flex flex-col items-center skill-item">
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r={radius} stroke="#2a2a2a" strokeWidth="6" fill="transparent" />
                        <circle
                            cx="48" cy="48" r={radius} stroke="#f97316" strokeWidth="6" fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute text-gray-400 font-semibold text-xl border border-gray-600 rounded-lg p-1 w-10 h-10 flex items-center justify-center bg-[#1a1a1a]">
                        {icon}
                    </span>
                </div>
                <div className="text-center mt-2">
                    <span className="text-orange-500 font-bold text-lg">{percent}%</span>
                    <p className="text-gray-400 text-sm font-medium">{name}</p>
                </div>
            </div>
        );
    };

    return (
        <section ref={container} className="bg-[#111111] text-white py-20 overflow-hidden" id="about">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12 about-header">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">About Me</h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Building Scalable Web Solutions & E-Commerce Experiences
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative about-image-box">
                        <div className="absolute w-[300px] h-[350px] md:w-[400px] md:h-[450px] bg-[#1a1a1a] rounded-t-full top-10 z-0"></div>
                        <img
                            src={aboutImg} alt="Profile"
                            className="relative z-10 w-[300px] md:w-[395px] md:h-[450px] h-[400px] object-contain drop-shadow-2xl grayscale contrast-125"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Bio Text Section */}
                    <div className="w-full md:w-1/2 md:pl-10 space-y-6 text-center md:text-left about-text-content">
                        <div className="space-y-5">

                            {/* Paragraph 1: The Hook (Client Value) */}
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Hi! I’m a <strong className="text-white">Full Stack Developer</strong> specializing in building high-performance, scalable digital solutions. I combine clean backend architecture with pixel-perfect design to create web applications that don't just look great, but <span className="text-orange-500 font-semibold">drive real business results.</span>
                            </p>

                            {/* Paragraph 2: Experience & Tech Stack */}
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                With proven experience delivering production-ready interfaces, I’ve mastered the art of building blazing-fast, responsive SPAs using <strong className="text-white">React.js</strong>. Beyond the frontend, I engineer robust and secure architectures using <strong className="text-white">Laravel</strong> and <strong className="text-white">Node.js</strong>, seamlessly integrated with SQL and MongoDB.
                            </p>

                            {/* Paragraph 3: E-commerce & Versatility */}
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Whether you need a custom SaaS platform or a high-converting E-commerce store, I bring the right tech stack to turn your vision into reality.
                            </p>

                            {/* Punchy Bullet Points */}
                            <ul className="space-y-3 mt-4 text-sm md:text-base text-gray-400">
                                <li className="flex items-start justify-center md:justify-start gap-3">
                                    <span className="text-orange-500 mt-1">▹</span>
                                    <span><strong className="text-white font-medium">Frontend Excellence:</strong> Crafting modern, interactive UIs with the Custom.</span>
                                </li>
                                <li className="flex items-start justify-center md:justify-start gap-3">
                                    <span className="text-orange-500 mt-1">▹</span>
                                    <span><strong className="text-white font-medium">Backend & APIs (Node/Laravel/PHP):</strong> Architecting secure, scalable server-side logic.</span>
                                </li>
                                <li className="flex items-start justify-center md:justify-start gap-3">
                                    <span className="text-orange-500 mt-1">▹</span>
                                    <span><strong className="text-white font-medium">Shopify E-Commerce:</strong> Developing custom, high-converting digital storefronts.</span>
                                </li>
                            </ul>

                        </div>
                        <div className="pt-4 flex justify-center md:justify-start">
                            <a href='https://drive.google.com/file/d/1IZ5ZC_1S5RT3Jc2-Heb6BhF13dRwMhd_/view?usp=sharing' target='_blank' rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded flex items-center space-x-2 transition-colors shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;