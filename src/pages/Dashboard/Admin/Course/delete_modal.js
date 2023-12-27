import { Modal } from "flowbite-react/lib/cjs/components/Modal"
import ErrorToast from "../../../../components/error_toast"
import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";
import BASE_URL from "../../../../constants";

export default function DeleteCourseModal({course_id, handleClose}){
    const [error, setError] = useState(false);
    const authHeader = useAuthHeader();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.delete(`${BASE_URL}/courses/${course_id}`, {headers: {Authorization: authHeader()}})
            handleClose(null)
        }catch(e){
            setError(true)
        }
    }

    return (
        <Modal show={true} onClose={() => handleClose(null)} className="imprima">
        {error && <ErrorToast message={"an Error Occured While Deleting Course"} handleClose={setError}/>}
        <Modal.Header className='cinzel'><p className="cinzel">Delete Course</p></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <p className="my-3">Are so sure you want to Delete The Course?</p>
            <button type="submit" className=" ml-4 bg-red-500 text-white py-2 px-4 rounded-md">
                Delete
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
      </Modal>
    )
}