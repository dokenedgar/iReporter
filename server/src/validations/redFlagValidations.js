class redFlagVal {

    create(req, res, next) {
        if(!req.body.latitude){
            return res.status(400).json({
                status: 400,
                error: 'Please enter a latitude'
            });
        }
        req.check('latitude').isLength({
                min: 2
            })
            .withMessage('Please enter a latitude with minimum of 2 characters')
            .isLength({
                max: 30
            })
            .withMessage('Please enter a latitude with maximum of 30 characters')
            .isNumeric()
            .withMessage('Please enter a latitude with numeric values');
           
            if(!req.body.longitude){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a longitude'
                });
            }
        req.check('longitude').isLength({
                min: 2
            })
            .withMessage('Please enter a longitude with minimum of 2 characters')
            .isLength({
                max: 30
            })
            .withMessage('Please enter a longitude with maximum of 30 characters')
            .isNumeric()
            .withMessage('Please enter a longitude with numeric values');
          
            if(!req.body.comment){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a comment'
                });
            }    
        req.check('comment').isLength({
                min: 40
            })
            .withMessage('Please enter a comment with minimum of 40 characters')
            .isLength({
                max: 1000
            })
            .withMessage('Please enter a comment with maximum of 1000 characters');

            if(!req.body.title){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a title'
                });
            }    
        req.check('title').isLength({
                min: 10
            })
            .withMessage('Please enter a title with minimum of 10 characters')
            .isLength({
                max: 100
            })
            .withMessage('Please enter a title with maximum of 100 characters');

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

    fetchSpecificRedFlag(req, res, next) {

        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide a red-flag id with atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a red-flag id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the red-flag id field');
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

    editLocation(req, res, next) {

        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide a red-flag id with atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a red-flag id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the red-flag id field');
            if(!req.body.latitude){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter an latitude'
                });
            }
        req.check('latitude').isLength({
                min: 2
            })
            .withMessage('Please enter a latitude with minimum of 2 characters')
            .isLength({
                max: 30
            })
            .withMessage('Please enter a latitude with maximum of 30 characters')
            .isNumeric()
            .withMessage('Please enter a latitude with numeric values');

            if(!req.body.longitude){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter an longitude'
                });
            }
        req.check('longitude').isLength({
                min: 2
            })
            .withMessage('Please enter a longitude with minimum of 2 characters')
            .isLength({
                max: 30
            })
            .withMessage('Please enter a longitude with maximum of 30 characters')
            .isNumeric()
            .withMessage('Please enter a longitude with numeric values');

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

    editComment(req, res, next) {

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

            if(!req.body.comment){
                return res.status(400).json({
                    status: 400,
                    error: 'Please enter a comment'
                });
            }
        req.check('comment').isLength({
                min: 40
            })
            .withMessage('Please enter a comment with minimum of 40 characters')
            .isLength({
                max: 1000
            })
            .withMessage('Please enter a comment with maximum of 1000 characters');

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

    deleteRecord(req, res, next) {

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
    editStatus(req, res, next) {
        if ((!req.body.userType) || (req.body.userType !== 'true')) {
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

export const redFlagValidation = new redFlagVal();