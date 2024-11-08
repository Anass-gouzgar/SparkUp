"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <motion.h1
          className="text-9xl font-black text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Uh-oh!
        </motion.p>

        <motion.p
          className="mt-4 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We can't find that page.
        </motion.p>

        <motion.a
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="/"
        >
          Go Back Home
        </motion.a>
      </div>
    </div>
  );
}
