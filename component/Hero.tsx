'use client';

import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:30px_30px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl pt-12 lg:pt-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-emerald-400 font-medium">Next-Gen Innovation</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tighter text-white">
                        Innovate.<br />
                        Transform.<br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Thrive.</span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-md">
                        ພວກເຮົາຊ່ວຍບໍລິສັດຂອງເຈົ້າເພື່ອສ້າງຜະລິດຕະພັນ ແລະ ປະສົບການທີ່ດີທີ່ສຸດໃນຍຸກດິຈິຕອນ.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/10"
                        >
                            Explore Our Services
                            <span className="text-xl">→</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="border border-white/30 hover:bg-white/5 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300"
                        >
                            Watch Video
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <motion.div
                        animate={{ y: [0, -25, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-[4rem]"></div>

                        <Image
                            src="/assets/images/Screenshot_2026-07-04_001234-removebg-preview.png"
                            alt="Futuristic city"
                            width={420}
                            height={520}
                            priority
                            className="relative z-10 drop-shadow-2xl shadow-2xl rounded-3xl object-contain"
                        />

                        <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/10 rounded-full animate-[spin_25s_linear_infinite]"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-white/10 rounded-full animate-[spin_35s_linear_infinite_reverse]"></div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
            >
                <span className="text-xs tracking-widest">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            </motion.div>
        </section>
    );
}

export default Hero;