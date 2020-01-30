import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface Props {
    recording: boolean;
    startRecording: (event: any) =>void;
    stopRecording: (event: any) =>void;
}

const RecorderButton: React.FC<Props> = (props: any) => {

    return (
            <div>
                {props.recording ?
                    <div>
                        <button type="button" className="btn" onClick={props.stopRecording}>
                            <FontAwesomeIcon icon={faCoffee} />
                        </button>
                        <p>Stop recording!</p>
                    </div>
                :
                    <div>
                        <button type="button" className="btn" onClick={props.startRecording}>
                            <FontAwesomeIcon icon={faCoffee} />
                        </button>
                        <p>Start recording!</p>
                    </div>
                }
            </div>
    )
}

export default RecorderButton;