// - - - - = = = = Configurations = = = = - - - - 

// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// CORS
const cors = require('cors');
app.use(cors());

// Static Directory
app.use(express.static(__dirname + '/note-app/dist'));

// Body Parser 
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Morgan (optional)
let morgan = require("morgan");
app.use(morgan('dev'));




// - - - - = = = = Model = = = = - - - - 
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/note-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const noteSchema = new Schema({
  note: {
    type: String,
    trim: true,
    required: [true, 'Note is required'],
    minlength: [5, 'Note length must be greater than 5'],
    unique: true
  },

}, {
  timestamps: true
});
noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Note = mongoose.model('Note', noteSchema);




// - - - - = = = = Controller = = = = - - - - 
// moved to server/controllers/notes.js
// - - - - = = = = Routes = = = = - - - - 
// have been moved to server/config/routes.js 

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);


// - - - - = = = = Server Listener = = = = - - - - 
const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));