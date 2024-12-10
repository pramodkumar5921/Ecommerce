const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// Register a User
exports.registerUser = catchAsyncErrors( async(req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl"
        }
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token,
    });
});

exports.loginUser = catchAsyncErrors(async (req,res,next)=>{

    const {email,password} = req.body;

    // checking if User has given password and email both

    if(!email || !password){
        return next(new ErrorHander("Please Enter Email & Password",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);


    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        token,
    });

});