const GlobalError=require('../error/GlobalError');
const jwt=require('jsonwebtoken');
const {promisify}=require('util');
const {asyncCatch}=require('../utils/asyncCatch');
const User=require('../model/user')
const protectAuth = asyncCatch(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
        // console.log(token);
      }
      // console.log(req.headers);
      if (!token) {
      return next(
        new GlobalError(
          'You are not logged in! Please log in to get access.',
          401
        )
      );
    }
  
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new GlobalError(
          'The user belonging to this token does no longer exist.',
          401
        )
      );
    }
  
    // Grant Access to Protected Route
    req.user = currentUser;
    next();
  });
  module.exports=protectAuth;