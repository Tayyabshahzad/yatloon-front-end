import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props)
{
    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        setPageLoad(true)
    }, [])

    return (
        <>
            {
                pageLoad ? <ReactPlayer url="https://www.youtube.com/watch?v=jxuTtVQMfyE" controls={true} width={'100%'} height={'100%'}/> : <></>
            }
        </>
        )
}