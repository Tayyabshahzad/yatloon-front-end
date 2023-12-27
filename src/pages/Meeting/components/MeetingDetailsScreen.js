import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  classObj
}) {

  const [meetingId, setMeetingId] = useState("");
  const [meetingIdError, setMeetingIdError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(true);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);
  const user = useAuthUser()

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      {iscreateMeetingClicked ? (
        <div className="border border-solid border-gray-400 rounded-xl px-4 py-3 mb-4  flex items-center justify-center">
          <p className="text-white text-base">
            {`Meeting code : ${classObj.meetingId}`}
          </p>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(meetingId);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={meetingId}
            onChange={(e) => {
              setMeetingId(e.target.value);
            }}
            placeholder={"Enter meeting Id"}
            className="px-4 py-3 bg-gray-650 rounded-xl text-white w-full text-center"
          />
          {meetingIdError && (
            <p className="text-xs text-red-600">{`Please enter valid meetingId`}</p>
          )}
        </>
      ) : null}

      {(iscreateMeetingClicked || isJoinMeetingClicked) && (
        <>
          <div className="flex px-4 py-1 bg-gray-650 rounded-xl text-white w-full ">
            <p className="mr-1 font-bold">Your Name: </p>
            <p>{participantName}</p>
          </div>

          <div className="flex px-4 py-1  bg-gray-650 rounded-xl text-white w-full">
            <p className="mr-1 font-bold">Course: </p>
            <p>{classObj.course.course_name}</p>
          </div>

          {
            user()['role.name'] == 'teacher' ? 
            <div className="flex px-4 py-1  bg-gray-650 rounded-xl text-white w-full">
            <p className="mr-1 font-bold">Student: </p>
            <p>{classObj.student.name}</p>
          </div>  : 
            <div className="flex px-4 py-1  bg-gray-650 rounded-xl text-white w-full">
            <p className="mr-1 font-bold">Teacher: </p>
            <p>{classObj.teacher.name}</p>
          </div>
          }

          {/* <p className="text-xs text-white mt-1 text-center">
            Your name will help everyone identify you in the meeting.
          </p> */}
          <button
            className="bg-mud text-white mt-4 rounded-md px-4 py-2 w-full"
            onClick={(e) => {
              if (false) {
                if (videoTrack) {
                  videoTrack.stop();
                  setVideoTrack(null);
                }
                onClickStartMeeting();
              } else {
                if (classObj.meetingId.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                  onClickJoin(classObj.meetingId);
                } else setMeetingIdError(true);
              }
            }}
          >
            {iscreateMeetingClicked ? "Join Meeting" : "Join a meeting"}
          </button>
        </>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 mt-4 flex flex-col">
          <div className="flex items-center justify-center flex-col w-full ">
            <button
              className="w-full bg-mud text-white px-2 py-3 rounded-xl"
              onClick={async (e) => {
                const meetingId = await _handleOnCreateMeeting();
                setMeetingId(meetingId);
                setIscreateMeetingClicked(true);
              }}
            >
              Create a meeting
            </button>
            <button
              className="w-full bg-gray-600 text-white px-2 py-3 rounded-xl mt-5"
              onClick={(e) => {
                setIsJoinMeetingClicked(true);
              }}
            >
              Join a meeting
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
