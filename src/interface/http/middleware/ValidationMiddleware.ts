import express, { RequestHandler } from 'express';
import { matchedData, validationResult } from 'express-validator';

const validationMiddleware : RequestHandler = (
  req: express.Request,
  res: express.Response,
  next : express.NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  req.data = matchedData(req);
  return next();
};

export default validationMiddleware;
