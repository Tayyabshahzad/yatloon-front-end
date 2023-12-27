import axios from "axios";
import { Modal } from "flowbite-react/lib/cjs/components/Modal";
import BASE_URL from "../../../../constants";
import { useState } from "react";
import ErrorToast from "../../../../components/error_toast";
import { useAuthHeader } from "react-auth-kit";

export default function AttendanceClassModal({class_id, handleClose})
{
    const [error , setError] = useState(false);
    const authHeader = useAuthHeader()

    const handleSubmit = async (attended) => {
        try {
            const res = await axios.patch(`${BASE_URL}/meetings/attendance/${class_id}`, {attended}, {headers: {Authorization: authHeader()}})
            handleClose(null)
        } catch (e) {
            const message = e.response?.data?.message
            message ? setError(message) : setError("An Error Occured While Starting Class")
        }
       
    }
    return (
        <Modal show={true} onClose={() => handleClose(null)} className="imprima">
        {error && <ErrorToast message={error} handleClose={setError}/>}
        <Modal.Header className='cinzel uppercase text-mud'>Mark Attendance
        <p className="imprima text-sm">Please Mark The Attendance for the Student</p>
        </Modal.Header>
        <Modal.Body>
            <button onClick={() => handleSubmit(true)} className="mr-3 mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
                Student was Present
            </button>

            <button onClick={() => handleSubmit(true)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md">
                Student was Absent
            </button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
}