import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import AudioRecorder from './AudioRecorder';

const Home: React.FC = () => {

    

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <AudioRecorder></AudioRecorder>
                </div>
            </div>
        </div>
    )
}

export default Home;