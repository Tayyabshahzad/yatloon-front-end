import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export default function HeaderStrip(props)
{
    return (
        <div className="bg-black text-white text-[13px] flex justify-between p-3  max-md:justify-center">
            <div className="max-md:hidden pl-5">
                <p>Yatloon Quran Academy</p>
            </div>
            <div className="flex gap-2 items-center pr-3">
                <div className="flex items-center">
                    <FaPhoneAlt color="white"/>
                    <span className="mx-1">+92-325-5854448</span>
                </div>
                <div className="flex  gap-1 max-md:hidden">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <MdOutlineEmail />
                </div>
            </div>
        </div>
    )
}