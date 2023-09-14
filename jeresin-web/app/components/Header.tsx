import Link from "next/link";

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
                    href="/"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    Collections
                </Link>
                <Link 
                    href="/"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    About
                </Link>
                <Link 
                    href="/"
                    className='block mt-4 lg:inline-block lg:mt-0 mr-4'
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}