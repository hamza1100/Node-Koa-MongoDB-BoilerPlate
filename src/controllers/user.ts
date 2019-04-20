import { Context } from "koa";
import { ICreateUserPayload, IUpdateUserPayload, IGetSingleUserpayload, IDeleteUserPayload } from "../interfaces/user";
import * as userService from '../services/user';
import { responseHandler } from "../config/responseHandler";

export const create = async (ctx: Context) => {
    const payload: ICreateUserPayload = {
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email,
        isActive: true
    }

    const result = await userService.create(payload);

    responseHandler(ctx, result);
}

export const getAll = async (ctx: Context) => {
    const result = await userService.getAll();
    
    responseHandler(ctx, result);
}

export const getSingle = async (ctx: Context) => {
    const payload: IGetSingleUserpayload = {
        email: ctx.request.body.email
    }
    const result = await userService.getSingle(payload);

    responseHandler(ctx, result);
}

export const updateSingle = async (ctx: Context) => {
    const payload: IUpdateUserPayload = {
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email,
        isActive: ctx.request.body.isActive
    }

    const result = await userService.updateUser(payload);

    responseHandler(ctx, result);
}

export const deleteUser = async (ctx: Context) => {
    const payload: IDeleteUserPayload = {
        email: ctx.request.body.email
    }

    const result = await userService.deleteUser(payload);

    responseHandler(ctx, result);
}