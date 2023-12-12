import { FaStar } from "react-icons/fa";
import testBg from '../assets/images/test_bg.jpg'

export default function RatingCard({
    name, platform, content
}){
    return (
        <div style={{backgroundImage: testBg}} className="p-8 min-h-[300px] bg-cover text-white bg-no-repeat">
            <div className="h-[50px] mx-auto w-[50px] rounded-full overflow-hidden">
                <img src="https://ejazulquran.com/wp-content/uploads/2022/12/11-150x150-1.jpg" />
            </div>
            <div className="flex flex-col mt-3">
                <div className="flex mb-2">
                        {[1,2,3,4,5].map(star => <FaStar key={star} color="yellow" />)}
                </div>
                <div className="italic text-[12px]">
                    {content}
                </div>
                <div className="mt-4 text-[8px] flex justify-end">
                    <span className="font-bold">{name}</span><span>/</span><span>{platform}</span>
                </div>
            </div>
        </div>
    )
}