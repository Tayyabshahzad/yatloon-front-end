import { Link } from "react-router-dom"
import slide1 from "../../assets/images/slide_1.jpeg"
import slide2 from "../../assets/images/slide_2.jpg"
export default function Slide1(props)
{
    return (
        <div style={{backgroundImage: `url(${slide2})`}} className={`p-3 contrast flex h-[30vw] text-white bg-cover`}>
    <div className="grow-[1] gap-[5vw] justify-center flex p-10 flex-col h-full">
        <div>
        {/* <h1 className="mb-2 uppercase text-[2vw] leading-none">Discover the Beauty of Quran Online</h1>
<p className="text-[1vw]">Unlock the wisdom of the Quran with affordable online lessons accessible worldwide.</p> */}

        </div>
        <div className="mt-auto"> 
            <button className="bg-royal px-2 p-2 md:px-9 md:py-5 rounded-full">
                <Link to={"about-us"}>About Us</Link>
            </button>
        </div>
    </div>
    <div className="grow-1 basis-1/3">

    </div>
</div>

    )
}