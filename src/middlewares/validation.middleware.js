import { body, validationResult } from "express-validator";

export async function validateRegister(req, res, next) {
    const rules = [
        body('name').notEmpty().withMessage('Name should not be Empty.'),
        body('email').isEmail().withMessage('Enter valid email'),
        body('password').notEmpty().withMessage('Enter strong password')
    ]
    await Promise.all(rules.map(rule=>rule.run(req)));
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.render('home',{status:'goToRegister',errorMessages:result.array()});
    }else{
        next();
    }
}