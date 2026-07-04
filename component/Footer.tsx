'use client';

import React from 'react';
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-zinc-950 border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    
                    <div>
                        <p className="text-gray-400 text-sm tracking-wider">BRANDING &amp; MARKETING BY</p>
                        <h5 className="text-2xl font-bold text-white mt-2">third aesthetic</h5>
                    </div>

                    <div className="flex justify-center">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        >
                            BACK TO TOP
                            <FiArrowUp className="text-xl" />
                        </motion.button>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-white/70">© 2026 Callista — All Rights Reserved</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Architectural images are artist impressions only.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-16 text-xs text-gray-500 tracking-widest">
                    CRAFTED WITH PASSION FOR THE FUTURE
                    <p>My Phone number2096261945</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;