'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="uppercase font-bold text-2xl tracking-tighter cursor-pointer"
        >
          <h3 className="leading-none">
            APEX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SOLUTIONS</span>
          </h3>
        </motion.div>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block"
        >
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10">
            Get Started
          </button>
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-lg"
        >
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 bg-white text-black py-4 rounded-2xl font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;