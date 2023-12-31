import mongoose from "mongoose";
import User from "./userModel.js";
import envHandler from "../helpers/envHandler.js";

const slotSchema = new mongoose.Schema({
    startTime: {type: Date, unique: true, required: true},
    endTime: {type: Date, unique: true, required: true},
    toShow: {type: Boolean, default: true},
    day: {type: Number, default: 0},
    isCarry: {type: Boolean, default: false},
    slotBookedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null}],
});

slotSchema.virtual('availability').get(function() {
    return (envHandler("SLOTCAP" + this.day) - this.slotBookedBy.length);
});

slotSchema.set('toJSON', {virtuals: true});
slotSchema.set('toObject', {virtuals: true});

const Slot = mongoose.model('Slot', slotSchema);

export default Slot;