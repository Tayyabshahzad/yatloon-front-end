import RatingCard from "../../components/rating_card";
import { Slide } from "react-slideshow-image";

export default function Testimonials({
    name, platform, content
})
{
    const testContent = [
        {
            name: "User",
            platform: "Facebook",
            content: "Since almost two years ago, brother Adel has been teaching me. He is a very understanding and patient tutor, and I believe that working with him has really improved my recitation. He uses a variety of effective teaching strategies."
        }
    ]
    return (
        <Slide indicators={true} prevArrow={<></>} nextArrow={<></>}>
            {testContent.map((rating, index) => 
                    <RatingCard key={index} content={rating.content} name={rating.name} platform={rating.platform} />
                )}      
        </Slide>
    )
}

