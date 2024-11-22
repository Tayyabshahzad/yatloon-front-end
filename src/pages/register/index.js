import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Label } from "flowbite-react/lib/cjs/components/Label";
import { TextInput } from "flowbite-react/lib/cjs/components/TextInput";
import loginBg from "../../assets/images/login.png";
import CountrySelect from "../../components/forms/country_select";
import Courses from "../../components/forms/courses";
import Terms from "../../components/forms/terms";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../constants";
import SuccessToast from "../../components/success_toast";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate(); 
    const [country, setCountry] = useState('United States');
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    const [courses, setCourses] = useState([]);
    const [terms, setTerms] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${config.REACT_APP_API_BASE_URL}courses`);
                setCourses(response.data || []);
            } catch (e) {
                console.error("Error fetching courses:", e);
            }
        }; 

        fetchCourses(); 
    }, []);

    const handleCourseChange = (courseId) => { 
      setSelectedCourse(courseId);
      fetchTerms(courseId); // Fetch terms based on the selected course
    };

    const fetchTerms = async (courseId) => { 
      try {
          const response = await axios.get(`${config.REACT_APP_API_BASE_URL}courses/${courseId}/terms`);
          console.log("Fetched terms:", response.data.terms); // Log the fetched terms
          setTerms(response.data.terms || []);
      } catch (e) {
          console.error("Error fetching terms:", e);
          setTerms([]); // Clear terms if there’s an error
      }
  };

    const handleTermChange = (termId) => {
        setSelectedTerm(termId);
    };

    const resetForm = (e) => {
        e.target.reset();
        setError({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(location.search);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirmation = e.target.password_confirmation.value;
        const name = e.target.name.value;
        const phone_number = e.target.phone_number.value;
        
        if (password !== password_confirmation) {
            setError({ confirmPassword: "Passwords do not match." });
            return;
        } 
        const data = {
            email,
            password,
            password_confirmation,
            name,
            phone_number,
            country,
            course: selectedCourse,
            term: selectedTerm,
        }; 

        try {
            await axios.post(`${config.REACT_APP_API_BASE_URL}auth/register`, data);
            resetForm(e);
            setSuccess(true);
            setTimeout(() => {
                window.location.href = `${config.REACT_APP_ASSET_URL}login`; 
            }, 3000);  
                       
        } catch (e) {
            const errorMsg = e?.response?.data?.message;
            setError({
                general: typeof errorMsg === "string" ? errorMsg : "Something went wrong. Please try again."
            });
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${loginBg})` }}
            className="flex flex-col sm:bg-[length:100%_100%] relative bg-no-repeat contrast h-[130vh] sm:h-[150vh]"
        >
            <div className="bg-[rgba(0,_0,_0,_0.6)] h-[100%] flex flex-col justify-center items-center">
                {success && (
                    <SuccessToast  message="An email with the course details has been sent to your registered email address. Please check your inbox for more information."  handleCloseClick={() => setSuccess(false)}
                    />
                )}
                <div className="backdrop-blur-xl rounded-lg max-sm:px-2 max-sm:py-4 max-sm:w-[90%] min-w-[50%] p-8">
                    <h2 className="cinzel text-[30px] text-royal uppercase text-center">Register</h2>
                    <form onSubmit={handleSubmit} className="flex w-[70%] mt-8 items-stretch mx-auto text-white flex-col gap-4">
                        <div>
                            <Label htmlFor="name" value="Your name" className="text-white text-md" />
                            <TextInput id="name" type="text" placeholder="Aslam Khan" required />
                        </div>
                        <div>
                            <Label htmlFor="email" value="Your email" className="text-white text-md" />
                            <TextInput id="email" type="email" placeholder="example@gmail.com" required />
                            {error.email && <span className="text-red-500">{error.email}</span>}
                        </div>
                        <div>
                            <Label htmlFor="password" value="Your password" className="text-white text-md" />
                            <TextInput id="password" type="password" required />
                        </div>
                        <div>
                            <Label htmlFor="password_confirmation" value="Confirm Password" className="text-white text-md" />
                            <TextInput id="password_confirmation" type="password" required />
                            {error.confirmPassword && <span className="text-red-500">{error.confirmPassword}</span>}
                        </div>
                        <div className="w-full">
                            <Label htmlFor="courses" value="Courses" className="text-white text-md" />
                            <Courses courses={courses} handleCourseChange={handleCourseChange} />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="terms" value="Select Syllabus" className="text-white text-md" />
                            <Terms terms={terms} handleTermChange={handleTermChange} />
                        </div>
                        <div>
                            <Label htmlFor="phone_number" value="Phone" className="text-white text-md" />
                            <TextInput id="phone_number" type="tel" required />
                            {error.phone_number && <span className="text-red-500">{error.phone_number}</span>}
                        </div>
                        <div>
                            <Label htmlFor="country" value="Country" className="text-white text-md" />
                            <CountrySelect country={country} handleCountryChange={setCountry} />
                        </div>
                        <Button type="submit" className="mt-8 bg-teal-800">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
