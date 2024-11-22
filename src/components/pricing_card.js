import { Link, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import axios from "axios";
 
import config from "../constants"
export default function PricingCard({ classes_per_week, price, is_best, course_duration, course_id }) {
    const navigate = useNavigate();

    // Function to handle Trial Class Click
    const handleTrialClassClick = () => {
        const user = localStorage.getItem("user"); // Example check for user authentication
        console.log(user);
        if (!user) {
           
            navigate(`/register?course_id=${course_id}`); 
        } else { 
            startTrialClass();
        }
    };

    // Function to start the trial class
    const startTrialClass = () => {
        const userId = localStorage.getItem("user_id"); // Example: storing the user_id in localStorage
        axios.post(`${config.REACT_APP_API_BASE_URL}/trial-classes`, {
            course_id: course_id,
            user_id: userId, // Assuming user ID is stored in localStorage
        })
        .then((response) => {
            console.log("Trial class started", response);
            // You could navigate the user to the trial class or another page
            navigate("/trial-started"); // Adjust as per your trial class flow
        })
        .catch((error) => {
            console.error("Error starting trial class", error);
        });
    };

    return (
        <div className="bg-white rounded-lg flex flex-col p-8 sm:min-w-[25%]">
            <h3 className="cinzel text-center mt-2 mb-4 uppercase text-[16px] text-gray-800">{`${classes_per_week} Days/Week`}</h3>
            <h4 className="cinzel mb-4 text-center uppercase text-mud text-[30px]">{`$${price}`}</h4>
            <p className="text-center mb-4 text-xs text-gray-400">Per Month</p>
            <div className="flex self-center flex-col gap-3 items-start">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TiTick size={26} color="rgb(37, 101, 92)" />
                    <p>Free Trial Classes</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TiTick size={26} color="rgb(37, 101, 92)" />
                    <p>{`${course_duration} mins Classes`}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TiTick size={26} color="rgb(37, 101, 92)" />
                    <p>{`${classes_per_week * 4} Per Month`}</p>
                </div>
            </div>
            <button 
                onClick={handleTrialClassClick} 
                className="bg-mud mt-8 self-center text-white px-4 py-2 rounded-md"
            >
                Start Trial Class
            </button>
        </div>
    );
}
