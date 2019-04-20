import { ICreateUserPayload, IUpdateUserPayload, IGetSingleUserpayload, IDeleteUserPayload } from "../interfaces/user";
import { validate } from "../validations/index";
import { createUserSchema, getSingleUserSchema, updateUserSchema, deleteUserSchema } from "../validations/schemas/user";
import * as UserRepo from '../repositories/user';
import * as boom from "boom";

export const create = async (payload: ICreateUserPayload) => {

    const validPayload = await validate(payload, createUserSchema);

    const result = await UserRepo.create(validPayload);
    if (!result) {
        throw boom.notFound('User Not Found');
    }
    return result;
};

export const getAll = async () => {
    return await UserRepo.getAll();
}

export const getSingle = async (payload: IGetSingleUserpayload) => {
    
    const validPayload = await validate(payload, getSingleUserSchema)

    const result = await UserRepo.getSingle(validPayload);
    if (!result) {
        throw boom.notFound('User With Provided Email Not Found');
    }

    return result;
}

export const updateUser = async (payload: IUpdateUserPayload) => {
    let validPayload = await validate(payload, updateUserSchema);

    await RemoveNullAttributesFromObject(validPayload);

    const result = await UserRepo.updateUser(validPayload);

    if(!result) {
        throw boom.notFound('User Not Found');
    }
    return result;
}

export const deleteUser = async (payload: IDeleteUserPayload) => {
    const validPayload = await validate(payload, deleteUserSchema);

    const result = await UserRepo.deleteUser(validPayload);

    if (!result) {
        throw boom.notFound('User Not Found');
    }
    return result;
}

const RemoveNullAttributesFromObject = async (payload: any) => {
    for (var attribute in payload) {
        if (payload[attribute] === null || payload[attribute] === undefined) {
            delete payload[attribute]
        }
    }
}