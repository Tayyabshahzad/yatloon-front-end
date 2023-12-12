import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Checkbox } from "flowbite-react/lib/cjs/components/Checkbox";
import { Label } from "flowbite-react/lib/cjs/components/Label";
import { TextInput } from "flowbite-react/lib/cjs/components/TextInput";
import loginBg from "../../assets/images/login.png";
import CountrySelect from "../../components/forms/country_select";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants";
import SuccessToast from "../../components/success_toast";

export default function SignUp(props)
{
    const [country, setCountry] = useState('United States');
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    const resetForm = (e) => {
        e.target.querySelector('#email').value = '';
        e.target.querySelector('#password').value = '';
        e.target.querySelector('#confirm-password').value = ''
        e.target.querySelector('#name').value = ''
        e.target.querySelector('#phone_number').value = ''
        setError({})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('#email').value;
        const password = e.target.querySelector('#password').value;
        const confirmPassword = e.target.querySelector('#confirm-password').value;
        const name = e.target.querySelector('#name').value;
        const phone_number = e.target.querySelector('#phone_number').value;
        if(password !== confirmPassword){
            setError({
                ...error,
                confirmPassword: true
            })
            return
        }
        const data = {email, password, name, phone_number, country}
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, data);
            resetForm(e)
            setSuccess(true);
            
        } catch (e) {
            const errorMsg = e?.response?.data.message;
            if(errorMsg){
                if(isJsonString(errorMsg)){ 
                    const errorObj = JSON.parse(errorMsg);
                    setError(errorObj);
                } else {
                    alert(errorMsg)
                }
            }
        }
    }

    return (
        <div style={{backgroundImage: `url(${loginBg})`}} className="flex flex-col sm:bg-[length:100%_100%] relative bg-no-repeat contrast h-[130vh] sm:h-[150vh]">
           
            <div className="bg-[rgba(0,_0,_0,_0.6)] h-[100%] flex flex-col justify-center items-center">
            {success && <SuccessToast message={'A Confirmation Link Has Been send to Your Email'} handleCloseClick={setSuccess}/> }
                <div className="backdrop-blur-xl rounded-lg max-sm:px-2 max-sm:py-4 max-sm:w-[90%] min-w-[50%] p-8">
                    <h2 className={`cinzel text-[30px] text-royal uppercase text-center`}>Register</h2>
                        <form onSubmit={handleSubmit} className="flex w-[70%] mt-8 items-stretch mx-auto  text-white flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name" className="text-white text-md"/>
                                </div>
                                <TextInput id="name" type="text" placeholder="Aslam Khan" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" className="text-white text-md"/>
                                </div>
                                <TextInput id="email" type="email" placeholder="example@gmail.com" required 
                                    helperText={error.email &&
                                        <span className="text-red-500"> {error['email']}</span>}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" className="text-white text-md"/>
                                </div>
                                <TextInput id="password" type="password" required 
                                    helperText={error.password &&
                                        <span className="text-red-500"> {error.password} </span>}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="confirm-password" value="Confirm Password" className="text-white text-md"/>
                                </div>
                                <TextInput id="confirm-password" type="password" required 
                                    helperText={error.confirmPassword &&
                                        <span className="text-red-500"> Passwords do not match </span>}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="phone_number" value="Phone" className="text-white text-md"/>
                                </div>
                                <TextInput id="phone_number" type="tel" required 
                                    helperText={error.phone_number &&
                                        <span className="text-red-500"> {error['phone_number']} </span>}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="country" value="Country" className="text-white text-md"/>
                                </div>
                                <CountrySelect country={country} handleCountryChange={setCountry}/>
                            </div>
                            
                            <Button type="submit" className="mt-8 bg-teal-800">Submit</Button>
                        </form>
                </div>
            </div>
        </div>
    )
}