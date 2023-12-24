import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Checkbox } from "flowbite-react/lib/cjs/components/Checkbox";
import { Label } from "flowbite-react/lib/cjs/components/Label";
import { TextInput } from "flowbite-react/lib/cjs/components/TextInput";
import loginBg from "../../assets/images/login.png";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import axios from "axios";
import BASE_URL from "../../constants";
import ErrorToast from "../../components/error_toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props)
{
    const signIn = useSignIn();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const [error, setError] = useState(false);

    useEffect(() => {
        if(isAuthenticated()){
            navigate('/student/dashboard')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('#email').value;
        const password = e.target.querySelector('#password').value;
        const data = {
            email,
            password
        }
        try{
            console.log(data)
            const response = await axios.post(`${BASE_URL}/auth/login`, data);
            const role = response.data.user['role.name'];
            if(signIn(
                {
                    token: response.data.tokens.access.token,
                    expiresIn: Math.ceil((((response.data.tokens.access.expires - Date.now()) / 1000) / 60) - 2),
                    tokenType: "Bearer",
                    authState: response.data.user
                })){
                    if(role === 'student'){
                        navigate('/student/dashboard')
                    } else if(role === 'teacher'){
                        navigate('/teacher/dashboard')
                    }
                    else if(role === 'admin'){
                        navigate('/admin/dashboard')
                    } else {
                        navigate('/404')
                    }
                } else {
                    alert('Something went wrong')
                }
        } catch(e) {
            console.log(e)
            const error = e?.response?.data?.message;
            if(error){
                setError(error);
            }
        }
    }

    return (
        <div style={{backgroundImage: `url(${loginBg})`}} className="flex flex-col sm:bg-[length:100%_100%] relative bg-no-repeat contrast h-[80vh] sm:h-[120vh]">
           
            <div className="bg-[rgba(0,_0,_0,_0.6)] h-[100%] flex flex-col justify-center items-center">
            {error && <ErrorToast message={error} handleClose={setError}/> }
                <div className="backdrop-blur-xl rounded-lg max-sm:px-2 max-sm:py-4 max-sm:w-[90%] min-w-[50%] p-8">
                    <h2 className={`cinzel text-[30px] text-royal uppercase text-center`}>Login</h2>
                        <form onSubmit={handleSubmit} className="flex w-[70%] mt-8 items-stretch mx-auto  text-white flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" className="text-white text-md"/>
                                </div>
                                <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" className="text-white text-md"/>
                                </div>
                                <TextInput id="password" type="password" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember" className="text-white text-md">Remember me</Label>
                            </div>
                            <Button type="submit" className="bg-teal-800">Submit</Button>
                        </form>
                </div>
            </div>
        </div>
    )
}