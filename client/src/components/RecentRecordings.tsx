import React, { useState, FC } from 'react';

interface Props {}

const RecentRecordings: FC<Props> = (props: any) => {

    const RECORDINGS = [
        'Recording One',
        'Recording Two',
        'Recording Three',
    ];

    const renderRecentRecordings = () => {
        return RECORDINGS.map((recording, index) => {
            return (
                <li key={recording + index}>
                    {recording}
                </li>
            )
        })
    }

    return (
            <div>
                <h2 className="mt-5 border-bottom pb-2">Recent recordings</h2>
                <ul>
                    {renderRecentRecordings()}
                </ul>
            </div>
    )
}

export default RecentRecordings;