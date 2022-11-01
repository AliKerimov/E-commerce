const User = require('../model/user')
const { asyncCatch } = require('../utils/asyncCatch')
const GlobalError = require("../error/GlobalError");
const jwt = require("jsonwebtoken");
const sendMail=require('../utils/email');
const crypto=require("crypto");
const signJwt = id => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
    return token;
}
exports.signup = asyncCatch(async (req, res, next) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    });


    //give permission

    const token = signJwt(user._id);
    res.status(201).json({
        success: true,
        user,
        token,
    })
});

exports.login = asyncCatch(async (req, res, next) => {
    //email and password is exists
    const { email, password } = req.body;
    if (!email || !password) return next(new GlobalError("Please provide email and password!", 404));
    //is there a person with this email
    const user = await User.findOne({ email });
    //correct password
    const pass = await user.checkPasswords(password);

    if (!user || !pass) return next(new GlobalError("Please check email and password!", 403));



    //sign token
    const token = signJwt(user._id);

    res.status(201).json({
        success: true,
        token,
        user
    })

});


exports.forgetPassword=asyncCatch(async(req,res,next)=>{
    const {email}=req.body;
    const user=await User.findOne({email});
    if(!user) return next(new GlobalError('User with this email does not exists!',404));
    
    const resetToken=await user.hashResetPassword();
    await user.save({validateBeforeSave:false});

    const urlString=`${req.protocol}://${req.get("host")}/${resetToken}`;
    await sendMail({email:user.email,subject:"Change password",message:`Please follow the link ${urlString}`})
    console.log(urlString);
    res.status(200).json({
        success:true,
        message:"Email sent!"

    })
})
exports.resetPassword=asyncCatch(async(req,res,next)=>{
    const token=req.params.token;
    const {password,confirmPassword}=req.body;
    const hashedPass= crypto.createHash('sha256').update(token).digest('hex');


    const user=await User.findOne({resetToken:hashedPass,resetTime:{$gt:new Date()}});
    if(!user) return next(new GlobalError("Token wrong or expired!"))
    user.password=password;
    user.confirmPassword=confirmPassword;
    user.resetToken=undefined;
    user.resetTime=undefined;
    await user.save();

    const accessToken=signJwt(user._id);

    res.json({
        success:true,
        token:accessToken
    })
    
})