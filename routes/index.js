const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// GET Route: Render the form for the first time
router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});

// POST Route: Process submission and execute input checks
router.post('/',
    [
        // Check that 'name' exists and is not blank
        check('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        // Check that 'email' exists and is not blank
        check('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email')
    ],
    (req, res) => {
        // Collect validation results
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            // Validation succeeded
            res.send('Thank you for your registration!');
        } else {
            // Validation failed: Re-render the form, preserving user inputs
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body // Pass input body back to the view
            });
        }
    }
);

module.exports = router;