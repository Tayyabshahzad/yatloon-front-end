import { Modal } from "flowbite-react/lib/cjs/components/Modal/Modal";
import ErrorToast from "../../../../components/error_toast";
import { useState } from "react";

export default function AcceptModal({requestId, handleClose})
{
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // const res = await axios.post(`${BASE_URL}/teacher-requests/trial`, data, {headers: {Authorization: authHeader()}})
            // props.handleClose(false)
        }catch(e){
            setError(true)
        }
    }

    return (
        <Modal show={true} onClose={() => handleClose(false)} className="imprima">
        {error && <ErrorToast error={"an Error Occured While Requesting Teacher"} handleClose={setError}/>}
        <Modal.Header className='cinzel uppercase text-mud'>Set Trial Schedule
        <p className="imprima text-sm">Accepting the request will send a notification to the student</p>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
                <div>
                    <div className="text-neutral-800">
                        <div>
                            <label htmlFor="date">Class 1: </label>
                        </div>
                        <div className="flex w-full">
                            <input className="w-[70%]" type="date" name="start_date" id="start_date_1" required/>
                            <input className="w-[30%]" type="time" name="start_time" id="start_time_1" required/>
                        </div>
                    </div>
                    <div className="text-neutral-800 mt-4">
                        <div>
                            <label htmlFor="date">Class 2: </label>
                        </div>
                        <div className="flex w-full">
                            <input className="w-[70%]" type="date" name="start_date" id="start_date_2" required/>
                            <input className="w-[30%]" type="time" name="start_time" id="start_time_2" required/>
                        </div>
                    </div>
                </div>
            

            <button type="submit" className="mt-4 bg-mud text-white py-2 px-4 rounded-md">
                Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
      </Modal>
    )
}