class userValidation {
    // eslint-disable-next-line class-methods-use-this
    create(req, res, next) {

        if(!req.body.firstname){
            return res.status(400).json({
                status: 400,
                error: 'Please enter a firstname'
            });
        }
        req.check('firstname').isLength({
                min: 2
            })
            .withMessage('Please provide a firstname with atleast 2 characters')
            .isLength({
                max: 20
            })
            .withMessage('Please provide a firstname with at most 20 characters')
            .isAlpha()
            .withMessage('Please provide a non-numeric firstname');
        
            if(!req.body.lastname){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a lastname'
                });
            }
        req.check('lastname').isLength({
                min: 2
            })
            .withMessage('Please provide a lastname with atleast 2 characters')
            .isLength({
                max: 20
            })
            .withMessage('Please provide a lastname with at most 20 characters')
            .isAlpha()
            .withMessage('Please provide a non-numeric lastname');

            if(!req.body.email){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter an email'
                });
            }
        req.check('email', 'Please provide a valid email address').isEmail();

        if(!req.body.phoneNumber){
            return res.status(400).json({
                status: 400,
                error: 'Please enter a phone number'
            });
        }
        req.check('phoneNumber').isLength({
                min: 11
            })
            .withMessage('Please provide a phone number with atleast 11 numbers')
            .isLength({
                max: 14
            })
            .withMessage('Please provide a phone number with at most 14 numbers')
            .isNumeric()
            .withMessage('You entered a non-numeric phone number');
        if(!req.body.username){
            return res.status(400).json({
                status: 400,
                error: 'Please enter a username'
            });
        }
        req.check('username').isLength({
                min: 5
            })
            .withMessage('Please provide a username with atleast 5 characters')
            .isLength({
                max: 20
            })
            .withMessage('Please provide a username with at most 15 characters');
            if(!req.body.password){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a password'
                });
            }
        req.check('password').isLength({
                min: 5
            })
            .withMessage('Please provide a password with atleast 5 characters')
            .isLength({
                max: 20
            })
            .withMessage('Please provide a password with at most 15 characters');

            let signInErrors = [];

        if (req.validationErrors()) {
            req.validationErrors().forEach(element => {
                signInErrors.push({ message: element.msg})
            });
            return res.status(400).json({
                status: 400,
                error: signInErrors
            });
        }
        next();
    }

    getUser(req, res, next) {
        if(!req.body.email){
            return res.status(400).json({
                status: 400,
                error: 'Please enter an email'
            });
        }
        req.check('email', 'Please provide a valid email address').isEmail();
        
        if(!req.body.password){
            return res.status(400).json({
                status: 400,
                error: 'Please enter a password'
            });
        }
        req.check('password').isLength({
                min: 5
            })
            .withMessage('Please provide a password with at atleast 5 characters')
            .isLength({
                max: 20
            })
            .withMessage('Please provide a password with at most 15 characters');

            let signInErrors = [];
            if (req.validationErrors()) {
                req.validationErrors().forEach(element => {
                    signInErrors.push({ message: element.msg})
                });
                return res.status(400).json({
                    status: 400,
                    error: signInErrors
                });
            }
        next();
    }
}

export const newUserValidationObject = new userValidation();