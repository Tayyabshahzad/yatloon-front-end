import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthHeader } from "react-auth-kit"
import BASE_URL from "../../../../constants"
import { useNavigate } from "react-router-dom"
import DeleteCourseModal from "./delete_modal"


export default function AdminCourses(props)
{
    const authHeader = useAuthHeader()
    const [courses, setCourses] = useState([])
    const [courseId, setCourseId] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const url = `${BASE_URL}/courses/get`
        axios.get(url, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setCourses(res.data.rows)
            console.log(res.data.rows)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , [courseId])


    

   

    return(
        <div className="px-4 py-8 w-full bg-white">
           
            {courseId && <DeleteCourseModal course_id={courseId} handleClose={setCourseId}/>}
            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">All Courses</h1>
                <div className="grid grid-cols-2 w-full text-mud font-bold">
                    <p>Course Name</p>
                    <p>Actions</p>
                </div>
                { courses && 
                    courses.map((course) => {
                        return (
                            <div className="grid grid-cols-2 w-full text-neutral-800 shadow my-2 py-4 rounded-lg px-2">
                                <p>{course.course_name}</p>
                                <div>
                                    <button onClick={() => navigate(`/admin/courses/edit/${course.id}`)} className="bg-mud text-white rounded-md px-2 py-1 mr-2">View/Edit</button>
                                    <button onClick={() => setCourseId(course.id)} className="bg-red-500 text-white rounded-md px-2 py-1">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    
        </div>
    )
}

