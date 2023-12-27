import { useState } from "react"
import BASE_URL from "../../../../constants"
import ErrorToast from "../../../../components/error_toast"
import SuccessToast from "../../../../components/success_toast"
import { useAuthHeader } from "react-auth-kit"
import axios from "axios"

export default function CreateCourse(props)
{
    const authHeader = useAuthHeader()
    const [img, setImg] = useState(null)
    const [previewUrl, setPreviewUrl] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setPreviewUrl(reader.result)
            }
            setImg(file)
        } else {
            setImg(null)
            setPreviewUrl('')
        }

    }

    function formDataToObject(formData) {
        const object = {};
        formData.forEach((value, key) => {
          if (!object.hasOwnProperty(key)) {
            object[key] = value;
          } else {
            if (!Array.isArray(object[key])) {
              object[key] = [object[key]];
            }
            object[key].push(value);
          }
        });
        return object;
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const file = data.get('course_image')
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: authHeader()
        }
        const pricings = [
            {
                classes_per_week: data.get('classes_per_week_1'),
                price: data.get('price_1'),
                is_best: e.target.querySelector('#is_best_1').checked
            },
            {
                classes_per_week: data.get('classes_per_week_2'),
                price: data.get('price_2'),
                is_best: e.target.querySelector('#is_best_2').checked
            },
            {
                classes_per_week: data.get('classes_per_week_3'),
                price: data.get('price_3'),
                is_best: e.target.querySelector('#is_best_3').checked
            }
        ]
        data.delete('classes_per_week_1')
        data.delete('price_1')
        data.delete('classes_per_week_2')
        data.delete('price_2')
        data.delete('classes_per_week_3')
        data.delete('price_3')
        data.delete('is_best')
        let url = null
        let fileName = null
        try{
            if(file)
            {
                const fileData = new FormData()
                fileData.append('file', file)
                const imgUrl = `${BASE_URL}/files/upload`
                const res = await axios.post(imgUrl, fileData, {headers})
                url = res.data.url
                fileName = res.data.filename
                data.delete('course_image')
            }

            data.append('course_image_url', url ? url : '#')
            const dataObj = formDataToObject(data)
            dataObj.course_pricing = pricings
            console.log("data", dataObj)
            axios.post(`${BASE_URL}/courses`, dataObj, {headers: {Authorization: authHeader()}})
            .then((res) => {
                console.log(res)
                setSuccess(true)
            }).catch((err) => {
                axios.post(`${BASE_URL}/files/delete/${fileName}`, {}, {headers}).catch((err) => err)
                const message = err?.response?.data?.message
                console.log(err, message)
                setError(message ? message : 'An Error Occured While Creating Course')
            })
            
        } catch(err) {
            const message = err?.response?.data?.message
            console.log(err, message)
            setError(message ? message : 'An Error Occured While Creating Course')
        }
    }



    return(
        <div className="px-4 py-8 w-full bg-white">
            {error && <ErrorToast message={error} handleClose={setError}/>}
            {success && <SuccessToast message={'Course Created'} handleCloseClick={setSuccess}/>}
            <div className="border relative rounded-lg border-zinc-500 pt-8 px-4 min-h-[100vh] w-full">
                <h1 className="cinzel text-mud absolute px-4 top-[-18px] ml-4 bg-white text-2xl">Create Course</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2 mb-3">
                        <div>
                            <label htmlFor="course_name" className="text-mud font-bold">Course Name: </label>
                        </div>
                        <input required type="text" name="course_name" id="course_name" placeholder="Course Name" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="course_description" className="text-mud font-bold">Course Description: </label>
                        </div>
                       <textarea minLength={30} rows={5} required name="course_description" id="course_description" placeholder="Course Description" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                    </div>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="course_duration" className="text-mud font-bold">Class Duration: </label>
                        </div>
                        <input defaultValue={45} step={1} min={10} required type="number" name="course_duration" id="course_duration" placeholder="Minutes" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                    </div>
                    <div className="mb-3">
                        <div className="mb-1">
                            <label htmlFor="course_duration" className="text-mud font-bold">Course Image: </label>
                        </div>
                        <div className="flex items-center justify-center mb-2 h-[300px] w-[300px] border-solid border border-mud">
                            {previewUrl ? <img src={previewUrl} alt="Course Image Preview" className="w-full h-full"/> : <p>Image Preview</p>}
                        </div>
                        <p className="text-xs text-neutral-800">Max File Size: 5mb (.png, .jpg, .jpeg)</p>
                        <input  onChange={handleImageChange} type="file" name="course_image" id="course_image" placeholder="Course Image" className="border border-solid border-mud rounded-md"/>
                    </div>
                    <div className="mt-5 ">
                        <h1 className="cinzel text-xl uppercase text-mud">Pricings</h1>
                        <div className="p-2 ">
                            <div className="flex flex-col gap-3 mb-3 p-2 pb-3  border-mud border-solid">
                                <h3 className="font-bold cinzel text-mud">Option 1</h3>
                                <div className="grid grid-cols-3 gap-8">
                                    <div>
                                        <div>
                                            <label htmlFor="classes_per_week_1" className="text-mud font-bold">Classes Per Week: </label>
                                        </div>
                                        <input required min={1} max={7} type="number" name="classes_per_week_1" id="classes_per_week_1" placeholder="0-7" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="price_1" className="text-mud font-bold">Price: </label>
                                        </div>
                                        <input required type="number" name="price_1" id="price_1" placeholder="$" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input type="radio" name="is_best" id="is_best_1" value={"true"} className="border border-solid border-mud"/>
                                        <div>
                                            <label htmlFor="is_best_1" className="text-mud font-bold">Best Value</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-3 p-2 border-mud border-solid">
                                <h3 className="font-bold cinzel text-mud">Option 2</h3>
                                <div className="grid grid-cols-3 gap-8">
                                    <div>
                                        <div>
                                            <label htmlFor="classes_per_week_2" className="text-mud font-bold">Classes Per Week: </label>
                                        </div>
                                        <input required min={1} max={7} type="number" name="classes_per_week_2" id="classes_per_week_2" placeholder="0-7" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="price_2" className="text-mud font-bold">Price: </label>
                                        </div>
                                        <input required type="number" name="price_2" id="price_2" placeholder="$" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input type="radio" name="is_best" id="is_best_2" value={"true"} className="border border-solid border-mud"/>
                                        <div>
                                            <label htmlFor="is_best_2" className="text-mud font-bold">Best Value</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-3 p-2  border-mud border-solid">
                                <h3 className="font-bold cinzel text-mud">Option 3</h3>
                                <div className="grid grid-cols-3 gap-8">
                                    <div>
                                        <div>
                                            <label htmlFor="classes_per_week_3" className="text-mud font-bold">Classes Per Week: </label>
                                        </div>
                                        <input required min={1} max={7} type="number" name="classes_per_week_3" id="classes_per_week_3" placeholder="0-7" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="price_3" className="text-mud font-bold">Price: </label>
                                        </div>
                                        <input required type="number" name="price_3" id="price_3" placeholder="$" className="border border-solid border-mud rounded-md px-4 py-2 w-full"/>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input type="radio" name="is_best" id="is_best_3" value={"true"} className="border border-solid border-mud"/>
                                        <div>
                                            <label htmlFor="is_best_3" className="text-mud font-bold">Best Value</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-mud text-white font-bold px-4 py-2 mt-3 mb-3 rounded-md">
                        Create
                    </button>
                </form>
            </div>
    
        </div>
    )
}