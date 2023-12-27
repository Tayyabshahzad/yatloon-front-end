import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthHeader } from "react-auth-kit"
import BASE_URL from "../../../../constants"
import { Link } from "react-router-dom"
import AcceptModal from "./accept_modal"

export default function TeacherRequests(props)
{
    const authHeader = useAuthHeader()
    const [teacherRequests, setTeacherRequests] = useState([])
    const [requestId, setRequestId] = useState(null)


    useEffect(() => {
        const url = `${BASE_URL}/teacher-requests/my`
        axios.get(url, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setTeacherRequests(res.data.teacherRequests)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , [requestId]
    )
    

   

    return(
        <div className="px-4 py-8 w-full bg-white">
            {requestId && <AcceptModal requestId={requestId} handleClose={setRequestId}/> }
            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">My Requests</h1>
                {
                    teacherRequests.map((teacherRequest) => {
                        return (
                            <div className="text-sm w-full text-neutral-700 shadow my-2 py-4 rounded-lg px-2">
                                <div className="mb-4">
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Course: </h3>
                                        <p>{teacherRequest.trial_request.course.course_name}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Details: </h3>
                                        <Link to={'#'} className="text-blue-500">View Course Details</Link>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Student Name: </h3>
                                        <p>{teacherRequest.trial_request.user.name}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Email: </h3>
                                        <p>{teacherRequest.trial_request.user.email}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Country: </h3>
                                        <p>{teacherRequest.trial_request.user.country}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Profile: </h3>
                                        <Link to={'#'} className="text-blue-500">View Student Profile</Link>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Requested on: </h3>
                                        <p>{teacherRequest.trial_request.created_date_time}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Requested type: </h3>
                                        <p>{teacherRequest.type}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h3 className="font-bold">Message: </h3>
                                        <p>{teacherRequest.trial_request.message}</p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button onClick={() => setRequestId(teacherRequest.id)} className="bg-green-500 text-white px-4 py-2 rounded-md">Accept</button>
                                    <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
                                </div>
                            </div>
                        )
                    })
                }
    
            </div>
        </div>
    )
}
