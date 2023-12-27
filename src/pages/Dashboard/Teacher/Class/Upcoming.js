import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../../../constants";
import { useAuthHeader } from "react-auth-kit";
import StartClassModal from "./start_class_modal";
import { Link } from "react-router-dom";
import ErrorToast from "../../../../components/error_toast";
import AttendanceClassModal from "./attendance_modal";


export default function TeacherUpcomingClasses(props)
{
    const [classes, setClasses] = useState([]);
    const [startClassId, setStartClassId] = useState(null);
    const [attendanceClassId, setAttendanceClassId] = useState(null);
    const authHeader = useAuthHeader();
    const [error, setError] = useState(null);

    const fetchClasses = async () => {
        axios.get(`${BASE_URL}/meetings/upcoming`, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setClasses(res.data.meetings)
            console.log('meetings', res.data.meetings)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
       fetchClasses()
    }, [startClassId, attendanceClassId])

    const handleEnd = async (roomId) => {
        try {
            const res = await axios.patch(`${BASE_URL}/meetings/end/${roomId}`, {}, {headers: {Authorization: authHeader()}})
            await fetchClasses()
        } catch (e) {
            setError('An Error Occured')
        }
    }

    return(
        <div className="px-4 py-8 w-full bg-white">
            {startClassId && <StartClassModal class_id={startClassId} handleClose={setStartClassId}/>}
            {attendanceClassId && <AttendanceClassModal class_id={attendanceClassId} handleClose={setAttendanceClassId}/> }
            {error && <ErrorToast error={error} handleClose={setError}/>}
            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">Classes This Week</h1>
                <div className="grid grid-cols-7 w-full text-mud font-bold cinzel">
                    <p >Course Name</p>
                    <p>Student Name</p>
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
                                <p>{class_.student.name}</p>
                                <p>{class_.start_date?.split('T')[0]}</p>
                                <p>{class_.start_time.slice(0, 5)}</p>
                                <p>{class_.type}</p>
                                <p>{class_.attended === null ? 'N/A' : class_.attended? 'Attended': 'Absent'}</p>
                                <div className="flex flex-col items-center gap-2">
                                    { !class_.started_at ?
                                        <button onClick={() => setStartClassId(class_.id)} className="disabled:bg-gray-500 w-[80%] px-2 py-1 rounded-md bg-green-500 text-white">Start Class</button> :
                                        <button onClick={() => handleEnd(class_.id)} className="disabled:bg-gray-500 w-[80%] px-2 py-1 rounded-md bg-red-500 text-white" disabled={class_.ended_at ? true : false}>End Class</button>
                                    }
                                    {
                                        class_.started_at && !class_.ended_at ? <button className="disabled:bg-gray-500 w-[80%]  rounded-md bg-mud text-white" ><Link target="_blank" className="px-2 py-1 block" to={`/meeting/${class_.id}`}>Join Class</Link></button> :
                                        <button disabled={true} className="disabled:bg-gray-500 w-[80%] px-2 py-1 rounded-md bg-mud text-white" >Join Class</button>
                                    }
                                    
                                    <button onClick={() => setAttendanceClassId(class_.id)} className="disabled:bg-gray-500 w-[80%] px-2 py-1 rounded-md bg-mud text-white" disabled={class_.started_at && class_.ended_at ? false: true}>Mark Attendance</button>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}