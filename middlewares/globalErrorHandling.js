const globalErrorHandling = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    errorStack: err.stack,
  });
};

export default globalErrorHandling;
