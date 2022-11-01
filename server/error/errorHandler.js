const GlobalError = require("../error/GlobalError");

const sendProductionError = (err, req, res, next, statusCode) => {
    if (err.operational) {
        res.status(statusCode).json({
            message: err.message,
            success: false,
        })
    } else {
        res.status(500).json({
            message: "something went wrong",
            success: false,
        })
    }
}
const handleValidationError = (err) => {
    const errors = Object.values(err.errors).map((err) => err.message);
    const finalErr = errors.join(",");

    return new GlobalError(finalErr, 400);
};

const handleCastError = (err) => {
    return new GlobalError("Provide a valid Object ID!");
};
const handleJwtError=(err)=>{
    return new GlobalError('Token is not valid',403);
}
const handleJwtExprire=(err)=>{
    return new GlobalError('Token expired,Login again!',403);
}
module.exports = (err, req, res, next) => {
    statusCode = err.statusCode || 500;
    if (process.env.NODE_ENV == 'development') {
        res.status(statusCode).json({
            success: false,
            message: err.message,
            err: err,
            status: statusCode,
            stack: err.stack,
        })
    } else if (process.env.NODE_ENV == 'production') {
        if (err.name === "ValidationError") err = handleValidationError(err);
        if (err.name === "CastError") err = handleCastError(err);
        if (err.name === "JsonWebTokenError") err = handleJwtError(err);
        if (err.name === "TokenExpiredError") err = handleJwtExprire(err);
        sendProductionError(err, req, res, next, statusCode)
    }

}