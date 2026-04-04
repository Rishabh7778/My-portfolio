import React from 'react';
// Agar aapke paas Samastha ka logo image hai, toh yahan import kar lijiye
// import samasthaLogo from '../assets/samastha-logo.png'; 

const Footer = () => {
    // Current year automatically update ho jayega
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 pt-8 pb-8 relative overflow-hidden">
        

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
            

   
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

         
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Rishabh. All rights reserved.
                    </p>
                    
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                        Designed & Built with <span className="text-orange-500 animate-pulse">♥</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;