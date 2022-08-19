/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import HttpError from '../error/HttpError';

const errorMiddleware : ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  console.trace(err.stack);
  res.status(500).json({ mensagem: 'Erro não esperado' });
};

const userErrorMiddleware : ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof HttpError) {
    res.status(err.code).json({ mensagem: err.message });
    return;
  }
  next(err);
};

export default { errorMiddleware, userErrorMiddleware };
