import React, {useState} from 'react';

import AudioRecorder from '../components/AudioRecorder';
import RecentRecordings from '../components/RecentRecordings';

const Home: React.FC = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 offset-md-3">
                    <AudioRecorder></AudioRecorder>
                    <RecentRecordings></RecentRecordings>
                </div>
            </div>
        </div>
    )
}

export default Home;