import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(props)
{
    return (
        <footer className="bg-slate-300 flex justify-center p-8">
            <div className="sm:grid flex flex-col gap-16 grid-cols-3 gap-8 max-w-[80%]">
                <div className="">
                    <h3 className="w-fit font-bold uppercase">About Us</h3>
                    <div className="mb-6 text-sm mt-2 w-[50px] border-y-2 border-black"></div>
                    <p>
                        <span className="font-bold">YATLOON QURAN ACADEMY</span> platform is established with the thought of teachings, 
                        learning & spreading of Quran and Sunnah effectively as they were revealed.
                    </p>
                    <div className="flex mt-6 gap-2">
                        <div className="rounded-full border-black border-2 p-1">
                            <FaFacebookF size={22}/>
                        </div>
                        <div className="rounded-full border-black border-2 p-1">
                            <FaInstagram size={22}/>
                        </div>
                        <div className="rounded-full border-black border-2 p-1">
                            <FaTwitter size={22}/>
                        </div>
                        <div className="rounded-full border-black border-2 p-1">
                            <MdEmail size={22}/>
                        </div>
                        <div className="rounded-full border-black border-2 p-1">
                            <FaPinterest size={22}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="uppercase font-bold">Important Links</h3>
                    <div className="mb-6 text-sm mt-2 w-[50px] border-y-2 border-black"></div>
                    <ul className="flex flex-col gap-2">
                        <li className="w-[80%] border-b border-gray-600 py-1"><Link to="#">Register</Link></li>
                        <li className="w-[80%] border-b border-gray-600 py-1"><Link to="#">Courses</Link></li>
                        <li className="w-[80%] border-b border-gray-600 py-1"><Link to="#">About Us</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="uppercase font-bold">Contact</h3>
                    <div className="mb-6 text-sm mt-2 w-[50px] border-y-2 border-black"></div>
                    <ul className="mt-8 flex flex-col gap-4">
                        <li>Contact: +9211111111</li>
                        <li>Email: Info@YatloonQuran.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}