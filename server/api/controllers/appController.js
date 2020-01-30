exports.get_all_recordings = function(req, res) {
    res.json({
        data: 'get_all_recordings',
        payload: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    });
}

exports.create_a_recording = function(req, res) {
    res.json({
        data: 'create_a_recording'
    });
}

exports.get_a_recording = function(req, res) {
    const recordingID = req.params.recordingID;
    res.json({
        data: 'get_a_recording',
        recordingID: recordingID
    });
}

exports.update_a_recording = function(req, res) {
    const recordingID = req.params.recordingID;
    res.json({
        data: 'update_a_recording',
        recordingID: recordingID
    });
}

exports.delete_a_recording = function(req, res) {
    const recordingID = req.params.recordingID;
    res.json({
        data: 'delete_a_recording',
        recordingID: recordingID
    });
}