import { useAuthUser } from "react-auth-kit"
import dashboardBg from "../../../assets/images/hero2.jpg"
import BrowseCard from "../../../components/browse_card"
import { Link } from "react-router-dom"
import quranBg from "../../../assets/images/quran.jpg"
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"

export default function AdminDashboard(props)
{

    const auth = useAuthUser()
    console.log(auth())

    const sections = [
        {
            href: "#",
            title: "Classes",
            subHeading: "Find Your Classes",
            logo: "https://cdn.iconscout.com/icon/free/png-256/free-online-class-3134963-2613036.png"
        },
        {
            href: "#",
            title: "Requests",
            subHeading: "View Your Class/Trial Requests",
            logo: "https://cdn-icons-png.flaticon.com/128/1436/1436706.png"
        },
        {
            href: "#",
            title: "Instructors",
            subHeading: "View Your Instructors",
            logo: "https://cdn-icons-png.flaticon.com/128/1995/1995413.png"
        }
    ]

    return (
        <div className="w-full p-4 ">
            <section className="rounded-lg contrast text-white bg-cover overflow-hidden" style={{backgroundImage: `url(${dashboardBg})`}}>
                <div className="bg-[rgba(0,_0,_0,_0.4)] p-8 ">
                    <p className="text-sm">{Date()}</p>
                    <div className="mt-12 ml-4">
                        <h2 className="cinzel uppercase tracking-wide text-[22px]">Welcome Back, {auth().name}!</h2>
                        <p className="text-sm">Browse through the courses or resume Learning</p>
                    </div>
                </div>
            </section>
        {/*
            <div className="flex mt-4 mb-4 justify-around">
                <div className="w-[60%]">
                    <section className="w-full">
                        <h2 className="cinzel text-mud mb-4">Browse</h2>
                        <div className="flex gap-6 w-full">
                            {
                                sections.map((section, index) => {
                                    return (
                                        <BrowseCard key={index} {...section} />
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className="w-full mt-4">
                        <div className="flex justify-between">
                            <h2 className="cinzel mb-4 text-mud">Enrolled Courses</h2>
                            <Link>See All</Link>
                        </div>
                    
                        <div className=" grid grid-cols-2 gap-8">
                            <div className="flex shadow justify-between rounded-md overflow-hidden">
                                <div className="p-4">
                                    <h3 className="cinzel">Noorani Qaida</h3>
                                    <button className="mt-4 bg-mud text-white  rounded-md">
                                        <Link className="py-2 block px-6">View</Link>
                                    </button>
                                </div>
                                <img className="h-[150px] w-[50%]" src="http://146.190.150.1:3000/public/images/course_1.jpg" />
                            </div>
                            <div className="flex shadow justify-between rounded-md overflow-hidden">
                                <div className="p-4">
                                    <h3 className="cinzel">Noorani Qaida</h3>
                                    <button className="mt-4 bg-mud text-white  rounded-md">
                                        <Link className="py-2 block px-6">View</Link>
                                    </button>
                                </div>
                                <img className="h-[150px] w-[50%]" src="http://146.190.150.1:3000/public/images/course_1.jpg" />
                            </div>
                        </div>   
                    </section>
                </div>
                <div className="grid grid-rows-2 grid-cols-1 w-[30%] ">
                    <section className="contrast bg-cover rounded-lg overflow-hidden" style={{backgroundImage: `url(${quranBg})`}}>
                        <div className="h-full w-full bg-[rgba(0,_0,_0,_0.6)] backdrop-blur-sm flex flex-col items-center p-2">
                            <h3 className="cinzel text-[22px] mt-1 text-white uppercase ">The Holy Quran</h3>
                            <img className="mt-3 h-20 w-20" src="https://cdn-icons-png.flaticon.com/256/9957/9957795.png" />
                            <button className="mt-4 text-white font-bold rounded-md bg-royal"><Link className="block py-2 px-6" to={'#'}>Read</Link></button>
                        </div>   
                    </section>
                    <section className="shadow rounded-lg mt-4">
                        <h2 className="cinzel text-mud text-center my-4">Attendance</h2>
                            <div className="flex h-full justify-around">
                                <div className="h-[full] mx-auto relative w-[40%] items-center justify-center">
                                <CircularProgressbarWithChildren value={66}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        // rotation: 0.25,
                                    
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        // strokeLinecap: 'butt',
                                    
                                        // Text size
                                        textSize: '16px',
                                    
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 0.5,
                                    
                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',
                                    
                                        // Colors
                                        pathColor: `rgb(37, 101, 92)`,
                                        textColor: 'green',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                      })} >
                                         <p className="text-mud">Weekly</p>
                                         <p className="text-mud font-bold cinzel">66%</p>
                                        </CircularProgressbarWithChildren>
                                </div>
                                <div className="h-full w-[40%] mx-auto relative items-center justify-center">
                                <CircularProgressbarWithChildren value={80}
                                    styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        // rotation: 0.25,
                                    
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        // strokeLinecap: 'butt',
                                    
                                        // Text size
                                        textSize: '16px',
                                    
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 0.5,
                                    
                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',
                                    
                                        // Colors
                                        pathColor: `rgb(37, 101, 92)`,
                                        textColor: 'green',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                      })} >
                                         <p className="text-mud">Monthly</p>
                                         <p className="text-mud font-bold cinzel">80%</p>
                                        </CircularProgressbarWithChildren>
                                </div>
                            </div>
                    </section>
                </div>
                                    
            </div> */}
        </div>
    )
}