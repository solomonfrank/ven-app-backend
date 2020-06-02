import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from './routes';
import errorHandler from './middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.get('/', async (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'welcome to ven api',
  })
);

app.use(apiRouter);
app.all('*', async (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.originalUrl} does not exist on the server`,
  });
});

app.use(errorHandler);
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening at port ${PORT}`);
});

process.on('unhandledRejection', () => {
  console.log('shutting down, unhandleRejection');

  server.close(() => {
    process.exit(1);
  });
});
