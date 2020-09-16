(function () {
var mongoose = require('mongoose');
var user = mongoose.model('User')

exports.createUser = function(data, callback) {
    user.create(data).then((response) => {
        callback(null, response);
    }, (error) => {
        callback(error, null);
    });
};

// exports.findUser = function(query, callback){
//     user.findOne(query, callback);
// }

exports.updateUserById = function (id, data, callback){
    user.findByIdAndUpdate({
        _id: id
    }, data, (err, respons) => {
        callback(err, response);
    });
}

// exports.updateUser = function(query, data, options, callback){
//     user.findOneAndUpdate(query, data, options, (err, response) => {
//         callback(err, response);
//     });
// }

// exports.deletaUser = function(query, callback) {
//     user.deleteOne(query, callback);
// }
})()