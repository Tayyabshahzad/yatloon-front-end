import { TextInput } from "flowbite-react/lib/cjs/components/TextInput";
import { Textarea } from "flowbite-react/lib/cjs/components/Textarea";
import { useContext, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { HeadingContext } from "../../layout";

export default function Contact(props)
{
    const [mainHeading, setMainHeading ]= useContext(HeadingContext)

    useEffect(() => {
        setMainHeading('Contact Us')
    })

    return (
        <div className="bg-gray-100">
                <section className="relative max-sm:h-[700px] h-[300px]">
                    <div className="flex justify-center max-sm:items-center max-sm:flex-col gap-8 absolute top-[-80px] w-full">
                        <div className="bg-white w-[33%] max-sm:w-[80%] p-12 flex flex-col items-center">
                            <div className="bg-black mb-6 rounded-full p-2"><IoCall size={30} color="white"/></div>
                                <h2 className={`cinzel text-[20px] upppercase text-gray-600`}>Talk to Sales</h2>
                                <p className="text-sm text-gray-600">Interested in our Courses ? Just pick up the phone and call us.</p>
                                <button className="mt-8 bg-royal text-white px-4 py-2 rounded-md"><a href="#">Call Now</a></button>
                        </div>
                        <div className="bg-white w-[33%] max-sm:w-[80%] p-12 flex flex-col items-center">
                            <div className="bg-black mb-6 rounded-full p-2"><LuMessagesSquare size={30} color="white"/></div>
                                <h2 className={`cinzel text-[20px] upppercase text-gray-600`}>Contact support</h2>
                                <p className="text-sm text-gray-600">Sometimes you need a little help. Don’t worry, We’re here for you.</p>
                                <button className="mt-8 bg-royal text-white px-4 py-2 rounded-md"><a href="#">Contact Support</a></button>
                        </div>
                    </div>
            </section>
            <section className="p-16 max-sm:px-8 flex justify-center">
                <div className="w-[80%] max-sm:w-[95%] bg-white px-16 max-sm:px-1 py-8">
                    <h2 className={`cinzel mb-6 text-center text-[20px] upppercase text-gray-600`}>Ask a Question</h2>
                    <form className="flex flex-col gap-4">
                        <TextInput style={{borderRadius: "40px"}} placeholder="Your Name (Required)" required/>
                        <TextInput style={{borderRadius: "40px"}} type="email" placeholder="Your Email (Required)" required/>
                        <Textarea rows={5} placeholder="Your Message (Required)" required/>
                        <button className="bg-teal-800 rounded-md font-bold px-4 py-2 w-fit text-white" type="submit" >Submit</button>
                    </form>
                    <p className="text-gray-600 max-sm:text-xs text-center mt-8"><span className="font-bold">Yatloon Quran</span> is an online institute provides Arabic and Quran lessons for you and your children </p>
                </div>
            </section>
        </div>
    )
}