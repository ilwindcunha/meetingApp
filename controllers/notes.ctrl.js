//
'use strict';

var Note = require('../models/Note.model.js');
var User = require('../models/User.model.js');

exports.allUsersNotes = function(req,res){
    //Find all UserSchema
    User.find({})
    .sort({
        //username are sorted alphabetically
        username: 1
    })
    .exec(function (err, users){
        if(err){
            console.log('error getting users');
        }else{
            return res.render('newnote', {
                title: 'New Note' ,
                users: users
            });
        }
    });
}
//createNote method
exports.createNote = function(req,res){
    //create a  new note
    var newNote = new Note();
    newNote.memberName = req.body.memberName;
    newNote.project = req.body.project;
    newNote.workYesterday = req.body.workYesterday;
    newNote.workToday   = req.body.workToday;
    newNote.impediment  = req.body.impediment;

    newNote.save(function(err){
        if(err){
            var errMsg = 'Sorry, there was an error saving' +err;
            res.render('newnote',{
            title:'Note - new note(error)',
            message:errMsg
        });
    }else{
        console.log('Meeting note has been saved');
        res.redirect(301, '/');
    }
    })
}
//filter by name
exports.noteByMember = function(req,res){
    var query = Note.find({});
    var filter = req.body.memberName;
    console.log('filter value is ', filter);
    if(filter.length === 0 ){
        console.log('no notes found');
    }else{
        //mongoose method where clause
        query.where({
            memberName: filter
        })
        .sort({
            createdOn: 'desc'
        })
        .exec(function(err, results){
            console.log(results);
            res.render('index',{
                notes: results
            });
        });
    }
};
