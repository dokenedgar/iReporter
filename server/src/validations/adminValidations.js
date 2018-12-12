class adminValidation {
    // eslint-disable-next-line class-methods-use-this
    editStatus(req, res, next) {
        if (!req.body.userType) {
            return res.status(403).json({
                status: 403,
                error: 'You are not allowed to perform this operation.'
            });
        }
        req.check('id').isLength({
            min: 6
        })
        .withMessage('Please provide a red-flag id with at atleast 6 characters')
        .isLength({
            max: 10
        })
        .withMessage('Please provide a red-flag id with at most 10 characters')
        .isNumeric()
        .withMessage('You provided a non-integer in the red-flag id field');

        req.check('type').isLength({
                min: 8
            })
            .withMessage('Please enter type, between red-flag or intervention')
            .isLength({
                max: 14
            })
            .withMessage('Please enter type, between red-flag or intervention')
            
            

        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }

}

export const newAdminValidationObject = new adminValidation();