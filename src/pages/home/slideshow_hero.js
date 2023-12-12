import Slide1 from "../../components/hero_slides/slide_1";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

export default function HeroSlideshow(props)
{
    return (
        <Slide cssClass="h-full">
            <Slide1 />
        </Slide>
    )
}