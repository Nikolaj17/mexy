module.exports = function (mongoose, cbfail, cbok) {
    var Schema = mongoose.Schema({
        email: String,
        time: Date,
        key: String
    });
    cbok(mongoose.model('registration_email', Schema));
}