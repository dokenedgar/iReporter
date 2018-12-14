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

        if ((req.body.status !== 'under investigation') && (req.body.status !== 'rejected')&& (req.body.status !== 'resolved') ) {
            return res.status(400).send({ status: 400, error: 'Please status should be: under investigation, rejected or resolved.' });
          }
 
            
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

export const newAdminValidationObject = new adminValidation();