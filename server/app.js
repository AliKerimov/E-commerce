const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')
const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });
const GlobalError = require("./error/GlobalError");
const globaleErrorHandler = require("./error/errorHandler");
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const ordersRouter = require('./routes/ordersRouter');
const rateLimit = require('express-rate-limit');
const helmet=require("helmet")
const app = express();
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:"Limit exceeded!"
})
app.use(limiter);

app.use(helmet());
app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

app.use('/product', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/user', userRouter);
app.use('/orders', ordersRouter);

app.use((req, res, next) => {
    next(new GlobalError(`${req.originalUrl} does not exist!`, 500));
});

//! Global Error Handler
app.use(globaleErrorHandler);


//!Start Application
const DB = process.env.CONNECTION_STRING.replace("<password>", process.env.DB_PASSWORD);


mongoose.connect(DB, (err) => {
    if (err) { return console.log(err); }
    console.log('Mongo Db connected.');
    const PORT = process.env.PORT;
    app.listen(PORT, () => { console.log('Server running hi'); })
})
