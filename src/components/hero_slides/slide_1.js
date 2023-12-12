import { Link } from "react-router-dom"
import slide1 from "../../assets/images/slide_1.jpeg"

export default function Slide1(props)
{
    return (
        <div style={{backgroundImage: `url(${slide1})`}} className={`p-3 contrast flex h-[50vw] text-white bg-cover`}>
            <div className="grow-[2] gap-[5vw] justify-center flex p-16 flex-col h-full">
                <div>
                <h1 className="mb-2 uppercase text-[7vw] leading-none">Learn Quran Online</h1>
                <p className="text-[2vw]">Online Quran Teach at affordable rates available for everyone around the world</p>
                </div>
                <div>
                    <button className="bg-royal px-3 p-2 md:px-9 md:py-5 rounded-full">
                        <Link to={"#"}>About Us</Link>
                    </button>
                </div>
            </div>
            <div className="grow-1 basis-1/3">

            </div>
        </div>
    )
}