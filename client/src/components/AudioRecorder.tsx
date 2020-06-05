import React, { useState, FC } from "react";

import RecorderButton from "./RecorderButton";

var mediaRecorder: any;
var player: any;

const AudioRecorder: FC = () => {
  player = React.createRef();

  const [recording, setRecording] = useState(false);

  const handleAudio = (stream: any) => {
    const options: MediaRecorderOptions = {
      mimetype: "audio/webm",
    } as MediaRecorderOptions;
    const recordedChunks: BlobPart[] = [];

    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener("dataavailable", (e: any) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    });

    mediaRecorder.addEventListener("stop", (e: any) => {
      player.current.src = URL.createObjectURL(new Blob(recordedChunks));

      // Then send it to the server for translation
      fetch("http://localhost:3001/recordings")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    });

    mediaRecorder.start();
    setRecording(true);
  };

  const startRecording = (event: any) => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const audioInputDevice = devices.find((device) => {
        return device.kind === "audioinput";
      });

      if (audioInputDevice) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then(handleAudio)
          .catch((err) => {
            console.log("The following getUserMedia error occured: " + err);
          });
      }
    });
  };

  const stopRecording = (event: any) => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div className="text-center mt-5">
      {
        <RecorderButton
          recording={recording}
          startRecording={startRecording}
          stopRecording={stopRecording}
        ></RecorderButton>
      }
      <audio ref={player} controls></audio>
    </div>
  );
};

export default AudioRecorder;
