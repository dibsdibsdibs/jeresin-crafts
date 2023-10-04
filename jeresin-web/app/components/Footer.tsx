import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="flex flex-row justify-around items-center bg-loulou text-white py-10">
            <p className="text-4xl font-bold">© JERESIN CRAFTS 2023</p>
            <div className="flex w-1/3 justify-between">
                <div className="text-left">
                    <h3 className="font-bold pb-2">About</h3>
                    <p>About Us</p>
                </div>
                <div className="text-left">
                    <h3 className="font-bold pb-2">Policies</h3>
                    <p>Return Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                </div>
                <div className="text-left">
                    <h3 className="font-bold pb-2">Socials</h3>
                    <div className="flex gap-5 text-xl text-wax">
                        <FaFacebook />
                        <FaInstagram />
                        <FaEnvelope />
                    </div>
                </div>
            </div>
        </div>
    )
}