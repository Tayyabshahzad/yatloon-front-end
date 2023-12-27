import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthHeader } from "react-auth-kit"
import BASE_URL from "../../../../constants"
import AdminTrialRequest from "./request"

export const status = {
    'approved': <div className="flex items-center">
                    
                    <div className="flex items-center text-sm inline-block px-2 py-1 border border-green-500 text-green-500 rounded-full">
                        <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                        Approved
                    </div>
                </div>,
                'accepted': <div className="flex items-center">
                    
                <div className="flex items-center text-sm inline-block px-2 py-1 border border-green-500 text-green-500 rounded-full">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    Accepted
                </div>
            </div>,
    'pending': <div className="flex items-center">
                    
                    <div className="flex items-center text-sm inline-block px-2 py-1 border border-yellow-500 text-yellow-500 rounded-full">
                        <div className="w-2 h-2 mr-2 bg-yellow-500 rounded-full"></div>
                        Pending
                    </div>
                </div>,
    'rejected': <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
                    <span className="inline-block px-2 py-1 bg-red-500 text-white rounded-full">
                    Rejected
                    </span>
                </div>,
    'teacher_requested': <div className="flex items-center">
                    
                            <div className="flex items-center text-sm inline-block px-2 py-1 border border-purple-500 text-purple-500 rounded-full">
                                <div className="w-2 h-2 mr-2 bg-purple-500 rounded-full"></div>
                                Teacher Requested
                            </div>
                        </div>
}

export default function AdminTrialRequests(props)
{
    const authHeader = useAuthHeader()
    const [trialRequests, setTrialRequests] = useState([])
    const [tRequest, setTrialRequest] = useState(null)

    useEffect(() => {
        const url = `${BASE_URL}/trial-requests/`
        axios.get(url, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setTrialRequests(res.data.trialRequests.rows)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , [tRequest])


    

   

    return(
        <div className="px-4 py-8 w-full bg-white">
            { tRequest ? <AdminTrialRequest request_id={tRequest.id} handleClose={setTrialRequest}/> :

            (<div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">Trial Requests</h1>
                <div className="grid grid-cols-5 w-full text-mud font-bold">
                    <p>Course Name</p>
                    <p>Request By</p>
                    <p>Requested on</p>
                    <p>Status</p>
                    <p>Actions</p>
                </div>
                { trialRequests && 
                    trialRequests.map((trialRequest) => {
                        return (
                            <div className="grid grid-cols-5 w-full text-neutral-800 shadow my-2 py-4 rounded-lg px-2">
                                <p>{trialRequest.course?.course_name}</p>
                                <p>{trialRequest.user?.name}</p>
                                <p>{trialRequest.created_date_time}</p>
                                <p>{status[trialRequest.status]}</p>
                                <div>
                                    <button onClick={() => setTrialRequest(trialRequest)} className="bg-mud text-white rounded-md px-2 py-1 mr-2">View</button>
                                    <button className="bg-red-500 text-white rounded-md px-2 py-1">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>)
    }
        </div>
    )
}

