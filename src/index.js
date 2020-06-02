import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', async (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'welcome to ven api',
  })
);
app.all('*', async (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.originalUrl} does not exist on the server`,
  });
});
const PORT = process.env.PORT || 6000;

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
