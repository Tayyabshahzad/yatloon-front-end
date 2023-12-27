import { Modal } from "flowbite-react/lib/cjs/components/Modal/Modal";
import ErrorToast from "../../../../components/error_toast";
import { useState } from "react";
import { Datepicker } from "flowbite-react/lib/cjs/components/Datepicker/Datepicker";
import { TimePicker } from 'react-ios-time-picker';
import axios from "axios";
import BASE_URL from "../../../../constants";
import { useAuthHeader } from "react-auth-kit";



export default function AcceptModal({requestId, handleClose})
{
    const [error, setError] = useState(false);
    const [time1, setTime1] = useState('12:00');
    const [time2, setTime2] = useState('12:00');
    const authHeader = useAuthHeader()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const date1 = e.target.querySelector('#date1').value;
            const date2 = e.target.querySelector('#date2').value;
            const meetings = [
                {
                    start_date: date1,
                    start_time: time1,
                }, 
                {
                    start_date: date2,
                    start_time: time2,
                }
            ]
            console.log(meetings)
            const res = await axios.patch(`${BASE_URL}/teacher-requests/${requestId}/accept`, {meetings}, {headers: {Authorization: authHeader()}})
            handleClose(null)
        }catch(e){
            console.log(e)
            setError(true)
        }
    }

    return (
        <Modal show={true} onClose={() => handleClose(false)} className="imprima">
        {error && <ErrorToast message={"an Error Occured While Accepting Request"} handleClose={setError}/>}
        <Modal.Header className='cinzel uppercase text-mud'>Set Trial Schedule
        <p className="imprima text-sm">Accepting the request will send a notification to the student</p>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
                <div>
                    <div className="text-neutral-800 relative">
                        <div>
                            <label htmlFor="date">Class 1: </label>
                        </div>
                        <div className="flex w-full">
                           <Datepicker id='date1' minDate={new Date()} required/>
                           <TimePicker value={time1} onChange={setTime1} required={true} />
                        </div>
                    </div>
                    <div className="text-neutral-800 relative">
                        <div>
                            <label htmlFor="date">Class 1: </label>
                        </div>
                        <div className="flex w-full">
                           <Datepicker id='date2' minDate={new Date()} required/>
                           <TimePicker value={time2} onChange={setTime2} required={true} />
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