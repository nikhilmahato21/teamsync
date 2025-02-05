import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/hhtp.config";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {

    console.log(`Error Occured on PATH:${req.path}`,error);
    
if(error instanceof SyntaxError){
    return res.status(HTTPSTATUS.BAD_REQUEST).json({
        message:"Invalid JSON. Please check your request"
    })
}


  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
