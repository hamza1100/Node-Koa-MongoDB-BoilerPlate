
export interface ICreateUserPayload {
    firstName: String,
    lastName: String,
    email: String,
    isActive: Boolean
}

export interface IGetSingleUserpayload {
    email: String
}

export interface IUpdateUserPayload {
    firstName: String,
    lastName: String,
    email: String,
    isActive: Boolean
}

export interface IDeleteUserPayload {
    email: String
}