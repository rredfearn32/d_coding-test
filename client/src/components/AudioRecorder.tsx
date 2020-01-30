import React, {useState} from 'react';

import RecorderButton from './RecorderButton';

const AudioRecorder: React.FC = () => {

    let player:any = React.createRef();

    const browserCanRecordMedia = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    const [recording, setRecording] = useState(false);
    const [stopped, setStopped] = useState(false);

    const handleAudio = (stream: any) => {
        const options: MediaRecorderOptions = {mimetype: 'audio/webm'} as MediaRecorderOptions;
        const recordedChunks: BlobPart[] = [];

        const mediaRecorder = new MediaRecorder(stream, options);
        
        mediaRecorder.ondataavailable = (e: any) => {
            if(e.data.size > 0) {
                recordedChunks.push(e.data);
            }

            if(stopped === true && recording === true) {
                mediaRecorder.stop();
                setRecording(false);
                setStopped(false);
            }
        };

        mediaRecorder.onstop = (e: any) => {
            player.src = URL.createObjectURL(new Blob(recordedChunks));

            // Then send it to the server for translation
            fetch('http://localhost:3001/recordings')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
        };
        console.log('started recording');

        mediaRecorder.start();
        setRecording(true);
    }

    const startRecording = (event: any) => {
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const audioInputDevice = devices.find(device => {
                return device.kind === 'audioinput';
            });
            
            if(audioInputDevice) {
                navigator.mediaDevices.getUserMedia({ audio: true, video: false })
                .then(handleAudio)
                .catch((err) => {
                    console.log('The following getUserMedia error occured: ' + err);
                });
            }
        })
        setRecording(true);
        setStopped(false);
        console.log('Start recording!');
    }

    const stopRecording = (event: any) => {
        setStopped(true);
        setRecording(false);
        console.log('Stop recording!');
    }

    return (
        <div>
            {browserCanRecordMedia ? 
                <RecorderButton
                    recording={recording}
                    startRecording={startRecording}
                    stopRecording={stopRecording}>
                </RecorderButton>
            :
                <div>
                    Sorry, your browser does not support audio recording.
                </div>
            }
            {/* <input type="file" accept="audio/*" capture onChange={recordAudio} /> */}
            <audio ref={player} controls></audio>
        </div>
    )
}

export default AudioRecorder;