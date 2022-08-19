/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
    export interface Request {
        data?: Record<string, any>;
        authenticatedUser?: {
            name: string;
            user_id: string;
            phone_number: string;
        }
    }
}
