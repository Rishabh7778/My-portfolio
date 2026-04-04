import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="bg-[#111111] text-white py-20" id="contact">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-3">Contact me</h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Cultivating Connections: Reach Out And Connect With Me
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Left Side: Contact Details */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Get in Touch</h3>
                            <p className="text-gray-400 mb-8">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                                    <p className="text-gray-300 font-medium">saty665566@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Phone</p>
                                    <p className="text-gray-300 font-medium">+91 8920464643</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                                    <p className="text-gray-300 font-medium">Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-2/3 bg-[#181818] p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <form action="https://formspree.io/f/xgoaejpn" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full bg-[#1f1f1f] border border-transparent focus:border-orange-500 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition-colors"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-[#1f1f1f] border border-transparent focus:border-orange-500 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition-colors"
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#1f1f1f] border border-transparent focus:border-orange-500 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition-colors"
                                />
                                <div className="relative">
                                    {/* FIX APPLIED HERE: Added defaultValue="" and removed selected from the first option */}
                                    <select 
                                        name="service" 
                                        defaultValue="" 
                                        className="w-full bg-[#1f1f1f] border border-transparent focus:border-orange-500 rounded-lg px-4 py-3 text-gray-300 outline-none appearance-none transition-colors cursor-pointer"
                                    >
                                        <option value="" disabled>Service Of Interest</option>
                                        <option value="ui-ux">UI/UX Design</option>
                                        <option value="frontend">Frontend Development</option>
                                        <option value="backend">Backend Development</option>
                                        <option value="fullstack">Full Stack Development</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="ecommerce">E-commerce Development</option>
                                        <option value="cms">CMS Development</option>
                                        <option value="shopify">Shopify Development</option>
                                        <option value="wordpress">WordPress Development</option>
                                        <option value="react">React Development</option>
                                        <option value="node">Node.js Development</option>
                                        <option value="laravel">Laravel Development</option>
                                        <option value="php">PHP Development</option>
                                        <option value="api">API Integration</option>
                                        <option value="database">Database Design (SQL/NoSQL)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Project Details..."
                                rows="5"
                                required
                                className="w-full bg-[#1f1f1f] border border-transparent focus:border-orange-500 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition-colors resize-none"
                            ></textarea>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-orange-500/20"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;