const express = require('express')
const router  = new express.Router();
const errors  = require('restify-errors');
const bcrypt  = require('bcryptjs');
const User    = require('../../db/schema/users');
const auth    = require('../../middleware/auth/auth');
const jwt     = require('jsonwebtoken');
const env     = require('../../config/env')
const rjwt       = require('restify-jwt-community');

/* Get all users */
router.get('/users', rjwt({ secret: env.JWT_KEY }), async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users);
        next();
    } catch (error) {
        return next(new errors.InvalidContentError(error));
    }
})

/* Get user with id */
router.get('/users/:id', rjwt({ secret: env.JWT_KEY }), async (req, res, next) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);
        res.send(user);
        next();
    } catch (error) {
        return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${id}`));
    }
})

/* Add users */
router.post('/registration', async (req, res, next) => {
    try {

        const {login, password, email} = req.body;
        const user = new User({
            login    : login,
            email    : email,
            password : password
        });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, async function(error, hash) {
                // Hash password
                user.password = hash;
                // Save User
                const newUser = await user.save();
                res.status(201).send(newUser)
                next();        
            });
        })
    } catch(error) {
        return next(new errors.InternalError(error.message))
    }
});

// Auth User
router.post('/auth', async (req, res, next) => {
    const { login, password } = req.body;

    try {
        // Authenticate user
        const user = await auth.authenticate(login, password);

        // Create JWT
        const token = jwt.sign(user.toJSON(), env.JWT_KEY, {
            expiresIn: '12h'
        });

        const { iat, exp } = jwt.decode(token);

        // Respond with token
        res.send({ iat, exp, token });

        next();
    } catch(error) {
        // User unauthorized
        return next(new errors.UnauthorizedError(error));
    }
});

/* Update user */
router.put('/update/:id', rjwt({ secret: env.JWT_KEY }), async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).send(user)
        next();
    } catch (error) {
        return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${id}`));
    }
});

/* Delete user */
router.delete('/delete/:id', rjwt({ secret: env.JWT_KEY }), async (req, res, next) => {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.id })
        res.status(200).send(user)
        next();
    } catch (error) {
        return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${id}`));
    }
});

module.exports = router;