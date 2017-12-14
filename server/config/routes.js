const mongoose = require('mongoose');
const Note = mongoose.model('Note');
module.exports = function(app) {
    app.get('/notes', noteController.index)
    app.post('/notes', noteController.create)
}