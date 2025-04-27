const joi = require("joi");

exports.signupSchema = joi.object({
    email:joi.string().min(6).max(60).required().email({tlds:{allow:['com','net']}}),
    password:joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-z])(?=.*d).{8,}$')),
});
exports.signinSchema = joi.object({
    email:joi.string().min(6).max(60).required().email({tlds:{allow:['com','net']}}),
    password:joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-z])(?=.*d).{8,}$')),
});