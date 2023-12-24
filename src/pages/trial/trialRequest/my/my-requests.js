import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthHeader } from "react-auth-kit"
import BASE_URL from "../../../../constants"
import { status } from "../../../Dashboard/Admin/Requests/trial_request"

export default function MyTrialRequests(props)
{
    const authHeader = useAuthHeader()
    const [trialRequests, setTrialRequests] = useState([])

    useEffect(() => {
        const url = `${BASE_URL}/trial-requests/my`
        axios.get(url, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setTrialRequests(res.data.trialRequests)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , []
    )

    return(
        <div className="px-4 py-8 w-full bg-white">

            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">My Trial Requests</h1>
                <div className="grid grid-cols-3 w-full text-mud font-bold">
                    <p>Course Name</p>
                    <p>Requested on</p>
                    <p>Status</p>
                </div>
                { trialRequests && 
                    trialRequests.map((trialRequest) => {
                        return (
                            <div className="grid grid-cols-3 w-full text-neutral-800 shadow my-2 py-4 rounded-lg px-2">
                                <p>{trialRequest.course?.course_name}</p>
                                <p>{trialRequest.created_date_time}</p>
                                <p>{status[trialRequest.status]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}