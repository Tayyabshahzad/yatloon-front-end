import { useContext, useEffect, useState } from "react";
import { HeadingContext } from "../../layout";
import BASE_URL from "../../../constants";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import aboutbg from '../../../assets/images/about_2.jpeg'
import videoBg from '../../../assets/images/video_bg.png'
import VideoPlayer from "../../home/video_players";
import { useAuthHeader } from "react-auth-kit";
import ErrorToast from "../../../components/error_toast";
import SuccessToast from "../../../components/success_toast";

export default function TrialRequest(props)
{
    const [mainHeading, setMainHeading] = useContext(HeadingContext);
    const [courses, setCourses] = useState([]);
    const [pricing, setPricing] = useState([]);
    const [images, setImages] = useState(null);
    const authHeader = useAuthHeader()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {  
        setMainHeading('Free Trial')
        axios.get(`${BASE_URL}/courses/get`)
        .then((res) => {
            setCourses(res.data?.rows)
            setImages(res.data?.rows?.map((course) => course.course_image_url))
        })
        .catch((err) => {
            console.log(err)
        })
     }, []
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        const course_id = Number(e.target.querySelector('#course_id').value)
        const pricing_id = Number(e.target.querySelector('#pricing_id').value)
        const message = e.target.querySelector('#message').value;
        const data = {course_id, pricing_id, message}
        const url = `${BASE_URL}/trial-requests`
        try{
            console.log(data)
            const res = await axios.post(url, data, {headers: {Authorization: authHeader()}})
            setError('')
            setSuccess(true)
            e.target.querySelector('#course_id').value = ''
            e.target.querySelector('#pricing_id').value = ''
            e.target.querySelector('#message').value = ''
        } catch (e) {
            const errorMsg = e?.response?.data?.message;
            setSuccess(false)
            console.log(e)
            if(errorMsg){
                setError(errorMsg)
            }
        }
    }

    const handleChange = async (e) => {
        setPricing([])
        const course_id = e.target.value;
        const course = courses.find((course) => course.id == course_id);
        try{
             const res = await axios.get(`${BASE_URL}/courses/get/${course_id}`);
             setPricing(res.data?.pricings)
        }catch(e){
            
        }
    }

    return (
        <div>
            {
                success && <SuccessToast handleCloseClick={setSuccess} message="Trial Request Submitted Successfully" />
            }
            {
                error && <ErrorToast handleClose={setError} message={error} />
            }
            <section style={{backgroundImage: `url(${aboutbg})`}} className=" contrast md:bg-[length:100%,_100%]">
                <div className="flex max-sm:px-2 max-sm:flex-col bg-[rgba(0,_0,_0,_0.4)] justify-center gap-24 py-8">
                    <form onSubmit={handleSubmit} className="p-8 max-sm:px-2 rounded-lg flex gap-4 bg-[rgba(0,_0,_0,_0.6)] flex-col items-stretch">
                        <h1 className="text-[20px] cinzel text-royal text-center">Book Your Free Trial Appointment Today!</h1>
                        <h3 className="text-md text-white imprima mb-8">Fill the form below and as instructor will be assigned to you soon</h3>
                        <div>
                            <div className="mb-1 text-sm text-white font-bold">
                                <label htmlFor="course_id">Course: </label>
                            </div>
                            <select className="w-full rounded-md" required onChange={handleChange} name="course_id" id="course_id">
                                <option className="text-gray-500" value="">Select Course</option>
                                {courses.map((course) => {
                                    return (
                                        <option value={course.id}>{course.course_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <div className="mb-1 text-sm text-white font-bold">
                            <label htmlFor="pricing_id">Plan: </label>
                            </div>
                             <select className="w-full rounded-md" required name="pricing_id" id="pricing_id">
                                <option className="text-gray-500" value="">Select Plan</option>
                                {pricing?.map((price) => {
                                    return (
                                        <option value={price.id}>{`${price.classes_per_week} Classes/Week - $${price.price}`}</option>
                                    )
                                })}
                            </select>  
                        </div>
                        <div>
                            <div className="mb-1 text-sm text-white font-bold">
                                <label htmlFor="name">Message: </label>
                            </div>
                            <textarea className="w-full" required minLength={30} name="message" id="message" cols="45" rows="4" placeholder="E.g Your preffered timings of class"></textarea>
                        </div>

                        <button className=" mt-8 bg-mud text-white font-bold py-2 px-4 rounded-lg" type="submit">
                            Submit
                        </button>
                    </form>
                    <div>
                        <h1 className="cinzel text-[40px] text-center text-royal mb-8 uppercase">Featured<br /> Courses</h1>
                        <div className="relative sm:w-[30vw]">
                           {images &&
                             <Slide>
                                {images.map((image) => {
                                    return (
                                        <div className="w-full h-full">
                                            <img className="aspect-square w-full" src={image}/>
                                        </div>
                                    )
                                })}
                            </Slide> }
                        </div>
                    </div>
                </div>
            </section>
            <section className="cinzel relative bg-no-repeat bg-cover bg-center">   
                    <div className="px-4 backdrop-blur-md py-8 flex flex-col items-center">
                        <div className="flex max-sm:flex-col items-center justify-center gap-24">
                            <div className="text-gray-500 shadow min-h-[500px] bg-white p-8 ">
                                <h2 className="uppercase text-mud text-center text-2xl">Course Features</h2>
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
            <section style={{backgroundImage: `url(${videoBg})`}} className="contrast  bg-[length:100%_100%] p-24 max-sm:p-16 flex justify-center items-center flex-col text-white">
                        <div className="flex flex-col items-center mt-8">
                        <h2 className={`cinzel text-[30px] font-[700] mb-[10px]`}>Our Video Introduction</h2>
                        <p className="text-sm"><span className="font-bold">YATLOON QURAN ACADEMY</span> is committed to teach non-Arabic students from the basic level to advance.</p>
                    </div>
                        <div className="sm:mt-24 mt-8 w-[50vw] max-sm:w-[80vw] aspect-video">
                        <VideoPlayer />
                </div>
            </section>
        </div>
    )
}