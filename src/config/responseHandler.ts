import {Context} from 'koa';

export const responseHandler = async (ctx: Context, result: any) => {
    ctx.body = {
        meta: {
            status: 200
        },
        data: result
    }
}