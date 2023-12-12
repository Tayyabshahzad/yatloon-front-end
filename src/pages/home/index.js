
import OfferCard from "../../components/offer_cards";
import HeroSlideshow from "./slideshow_hero";
import CourseCard from "../../components/course_card";
import Testimonials from "./tetimonials";
import VideoPlayer from "./video_players";
import Animation from "./animation";
import offersBg from "../../assets/images/offers.jpeg";
import testimonialsBg from "../../assets/images/testimonials.png"
import aboutUsBg from "../../assets/images/about_us_1.jpeg"
import videoBg from "../../assets/images/video_bg.png";
import pointsBg from "../../assets/images/points_bg.jpeg";
import certBg from "../../assets/images/cert_frame.jpeg";



export default function HomePage(props)
{

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
  }
]

const courseContents = [
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Noorani Qaida",
    content: "This course is designed for beginners to start their journey from the base.",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Hifz-ul-Quran",
    content: "Hifz-ul-Quran course for those brothers and sisters who are willing to memories quran with dedication and interest.",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Recitation",
    content: "You'll get to learn how to recite the Quran fluently with proper tajweed pronunciation",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Tajweed-ul-Quran",
    content: "This Tajweed-ul-Quran course will boost your beautiful (Tilawah) recitation and to recite",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Islamic Studies",
    content: "Islamic studies is a course that compiles the majors of our religion that are essentials in our daily life.",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Arabic Course",
    content: "rabic course in which our specialized tutors would educate you regarding Arabic language/language of Quran",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Quran with translation",
    content: "The Quran translation course is designed for the students who want to learn word by word translation of the Quran",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Tafseer ul Quran",
    content: "Qualified and expert Islamic scholars who would help you understand what Allah Almighty has said",
    href: "#"
  },
  {
    src: "https://ejazulquran.com/wp-content/uploads/2022/12/Post-1-800x800.jpg",
    title: "Islamic Studies",
    content: "Students from respective class/level would ask out a teacher for themselves from our platform",
    href: "#"
  }
]




  return(
    <div className={` min-h-full`}>
      <section className="">
        <HeroSlideshow />
      </section>
      <section>
        <div style={{backgroundImage: `url(${offersBg})`}} className="contrast max-sm:flex-col  gap-8  bg-center bg-cover flex justify-center px-4 py-6">
            {
              cardContents.map((card, index) => {
                return <OfferCard key={index} src={card.src} title={card.title} content={card.content} />
              })
            }
        </div>
      </section>
      <section className="flex flex-col items-center p-1">
        <h2 className={`cinzel font-[700] text-gray-800 text-[32px] my-5`}>Featured Courses</h2>
        <div className="sm:grid grid-rows-3 grid-cols-[repeat(3,_minmax(0,_300px))]">
            {courseContents.map((course, index) => <CourseCard key={index} {...course}/>)}
        </div>
      </section>
      <section style={{backgroundImage: `url(${testimonialsBg})`}} className=" p-8 bg-cover bg-center w-full sm:grid grid-cols-[40%_1fr]">
        <div className="w-full my-[100px]">
          <h2 className={`cinzel text-royal text-[30px] font-[700] mb-[30px]`}>Our Testimonials</h2>
          <Testimonials />
        </div>
        <div className="max-sm:hidden">
        </div>
      </section>
      <section style={{backgroundImage: `url(${aboutUsBg})`}} className="contrast p-16 bg-contain flex flex-col items-center gap-16 md:grid grid-cols-[3fr_2fr]">
        <div className=" flex items-center md:ml-[50px]">
            <div className="p-2 bg-white w-fit overflow-hidden rounded-full border-8 border-sky-600">
            <img src="/logo.png" className="sm:h-[400px] h-[200px]" />
            </div>
        </div>
        <div className="bg-[rgba(0,_0,_0,_0.5)] p-8 rounded-lg">
          <h2 className={`cinzel text-royal text-[30px] font-[700] mb-[30px]`}>About Us</h2>
          <p className="text-white text-sm">
            YATLOON QURAN ACADEMY platform is established with the thought of teachings,
           learning & spreading of Quran and Sunnah effectively as they were revealed. 
           We are working under the supervision of a well-known and qualified
           teacher having long experience of teaching the Quran and Arabic language.<br />
           <br />
           YATLOON QURAN ACADEMY is a registered organization in Pakistan from SECP & 
           FBR under the supervision of Islamic Scholars. We basically provide a platform 
           to link students and teachers around the globe to enlighten every heart with the 
           Noor of our beautiful 
           Deen e Islam and make our brothers and sisters especially children’s a practicing Muslim. 
           <br />
           <br />
           Due to its commitment to Students and its persistent attempts to enhance it over time, 
           the Yatloon Quran has steadily soared to new heights in a relatively short period of time. 
           We want to include as many students as we can in the charitable deed of Hifz al Quran.
          </p>
        </div>
      </section>
      <section style={{backgroundImage: `url(${videoBg})`}} className="contrast  bg-[length:100%_100%] p-24 max-sm:p-16 flex justify-center items-center flex-col text-white">
        <div className="flex flex-col items-center mt-8">
          <h2 className={`cinzel text-[30px] font-[700] mb-[10px]`}>Our Video Introduction</h2>
          <p className="text-sm"><span className="font-bold">YATLOON QURAN ACADEMY</span> is committed to teach non-Arabic students from the basic level to advance.</p>
        </div>
        <div className="sm:mt-24 mt-8 w-[50vw] max-sm:w-[80vw] aspect-video">
          <VideoPlayer />
        </div>
      </section>
      <section className="bg-gradient-to-r from-amber-200 to-teal-600 pt-16 opacity-90">
        <h2 className={`cinzel text-white text-center text-[30px] font-[700] mb-[30px]`}>Our Values</h2>
        <div className="flex flex-col gap-8 md:grid grid-cols-3 gap-6 p-16 max-md:px-6">
          <div style={{backgroundImage: `url(${pointsBg})`}} className="border-royal border-4 rounded-2xl bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                About Us
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Established For Spreading Quran</li>
                <li>Supervised By Qualified Teachers</li>
                <li>Redistered Organization in Pakistan</li>
                <li>Connects students and teachers globally</li>
              </ul>
            </div>
          </div>
          <div style={{backgroundImage: `url(${pointsBg})`}} className="border-royal border-4 rounded-2xl  bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                Mission And Vision
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Rooted by well-qualified Islamic Scholars</li>
                <li>Aim to attain blessings and reward from Allah Almighty</li>
                <li>Teach Quran, Arabic Language, and Sunnah</li>
                <li>Focus on Muslims in non-Muslim countries</li>
              </ul>
            </div>
          </div>
          <div style={{backgroundImage: `url(${pointsBg})`}} className="border-royal border-4 rounded-2xl  bg-[length:100%_100%] w-full min-h-[500px] flex items-center justify-center">
            <div className="flex flex-col items-center mt-4">
              <h4 className={`cinzel w-[50%] text-center text-gray-900 text-xl`}>
                Aims And Objectives
              </h4>
              <ul className="text-xs text-center w-[80%] font-bold border-royal  p-4 items-center text-gray-900 mt-16 mb-[-150px] flex flex-col gap-4 ">
                <li>Develop love for Allah and His words</li>
                <li>Lock Quran in the hearts of Muslims</li>
                <li>Sadaqah Jariyah for learning Quran</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url(${certBg})`}}  className="p-24 max-sm:p-6 flex justify-center items-center  bg-[length:100%_100%]">
        <img className="aspect-video w-[2505rem] basis-1 shrink-0" src="https://ejazulquran.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-02-at-5.58.27-PM-1124x800.jpeg" />
      </section>
      <section className="relative h-[500px]">
        <Animation font_cinzel="cinzel"/>
      </section>
    </div>
  )
}