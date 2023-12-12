import { Link } from "react-router-dom"

export default function CourseCard({
    src, title, content, href
})
{

    const handleMouseEnter = (e) => {

        const raise = e.currentTarget.querySelector('.raise-box')
        const zoom = e.currentTarget.querySelector('.zoom-box')
        if(raise && zoom){
           raise.classList.add('raise')
           zoom.classList.add('zoom')
        }
    }

    const handleMouseLeave = (e) => {
        const raise = e.currentTarget.querySelector('.raise-box')
        const zoom = e.currentTarget.querySelector('.zoom-box')
        if(raise && zoom){
           raise.classList.remove('raise')
           zoom.classList.remove('zoom')
        }
    }

    return (
        <div className="flex relative flex-col m-4 gap-2 shadow-md" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
           <div className="overflow-hidden">
                <img className="zoom-box w-full aspect-square" src={src} />
            </div> 
            <div className="flex raise-box bg-white flex-col p-2">
                <div className="flex flex-col items-center p-2 my-2">
                    <h3 className="text-lg">
                        {title}
                    </h3>
                    <p className="text-sm text-center text-gray-500">
                        {content}
                    </p>
                </div>

                <button className="bg-royal text-white self-center mb-5 px-5 py-3 rounded-full">
                    <Link to="#">Details</Link>
                </button>
            </div>
        </div>
    )
}