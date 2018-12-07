class interventionVal {

    create(req, res, next) {

        req.check('userid').isLength({
                min: 6
            })
            .withMessage('Please provide a userid with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a userid with at most 10 characters')
            .isNumeric()
            .withMessage('You entered a non-integer in the userid field');

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

        req.check('comment').isLength({
                min: 2
            })
            .withMessage('Please enter a comment with minimum of 2 characters')
            .isLength({
                max: 1000
            })
            .withMessage('Please enter a comment with maximum of 1000 characters');

        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }

    fetchSpecificRecord(req, res, next) {
        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide an intervention id with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide an intervention id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the intervention id field');
        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }

    editLocation(req, res, next) {
        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide a intervention id with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide an intervention id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the intervention id field');
        req.check('userid').isLength({
                min: 6
            })
            .withMessage('Please provide a userid with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a userid with at most 10 characters')
            .isNumeric()
            .withMessage('You entered a non-integer in the userid field');

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

        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }

    editComment(req, res, next) {
        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide an intervention id with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide an intervention id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the intervention id field');
        req.check('userid').isLength({
                min: 6
            })
            .withMessage('Please provide a userid with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a userid with at most 10 characters')
            .isNumeric()
            .withMessage('You entered a non-integer in the userid field');
        req.check('comment').isLength({
                min: 2
            })
            .withMessage('Please enter a comment with minimum of 2 characters')
            .isLength({
                max: 1000
            })
            .withMessage('Please enter a comment with maximum of 1000 characters');


        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }

    deleteRecord(req, res, next) {
        req.check('id').isLength({
                min: 6
            })
            .withMessage('Please provide an intervention id with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide an intervention id with at most 10 characters')
            .isNumeric()
            .withMessage('You provided a non-integer in the intervention id field');
        req.check('userid').isLength({
                min: 6
            })
            .withMessage('Please provide a userid with at atleast 6 characters')
            .isLength({
                max: 10
            })
            .withMessage('Please provide a userid with at most 10 characters')
            .isNumeric()
            .withMessage('You entered a non-integer in the userid field');

        if (req.validationErrors()) {
            return res.status(400).json({
                status: 400,
                error: req.validationErrors()
            });
        }
        next();
    }
}

export const interventionValidation = new interventionVal();