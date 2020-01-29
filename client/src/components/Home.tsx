import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {

    let player:any = React.createRef();

    const [recording, setRecording] = useState(false);
    const [stopped, setStopped] = useState(false);

    const handleAudio = (stream: any) => {
        const options: MediaRecorderOptions = {mimetype: 'audio/webm'} as MediaRecorderOptions;
        const recordedChunks: BlobPart[] = [];

        const mediaRecorder = new MediaRecorder(stream, options);
        
        mediaRecorder.addEventListener('dataavailable', (e: any) => {
            if(e.data.size > 0) {
                recordedChunks.push(e.data);
            }

            if(stopped === true && recording === true) {
                mediaRecorder.stop();
                setRecording(false);
                setStopped(false);
            }
        });

        mediaRecorder.addEventListener('stop', (e: any) => {
            player.src = URL.createObjectURL(new Blob(recordedChunks));

            // Then send it to the server for translation
        });

        mediaRecorder.start();
        setRecording(true);
    }

    const startRecording = (event: any) => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(handleAudio);
    }

    const stopRecording = (event: any) => {
        setStopped(true);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {recording ?
                        <div>
                            <button type="button" className="btn" onClick={stopRecording}>
                                <FontAwesomeIcon icon={faCoffee} />
                            </button>
                            <p>Stop recording!</p>
                        </div>
                        :
                        <div>
                            <button type="button" className="btn" onClick={startRecording}>
                                <FontAwesomeIcon icon={faCoffee} />
                            </button>
                            <p>Start recording!</p>
                        </div>
                    }
                    {/* <input type="file" accept="audio/*" capture onChange={recordAudio} /> */}
                    <audio ref={player} controls></audio>
                </div>
            </div>
        </div>
    )
}

export default Home;