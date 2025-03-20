import { NextFunction, Response, Request } from "express";
import { z } from "zod";
import { sendErrorResponse, sendValidationError } from "../utils/responseHandler";

export const errorHandler = (error:any,request:Request,response:Response,next:NextFunction):any => {


    // handler Zod validation errors
    if(error instanceof z.ZodError) {
        const errors = error.errors.map((e:any)=> `${e.message} ${e.path.join('.')}`) as string[]
        return sendValidationError(response, 'Validation Error', errors)
    }

    // Handle other types of errors
//   const res = process.env.APP_ENV == 'developement' ? { message: error.message } : { message: 'Internal Server Error' };
//   return sendErrorResponse(response, res);
}