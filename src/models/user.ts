import {Schema, Model, Document} from 'mongoose';

import mongoose from '../config/databaseConnection';

const user = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, required: true }
}, {
        collection: 'user', versionKey: false
    });

export interface IUserAttributes {
    firstName: String,
    lastName: String,
    email: String,
    isActive: Boolean
}

export interface IUserModel extends Document, IUserAttributes {}

export const User: Model<IUserModel> = mongoose.model('user', user);