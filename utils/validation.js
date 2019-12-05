const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = Joi.object().keys({
        name: Joi.string()
            .max(50)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
        confirmPassword: Joi.string()
            .min(6)
            .required(),
        phone: Joi.string()
            .min(11)
            .max(11)
            .required(),
        university: Joi.string()
            .max(50)
            .required(),
        faculty: Joi.string()
            .max(50)
            .required(),
        year: Joi.string().valid(
            'Preparatory',
            'First',
            'Second',
            'Third',
            'Fourth'
        ),
        code: Joi.string()
            .min(8)
            .max(8)
            .required(),
    });
    return schema.validate(data);
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .min(6)
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res
            .status(400)
            .json({ success: false, error: error.details[0].message });
    next();
};

exports.registerValidation = registerValidation;
exports.loginValidation = loginValidation;
