const express = require('express')
const router = new express.Router();
const errors = require('restify-errors');
const User = require('../../db/schema/users')

/* Get all users */
router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users);
        next();
    } catch (error) {
        return next(new errors.InvalidContentError(error));
    }
})

/* Get user with id */
router.get('/users/:id', async (req, res, next) => {
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
    const {login, password, email} = req.body;
    const user = new User({
        login    : login,
        email    : email,
        password : password
    });

    try {
        const newUser = await user.save();
        res.status(201).send(newUser)
        next();
    } catch (error) {
        return next(new errors.InternalError(error.message))
    }
});

/* Update user */
router.put('/update/:id', async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).send(user)
        next();
    } catch (error) {
        return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${id}`));
    }
});

/* Delete user */
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.id })
        res.status(200).send(user)
        next();
    } catch (error) {
        return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${id}`));
    }
});

module.exports = router;