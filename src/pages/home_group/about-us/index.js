import OfferCard from "./offer_card"
import about1Bg from "../../../assets/images/about_1.jpeg"
import about2Bg from "../../../assets/images/Aims&ObjectivesBanner-01.jpg"
import about3Bg from "../../../assets/images/whychooseUsBanner-01.jpg"
import { HeadingContext } from "../../layout"
import { useContext, useEffect } from "react"

export default function AboutUs(props)
{
    const [mainHeading, setMainHeading] = useContext(HeadingContext)

    useEffect(() => {
        setMainHeading('About Us')
    
    })

    const cardContents = [
        {
          src: "https://ejazulquran.com/wp-content/uploads/2022/12/24-hours-400x400.png",
          title: "Flexible timings & days",
          content: "Choose Which day suits you the best"
        },
        {
          src: "https://ejazulquran.com/wp-content/uploads/2022/12/free-280x280.png",
          title: "Free Trial Classes",
          content: "Get Free trial classes for any course"
        },
        {
          src: "https://ejazulquran.com/wp-content/uploads/2022/12/certificate-300x300.png",
          title: "Experienced and certified mentors",
          content: "Handpicked mentors that are qualified"
        },
        {
            src: "https://ejazulquran.com/wp-content/uploads/2023/01/anniversary.png",
            title: "Flexible timings & days",
            content: "Choose Which day suits you the best"
          },
          {
            src: "https://ejazulquran.com/wp-content/uploads/2023/01/videoconference-280x280.png",
            title: "Free Trial Classes",
            content: "Get Free trial classes for any course"
          },
          {
            src: "https://ejazulquran.com/wp-content/uploads/2022/12/certificate-300x300.png",
            title: "Experienced and certified mentors",
            content: "Handpicked mentors that are qualified"
          }
      ]

    return (
        <div className="bg-gray-300">
            <section style={{backgroundImage: `url(${about1Bg})`}} className="opacity-98 contrast bg-no-repeat bg-[length:100%_100%] text-white  ">
                <div className="bg-[rgba(0,_0,_0,_0.3)] max-sm:px-8 max-sm:py-16 px-16 py-48 flex">
                    <div className="max-md:max-w-[90%] max-w-[40%]">
                        <h2 className={`cinzel max-sm:text-[18px] text-[30px] mb-8`}>Who Are We?</h2>
                        <p className="max-sm:text-sm">
                            Dedicated to the effective teaching and dissemination of the Quran and Sunnah, 
                            <span className="font-bold">YATLOON QURAN ACADEMY</span> is a registered organization in Pakistan under SECP & FBR, 
                            led by experienced Islamic Scholars. Our platform connects students and teachers globally, 
                            fostering the enlightenment of hearts with the Noor of Islam.
                        </p>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage: `url(${about2Bg})`,height:'600px'}} className="flex bg-no-repeat bg-[length:100%_100%] text-white ">
            
            </section>
            <section style={{backgroundImage: `url(${about3Bg})`, backgroundSize: 'cover',height:'600px'}} className="contrast bg-no-repeat bg-[length:100%_100%] text-white ">
               
            </section>
            <section className="md:px-16 pb-8 flex flex-col justify-center items-center bg-slate-200">
                <h2 className={`cinzel text-teal-900 p-4 my-16 uppercase border-b border-teal-500 text-[30px]`}>Our  Features</h2>
                <div className="contrast mb-8 md:max-w-[80%] flex max-md:flex-col md:grid grid-cols-3 grid-rows-2 gap-8 px-4 py-6">
                    {
                    cardContents.map((card, index) => {
                        return <OfferCard key={index} src={card.src} title={card.title} content={card.content} />
                    })
                    }
                </div>
            </section>
        </div>
    )
}