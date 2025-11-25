import { NextFunction, Request, Response } from "express";

const logger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(req.url);
  console.log(req.query);
  console.log(req.params);
  next();
};

export default logger;
