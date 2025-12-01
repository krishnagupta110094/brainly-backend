import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String, // integer
        required: true,
        unique: true
    },
    password: {
        type: String, // integer
        required: true
    }
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map