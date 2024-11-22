import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import introVideo from "../../assets/videos/intro.mp4";

export default function VideoPlayer(props) {
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  return (
    <>
      {
        pageLoad ? <ReactPlayer url={introVideo} controls={true} width={'100%'} height={'100%'}/> : <></>
      }
    </>
  );
}
