import { IoMdArrowBack } from "react-icons/io";
import { status } from "./trial_request";
import { useEffect, useState } from "react";
import TeacherRequestModal from "./teacher_request_modal";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";
import BASE_URL from "../../../../constants";

export default function AdminTrailRequest({ request_id , handleClose})
{
    const [isOpen , setIsOpen] = useState(false)
    const [request, setRequest] = useState({})

    const authHeader = useAuthHeader()

    useEffect(() => {
        axios.get(`${BASE_URL}/trial-requests/${request_id}`, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setRequest(res.data.trialRequest)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                {isOpen && <TeacherRequestModal trial_request_id={request.id} handleClose={setIsOpen}/>}
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">Trial Request</h1>
                <div className="p-1 rounded-full w-fit hover:cursor-pointer border border-mud" onClick={() => handleClose(null)}>
                    <IoMdArrowBack size={20} />
                </div>
                <div className="pl-8 mt-2">
                    <div className="mb-4">
                        <p className="text-mud font-bold">Course Name</p>
                        <p className="text-mud">{request.course?.course_name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-mud font-bold">Status</p>
                        <p className="text-mud">{status[request.status]}</p>
                    </div>
                    <div>
                        <p className="text-mud font-bold">User Name</p>
                        <p className="text-mud">{request.user?.name}</p>
                    </div>
                    <div>
                        <p className="text-mud font-bold">Country</p>
                        <p className="text-mud">{request.user?.country}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-mud font-bold">User Email</p>
                        <p className="text-mud">{request.user?.email}</p>
                    </div>
                    <div>
                        <p className="text-mud font-bold">Requested on:</p>
                        <p className="text-mud">{request.created_date_time}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-mud font-bold">Message</p>
                        <p className="text-mud">{request.message}</p>
                    </div>
                    <div>
                        <p className="text-mud font-bold">Plan</p>
                        <p className="text-mud">{`${request.pricing?.classes_per_week} classes per week`}</p>
                    </div>
                    <div>
                        <p className="text-mud font-bold">Price</p>
                        <p className="text-mud">{`$${request.pricing?.price}`}</p>
                    </div>

                    {
                        request.status === 'pending' &&
                        <div className="mt-4">
                            <button onClick={() => setIsOpen(true)} className="bg-mud px-4 py-2 text-white rounded-md">Request Teacher</button>
                            <button className="ml-2 rounded-md bg-red-500 px-4 py-2 text-white">Reject</button>
                        </div> 
                    }
                    {
                        request.teacher_requests &&
                        <div className="mt-4 w-full">
                            <p className="text-mud cinzel font-bold">Teachers Requested</p>
                            <div className="flex flex-wrap">
                                {
                                    request.teacher_requests.map((teacher_request) => (
                                        <div className="border rounded-md w-full p-2 text-neutral-500 m-2 grid grid-cols-3">
                                            <p className="font-bold">{teacher_request.user?.name}</p>
                                            <p className="">{teacher_request.user?.email}</p>
                                            <p className="">{status[teacher_request.status]}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
        </div>
    )
}