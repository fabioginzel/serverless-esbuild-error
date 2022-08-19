
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import express from 'express';
import errorsMiddleware from './middleware/ErrorMiddleware';
import serveless from 'serverless-http';
import firebaseAuth from './auth/FirebaseAuth';
import authMiddleWare from "firebase-auth-express-middleware";


const app = express();

app.use(logger('dev'));
app.use(cors({ maxAge: 86400 }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/ack', (req, res) => {
  res.status(200).send({ ack: Date.now() });
});

app.use(authMiddleWare.authn(firebaseAuth));

app.use(errorsMiddleware.userErrorMiddleware);
app.use(errorsMiddleware.errorMiddleware);

export const run = serveless(app);

export default app;
