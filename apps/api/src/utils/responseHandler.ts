import {Response} from 'express'
import HttpStatusCode from './HttpStatusCode';


export interface SuccessResponse<T> {
    success:true;
    data:T
}

export interface ErrorResponse<T> {
    success:false;
    error:{
        message:T
    }
}

export const sendSuccessResponse = <T>(
    res: Response,
    data: T,
    status = HttpStatusCode.OK
  ): Response<SuccessResponse<T>> => {
    return res.status(status).json({ success: true, data });
  };