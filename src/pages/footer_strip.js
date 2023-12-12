import { FaRegCopyright } from "react-icons/fa";

export default function FooterStrip(props)
{
    return(
        <div className="bg-black text-white flex items-center gap-4 justify-center p-2">
            <FaRegCopyright color="white"/>
            <span className="text-sm">Yatloon Quran Academy 2023</span>
        </div>
    )
}