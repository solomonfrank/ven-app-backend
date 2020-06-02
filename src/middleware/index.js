const sendErr = (err, res) =>
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  sendErr(err, res);
};

export default errorHandler;
