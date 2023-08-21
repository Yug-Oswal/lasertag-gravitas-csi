import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isChangedSlot: {type: Boolean, default: false},
    slotBooked: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot', default: null},
});

const User = mongoose.model('User', userSchema);

export default User;