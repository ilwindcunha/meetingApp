var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//validators to be put in an array
var memberNameValidator = [
    function(val){
        return(val.length > 0 && val != '(Select Name)');
    },
    //custom error text
    'Select a valid member name.'
];
var noteSchema = new Schema({
    membername: {
        type: String ,
        validate: memberNameValidator
    },
    project: {
        type: String,
        required: true
    },
    workYesterday: {
        type: String,
        required: true
    },
    workToday:{
        type: String,
        required: true
    },
    impediment:{
        type: String,
        required: true,
        default: "none"
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', noteSchema);
