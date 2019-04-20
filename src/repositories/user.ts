import { ICreateUserPayload, IUpdateUserPayload, IGetSingleUserpayload, IDeleteUserPayload } from "../interfaces/user";
import { User } from "../models/user";


export const create = async (payload: ICreateUserPayload) => {
    return User.create(payload);
    
};

export const getAll = async () => {
    return User.find();
}

export const getSingle = async (email: IGetSingleUserpayload) => {
    return User.findOne(email);
}

export const updateUser = async (payload: IUpdateUserPayload) => {
    return User.findOneAndUpdate({email: payload.email}, payload, {new: true});
}

export const deleteUser = async (payload: IDeleteUserPayload) => {
    return User.findOneAndDelete({email: payload.email})
}