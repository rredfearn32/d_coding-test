'use strict';
module.exports = function(app) {
    var controller = require('../controllers/appController');

    app.route('/recordings')
        .get(controller.get_all_recordings)
        .post(controller.create_a_recording);

    app.route('/recordings/:recordingID')
        .get(controller.get_a_recording)
        .put(controller.update_a_recording)
        .delete(controller.delete_a_recording);
};