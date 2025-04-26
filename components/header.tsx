"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";

export const Header: React.FC = () => {

    const [showOptions, setOptions] = useState(false);

    return (
        <header className="bg-none shadow-md p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Image alt="gen solution logo" src={'/logo.png'}
                    sizes="(max-width: 768px) 100px, 150px"
                    className="max-w-[100px] md:max-w-[150px]" width={200} height={50} />

                <div className="md:hidden flex items-center justify-end  w-full">
                    <button title="show option" type="button" onClick={(_) => setOptions(prev => !prev)} className="focus:outline-none">
                        {
                            showOptions ? <CgClose /> : <GiHamburger />
                        }
                    </button>

                    <div className={`${ !showOptions && 'hidden' } absolute top-15 left-0 bg-white border  shadow-md z-50 w-screen`}>
                        <ul className="flex flex-col text-gray-800">
                            <li><a href="#" className=" px-4 py-2 hover:bg-yellow-100">Home</a></li>
                            <li><a href="/about" className=" px-4 py-2 hover:bg-yellow-100">About</a></li>
                            <li><a href="/services" className=" px-4 py-2 hover:bg-yellow-100">Services</a></li>
                            <li><a href="/contact-us" className=" px-4 py-2 hover:bg-yellow-100">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <p className="text-md text-yellow-400">Make a call: +91 9102206912</p>
                </div>

                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#" className="text-yellow-500 text-3xl hover:text-yellow-600">
                        <FaFacebook />
                    </Link>
                    <Link href="#" className="text-yellow-500 text-3xl hover:text-yellow-600">
                        <BsTwitter />
                    </Link>
                    <Link href="#" className="text-yellow-500 text-3xl hover:text-yellow-600">
                        <BsInstagram />
                    </Link>
                    <Link href="#" className="text-yellow-500 text-3xl hover:text-yellow-600">
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
        </header>
    )
}