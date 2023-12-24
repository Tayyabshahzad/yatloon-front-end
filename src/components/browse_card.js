import { Link } from "react-router-dom";

export default function BrowseCard({logo, title, subHeading, href })
{
    return(
        <div className="b-card rounded-lg w-[50%] shadow">
            <Link to={href} className="w-full block px-8 py-4">
                <div className="flex w-full flex-col items-center">
                    <img className="h-[80px] w-[80px]" src={logo} alt="image" />
                    <h3 className="mt-4 text-xl text-center">
                        {title}
                    </h3>
                    <p className="text-sm mt-1 text-center text-gray-500">
                        {subHeading}
                    </p>
                </div>
            </Link>
        </div>
    )
}