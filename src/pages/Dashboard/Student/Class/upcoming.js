import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import BASE_URL from "../../../../constants";
import ErrorToast from "../../../../components/error_toast";
import { Link } from "react-router-dom";

export default function StudentUpcomingClasses(props)
{
    const [classes, setClasses] = useState([]);
    const authHeader = useAuthHeader();
    const [error, setError] = useState(null);

    const fetchClasses = async () => {
        axios.get(`${BASE_URL}/meetings/upcoming`, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setClasses(res.data.meetings)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
       fetchClasses()
    }, [])

    return(
        <div className="px-4 py-8 w-full bg-white">
           
            {error && <ErrorToast error={error} handleClose={setError}/>}
            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">Classes This Week</h1>
                <div className="grid grid-cols-7 w-full text-mud font-bold cinzel">
                    <p >Course Name</p>
                    <p>Teacher Name</p>
                    <p>Start Date</p>
                    <p>Start Time</p>
                    <p>Type</p>
                    <p>Attendance</p>
                    <p className="text-center">Actions</p>
                </div>

                {
                    classes.map((class_) => {
                        return (
                            <div className="imprima grid grid-cols-7 items-center text-[14px] w-full text-neutral-800 shadow my-2 py-4 rounded-lg px-2">
                                <p>{class_.course.course_name}</p>
                                <p>{class_.teacher.name}</p>
                                <p>{class_.start_date?.split('T')[0]}</p>
                                <p>{class_.start_time.slice(0, 5)}</p>
                                <p>{class_.type}</p>
                                <div>{class_.attended === null ? 'N/A' : class_.attended? <p className="text-green-500 font-bold">Attended</p> : <p className="text-red-500 font-bold">Absent</p> } </div>
                                <div className="flex flex-col items-center gap-2">
                                   {
                                    class_.started_at && !class_.ended_at ? <button className="disabled:bg-gray-500 w-[80%]  rounded-md bg-mud text-white" ><Link target="_blank" className="px-2 py-1 block" to={`/meeting/${class_.id}`}>Join Class</Link></button> :
                                    class_.ended_at ? <p className="text-center">Class Ended</p> : <p className="text-center">Yet to Start</p>
                                   }
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}