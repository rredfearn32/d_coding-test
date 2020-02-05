import React, {useState} from 'react';

import AudioRecorder from '../Components/AudioRecorder';
import RecentRecordings from '../Components/RecentRecordings';

const Home: React.FC = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <AudioRecorder></AudioRecorder>
                    <RecentRecordings></RecentRecordings>
                </div>
            </div>
        </div>
    )
}

export default Home;