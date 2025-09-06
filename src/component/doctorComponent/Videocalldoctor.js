
import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoCall = () => {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("room") || "default_room";

  return (
    <iframe
      src={`https://meet.jit.si/${roomId}`}
      style={{ width: "100%", height: "100vh", border: 0 }}
      allow="camera; microphone; fullscreen; display-capture"
      title="Video Call"
    ></iframe>
  );
};

export default VideoCall;