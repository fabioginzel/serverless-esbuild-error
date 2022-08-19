import HttpError from "./HttpError";

export default class NotFoundError extends HttpError {
    constructor(readonly message : string, readonly code : number = 404 ) {
        super(message,code);
    }
}
