import HttpError from "./HttpError";

export default class BadRequestError extends HttpError {
    constructor(readonly message : string, readonly code : number = 400 ) {
        super(message,code);
    }
}
