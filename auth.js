function authenticate(req, res, next) {
    if (!req.session || !req.session.user) {
        const err = new Error('You need to login!');
        err.statusCode = 401;
        next(err);
    }
    next();
}

module.exports = authenticate;