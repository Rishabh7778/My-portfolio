import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Independent Full Stack Developer",
            company: "Freelance Clients",
            period: "2026 - Present",
            desc: "Helping businesses modernize their digital presence. I specialize in tearing down slow, legacy websites and rebuilding them into lightning-fast, high-converting web applications using modern React and Node.js architectures.",
            highlight: "Specialized in Website Modernization & Performance"
        },
        {
            id: 2,
            role: "Full Stack Developer",
            company: "The Night Marketers",
            period: "2024 - 2026",
            desc: "Architected and deployed robust web applications. Handled everything from crafting responsive, pixel-perfect frontends to designing secure database schemas and developing RESTful APIs.",
            highlight: "End-to-End Application Development"
        },
        {
            id: 3,
            role: "Web Developer Intern",
            company: "TechnoHack",
            period: "2023",
            desc: "Gained hands-on experience in modern frontend workflows. Built interactive UI components and learned the core fundamentals of scalable web design.",
            highlight: "Frontend UI/UX Implementation"
        }
    ];

    // Grouped Skills for a modern look (No percentages, just capabilities)
    const techStack = [
        {
            category: "Frontend Excellence",
            icon: "🎨",
            skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5", "HTML5/CSS3"]
        },
        {
            category: "Backend & Architecture",
            icon: "⚙️",
            skills: ["Node.js", "Express", "RESTful APIs", "Laravel", "PHP", "Redis", "Docker"]
        },
        {
            category: "Website Building Platforms",
            icon: "🌐",
            skills: ["Shopify", "WordPress"]
        },
        {
            category: "Database & Cloud",
            icon: "🗄️",
            skills: ["MongoDB (NoSQL)", "MySQL (SQL)", "Database Design"]
        }
    ];

    return (
        <section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden" id="experience">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">& Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Delivering high-performance digital solutions with a modern tech stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    
                    {/* Left Side: Modern Timeline (Takes up 7 columns on large screens) */}
                    <div className="lg:col-span-7">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-gray-700 before:to-transparent">
                            
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    
                                    {/* Timeline Dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    
                                    {/* Experience Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#141414] border border-[#222] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-orange-500/10">
                                        <div className="flex flex-col mb-3">
                                            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-1">{exp.period}</span>
                                            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                            <h4 className="text-gray-400 font-medium">{exp.company}</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                            {exp.desc}
                                        </p>
                                        <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                                            {exp.highlight}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Bento-Style Tech Stack (Takes up 5 columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {techStack.map((category, index) => (
                            <div 
                                key={index} 
                                className="bg-[#141414] border border-[#222] p-6 rounded-2xl hover:border-[#333] transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span 
                                            key={i} 
                                            className="bg-[#222] text-gray-300 hover:text-white hover:bg-orange-600 transition-colors px-4 py-2 rounded-xl text-sm font-medium cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Value Proposition Box */}
                        <div className="mt-4 bg-gradient-to-br from-orange-600 to-yellow-600 p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            <div className="relative z-10 text-white">
                                <h3 className="text-2xl font-bold mb-2">Need a modern website?</h3>
                                <p className="text-white/80 mb-6 text-sm">Let's build a high-performance web application that drives results.</p>
                                <a href="#contact" className="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;