import React, {useState} from 'react';

import RecorderButton from './RecorderButton';

const AudioRecorder: React.FC = () => {

    var mediaRecorder:any;
    var player:any;

    player = React.createRef();

    const browserCanRecordMedia = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    const [recording, setRecording] = useState(false);

    const handleAudio = (stream: any) => {
        const options: MediaRecorderOptions = {mimetype: 'audio/webm'} as MediaRecorderOptions;
        const recordedChunks: BlobPart[] = [];

        mediaRecorder = new MediaRecorder(stream, options);
        
        mediaRecorder.addEventListener('dataavailable', (e: any) => {
            console.log('Processing data...');
            if(e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        });

        mediaRecorder.addEventListener('stop', (e: any) => {
            console.log('Stopped recording');
            player.current.src = URL.createObjectURL(new Blob(recordedChunks));

            // Then send it to the server for translation
            fetch('http://localhost:3001/recordings')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            });
            setRecording(false);
        });

        console.log('Started recording!');

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
            } else {

            }
        });
    }

    const stopRecording = (event: any) => {
        setRecording(false);
        mediaRecorder.stop();
        console.log('Stop recording!');
    }

    return (
        <div className="text-center mt-5">
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