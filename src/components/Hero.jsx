import React, { useRef } from 'react'
import rishabh from '../assets/Frame 20.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Text Animation
        tl.from(".hero-text", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })

            // 3. Buttons
            .from(".hero-btn", {
                y: 20,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.3")
            // 4. Image Section
            .from(".hero-circle", {
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, 0)
            .from(".hero-img", {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, 0.2);

    }, { scope: container });

    return (
        <main ref={container} className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center flex-grow mt-8 md:mt-0 relative z-10" id="home">

            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-2 md:pr-10 relative z-20">
                <p className="hero-text text-gray-400 text-lg font-medium">Hi I am</p>
                <h2 className="hero-text text-gray-300 text-xl font-semibold">Rishabh Kumar</h2>
                <h1 className="hero-text text-orange-500 text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Full Stack Developer
                </h1>


                <div className="flex space-x-4 mb-10">
                    <a href="#contact" className="hero-btn bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded shadow-lg transition">
                        Contact us
                    </a>
                    <a href="https://drive.google.com/file/d/1IZ5ZC_1S5RT3Jc2-Heb6BhF13dRwMhd_/view?usp=sharing" target='_blank' className="hero-btn bg-transparent border border-gray-600 hover:border-white text-white font-medium px-8 py-3 rounded transition">
                        Download CV
                    </a>
                </div>

                {/* Stats Box */}
                <div className="hero-stats bg-[#1f1f1f] rounded-xl p-6 md:p-8 flex justify-between w-full md:w-11/12 lg:w-3/4 mt-4 shadow-xl border border-white/5">
                    <div className="pr-6 border-r border-gray-700">
                        <h3 className="text-orange-500 text-2xl md:text-3xl font-bold">2+</h3>
                        <p className="text-gray-400 text-sm md:text-base">Experiences</p>
                    </div>
                    <div className="px-6 border-r border-gray-700">
                        <h3 className="text-orange-500 text-2xl md:text-3xl font-bold">12+</h3>
                        <p className="text-gray-400 text-sm md:text-base">Project done</p>
                    </div>
                    <div className="pl-6">
                        <h3 className="text-orange-500 text-2xl md:text-3xl font-bold">10+</h3>
                        <p className="text-gray-400 text-sm md:text-base">Happy Clients</p>
                    </div>
                </div>
            </div>

          <div className="w-full md:w-1/2 flex justify-center items-center relative h-[500px] md:h-auto mt-10 md:mt-0">
    {/* Combine Circle and Image for a clean mask */}
    {/* Added 'hero-circle-container' class */}
    <div className="hero-circle-container relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#1a1a1a] rounded-full overflow-hidden flex justify-center items-end pb-0">
        <img
            src={rishabh}
            alt="Profile"
            // Important: removed 'rounded-b-full' and 'object-cover' for a clean mask
            className="hero-img w-full h-auto max-h-full grayscale contrast-125"
        />
    </div>
</div>

        </main>
    )
}

export default Hero;