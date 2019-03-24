var express = require('express');
var router = express.Router();
// var notesctrl = require('../controllers/notes.ctrl')
var notesCtrl = require('../controllers/notes.ctrl')
var asyncCtrl = require('../controllers/async.ctrl')

router.get('/', asyncCtrl.homePage);
router.post('/', notesCtrl.noteByMember);
// router.get('/', function(req,res){
    //     res.render('index');
    // });
// router.get('/newnote', function(req, res){
//     res.render('newnote');
// });

router.get('/newnote', notesCtrl.allUsersNotes);
router.post('/newnote', notesCtrl.createNote);

module.exports = router;
