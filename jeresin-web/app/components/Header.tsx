'use client'
import Link from "next/link";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return(
        <div className="sticky top-0 flex flex-wrap items-center justify-between p-5 bg-loulou text-white z-50">
            <div className="font-bold">
                <Link 
                    href="/"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    Home
                </Link>
                <Link 
                    href="../collections"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    Collections
                </Link>
                <Link 
                    href="/"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    Customize
                </Link>
                <Link 
                    href="../about"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    About
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link 
                    href='/'
                    className='block rounded-full p-2 bg-wax text-loulou'
                >
                    <FaCartShopping/>
                </Link>
                <Link 
                    href='/'
                    className='block rounded-full p-2 bg-wax text-loulou'
                >
                    <FaSearch/>
                </Link>
                <Link 
                    href='/'
                    className='block rounded-full p-2 bg-wax text-loulou'
                >
                    <FaUser/>
                </Link>
            </div>
        </div>
    )
}