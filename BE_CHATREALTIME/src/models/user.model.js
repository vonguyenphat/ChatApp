const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 3, maxLength: 30},
        username: {type: String, required: true},
        password: {type: String, required: true},
    },
    {timestamps: true}
);
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;