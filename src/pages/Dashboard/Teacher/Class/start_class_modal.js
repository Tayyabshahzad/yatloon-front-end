import axios from "axios";
import { Modal } from "flowbite-react/lib/cjs/components/Modal";
import BASE_URL from "../../../../constants";
import { useState } from "react";
import ErrorToast from "../../../../components/error_toast";
import { useAuthHeader } from "react-auth-kit";

export default function StartClassModal({class_id, handleClose})
{
    const [error , setError] = useState(false);
    const authHeader = useAuthHeader()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`${BASE_URL}/meetings/start/${class_id}`, {}, {headers: {Authorization: authHeader()}})
            handleClose(null)
        } catch (e) {
            const message = e.response?.data?.message
            message ? setError(message) : setError("An Error Occured While Starting Class")
        }
       
    }
    return (
        <Modal show={true} onClose={() => handleClose(null)} className="imprima">
        {error && <ErrorToast message={error} handleClose={setError}/>}
        <Modal.Header className='cinzel uppercase text-mud'>Start Class
        <p className="imprima text-sm">Starting The Class will send a notification to the student</p>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
               
            

            <button type="submit" className="mt-4 bg-mud text-white py-2 px-4 rounded-md">
                Start
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
            <p className="imprima font-bold">This Meeting Room Will Automatically Close After 2 Hours</p>
        </Modal.Footer>
      </Modal>
    )
}