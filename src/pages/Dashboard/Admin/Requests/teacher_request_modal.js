import axios from "axios";
import { Modal } from "flowbite-react/lib/cjs/components/Modal";
import { useEffect, useState } from "react";
import BASE_URL from "../../../../constants";
import { useAuthHeader } from "react-auth-kit";
import ErrorToast from "../../../../components/error_toast";

export default function TeacherRequestModal(props)
{
    const [teachers, setTeachers] = useState([]);
    const authHeader = useAuthHeader()
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/users/teachers`, {headers: {Authorization: authHeader()}})
        .then((res) => {
            setTeachers(res.data.teachers?.map(teacher => { return {id: teacher.id, name: teacher.name}}))
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const teacher_id = Number(e.target.querySelector('#teacher_id').value);
        const data = {
            teacher_id,
            trial_request_id: props.trial_request_id
        }
        try{
            const res = await axios.post(`${BASE_URL}/teacher-requests/trial`, data, {headers: {Authorization: authHeader()}})
            props.handleClose(false)
        }catch(e){
            setError(true)
        }
    }

    return(
        <Modal show={true} onClose={() => props.handleClose(false)} className="imprima">
        {error && <ErrorToast error={"an Error Occured While Requesting Teacher"} handleClose={setError}/>}
        <Modal.Header className='cinzel'>Request A Teacher
        <p className="imprima text-sm">Requesting a teacher will send an email notification to the teacher</p>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="text-sm text-neutral-800">
                <label htmlFor="teacher_id">Teacher: </label>
            </div>
            <select className="rounded-md md:w-[80%]" name="teacher_id" id="teacher_id" required>
                <option value="">Select Teacher</option>
                {
                    teachers.map(teacher => {
                        return <option value={teacher.id}>{teacher.name}</option>
                    })
                }
            </select>

            <button type="submit" className=" ml-4 bg-mud text-white py-2 px-4 rounded-md">
                Request
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
      </Modal>
    )
}