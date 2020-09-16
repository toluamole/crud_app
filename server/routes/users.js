var express = require('express');
var router = express.Router();
var user = require('../controller/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// To create New user
router.post('/', user.create);

//To get single user by username
router.get('/user/:username', user.find);

//To update user data(fields) by user ID
router.put('/updatebyid', user.updateById);

// To update user data by filter condition
router.put('/update', user.update);

//To delete the user by condition
router.delete('/delete', user.delete);

module.exports = router;
