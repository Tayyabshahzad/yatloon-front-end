import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

export default function PricingCard({classes_per_week, price, is_best, course_duration})
{
    return (
        <div className="bg-white rounded-lg flex flex-col p-8 sm:min-w-[25%]">
            <h3 className="cinzel text-center mt-2 mb-4 uppercase text-[16px] text-gray-800">{`${classes_per_week} Days/Week`}</h3>
            <h4 className="cinzel mb-4 text-center uppercase text-mud text-[30px]">{`$${price}`}</h4>
            <p className="text-center mb-4 text-xs text-gray-400">Per Month</p>
            <div className="flex self-center flex-col gap-3 items-start">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TiTick size={26} color="rgb(37, 101, 92)"/>
                    <p>{`Free Trial Classes`}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                   <TiTick size={26} color="rgb(37, 101, 92)"/>
                    <p>{`${course_duration}mins Classes`}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TiTick size={26} color="rgb(37, 101, 92)"/>
                    <p>{`${classes_per_week * 4} Per Month`}</p>
                </div>
            </div>
            <button className="bg-mud mt-8 self-center text-white px-4 py-2 rounded-md">
                <Link to="#">Start Trial Class</Link>
            </button>
        </div>
    )
}