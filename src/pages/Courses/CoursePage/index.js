import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../../constants";
import axios from "axios";
import { HeadingContext } from "../../layout";
import PricingCard from "../../../components/pricing_card";
import pricingBg from '../../../assets/images/pricing_bg.jpeg' 
import config from '../../../constants';
import DOMPurify from 'dompurify';
export default function CoursePage() {

    const { courseId} = useParams();
    const navigate = useNavigate();
    const [course, setCourse]   = useState({});
    const [mainHeading, setMainHeading] = useContext(HeadingContext)

    useEffect(() => {
        axios.get(`${config.REACT_APP_API_BASE_URL}courses/${courseId}`)
        .then((res) => {
           
            setCourse(res.data)
            setMainHeading(res.data.title)
        })
        .catch((err) => {
            console.log("Error ", err); 
        })
    }, [])
    const sanitizedDescription = DOMPurify.sanitize(course.description);
    return (
        <div>
            <section className="cinzel relative bg-no-repeat bg-cover bg-center" 
           style={{backgroundImage: `url(${config.REACT_APP_ASSET_URL}storage/${course.file})`}}>   
                    <div className="px-4 backdrop-blur-md py-8 flex flex-col items-center">
                        <h1 className="text-[25px] mb-16  w-fit p-2 border border-teal-900"> {course.title} </h1>
                        <div className="flex max-sm:flex-col items-center justify-center gap-24">
                            <div>
                                <img className="max-h-[500px]" src={course.course_image_url ? course.course_image_url : ""} />
                            </div>
                            <div className="text-white min-h-[500px] bg-[rgba(0,_0,_0,_0.5)] p-8 ">
                                <h2 className="uppercase text-royal text-center text-xl">Course Features</h2>
                                <div className="flex flex-col p-8 gap-4">
                                    <div className="flex items-center gap-4">
                                        <img className="h-16 w-16" src="https://ejazulquran.com/wp-content/uploads/2022/12/call-center-agent-400x400.png"/>
                                        <h2>One To One Live Sessions</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img className="h-16 w-16" src="https://ejazulquran.com/wp-content/uploads/2022/12/free-400x400.png"/>
                                        <h2>Free Trial Classes</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img className="h-16 w-16" src="https://ejazulquran.com/wp-content/uploads/2022/12/24-hours-400x400.png"/>
                                        <h2>Classes Around The Clock</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img className="h-16 w-16" src="https://ejazulquran.com/wp-content/uploads/2022/12/certificate-400x400.png"/>
                                        <h2>Completion Certificates</h2>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img className="h-16 w-16" src="https://ejazulquran.com/wp-content/uploads/2022/12/elearning-400x400.png"/>
                                        <h2>Male And Female Tutors</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="p-16 bg-white flex max-md:flex-col justify-center gap-24">
                <div className="p-6 shadow sm:w-[40%]">
                    <h2 className="cinzel uppercase text-[25px] text-gray-700">Course Details</h2>
                    <div className="flex rounded-lg">
                        <div className="mt-8">
                        <p className="text-gray-500 " dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>

                        </div>
                    </div>
                </div>
                <div className="shadow sm:w-[40%] p-6">
                    <h2 className="cinzel uppercase text-gray-700 text-[25px]">Course Outline</h2>
                    <div className="flex rounded-lg">
                        <div className="mt-8 ml-3">
                            <ul className=" flex flex-col gap-2">
                                {
                                     course.terms?.map((term, index) => {
                                        return (
                                            <li key={index} className="list-disc text-gray-500">
                                                <h3 className="font-bold text-lg">{term.title}</h3>
                                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: term.description }} />
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage: `url(${pricingBg})`}} className=" contrast">
                <div className="bg-[rgba(0,_0,_0,_0.5)] p-8">
                    <h2 className="cinzel uppercase text-white text-center font-bold text-[30px] mb-8">Pricing</h2>
                    <div className="max-sm:flex-col flex justify-center gap-16">
                        {
                            course.pricings?.map((pricing, index) => {
                                return <PricingCard key={index} course_duration={course.course_duration} {...pricing} />
                        })
                    }   
                    </div>
                </div>
            </section>
        </div>
    );
}