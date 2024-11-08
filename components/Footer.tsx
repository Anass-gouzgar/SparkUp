import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src={logo} alt="logo" width={124} height={30} className="rounded-full" />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Present Your Startup, Connect with Entrepreneurs
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-1 text-gray-500 text-sm">
          © {currentYear} -  Created by <Link href={"https:/anassgouzgar.com"}>Anass GOUZGAR</Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
