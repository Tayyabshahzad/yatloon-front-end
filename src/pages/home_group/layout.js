import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Outlet, useLocation } from "react-router-dom";
import homeGroupBg from '../../assets/images/home_group_strip.png'


export default function HomeLayout({children})
{
    const currentPath = useLocation()

    const paths = {
        "about-us": "About Us",
        "contact": "Contact Us"
    }

    return (
        <div>
            <div style={{backgroundImage: `url(${homeGroupBg})`}} className={`contrast text-white  flex justify-center items-center`}>
                <div className="w-full py-36 flex flex-col justify-center items-center bg-[rgba(0,_0,_0,_0.3)]">
                    <div>
                        <h1 className={`cinzel uppercase max-sm:text-[20px] text-[30px] font-bold`}>{paths[currentPath.pathname.split('/')[1]]}</h1>
                    </div>
                    <p className="max-sm:text-sm text-center">Quran learning online, Tajweed, Arabic online, Islamic Studies</p>
                    <div className="flex mt-6 gap-2">
                            <div className="rounded-full border-white border p-1">
                                <FaFacebookF size={18} color="white"/>
                            </div>
                            <div className="rounded-full border-white border p-1">
                                <FaInstagram size={18} color="white"/>
                            </div>
                            <div className="rounded-full border-white border p-1">
                                <FaTwitter size={18} color="white"/>
                            </div>
                            <div className="rounded-full border-white border p-1">
                                <MdEmail size={18} color="white"/>
                            </div>
                        </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}