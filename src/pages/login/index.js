import { Button } from "flowbite-react/lib/cjs/components/Button";
import { Checkbox } from "flowbite-react/lib/cjs/components/Checkbox";
import { Label } from "flowbite-react/lib/cjs/components/Label";
import { TextInput } from "flowbite-react/lib/cjs/components/TextInput";
import loginBg from "../../assets/images/login.png";

export default function Login(props)
{
    return (
        <div style={{backgroundImage: `url(${loginBg})`}} className="flex flex-col sm:bg-[length:100%_100%] bg-no-repeat contrast h-[80vh] sm:h-[120vh]">
            <div className="bg-[rgba(0,_0,_0,_0.6)] h-[100%] flex justify-center items-center">
                <div className="backdrop-blur-xl rounded-lg max-sm:px-2 max-sm:py-4 max-sm:w-[90%] min-w-[50%] p-8">
                    <h2 className={`cinzel text-[30px] text-royal uppercase text-center`}>Login</h2>
                        <form className="flex w-[70%] mt-8 items-stretch mx-auto  text-white flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" className="text-white text-md"/>
                                </div>
                                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" className="text-white text-md"/>
                                </div>
                                <TextInput id="password1" type="password" required />
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