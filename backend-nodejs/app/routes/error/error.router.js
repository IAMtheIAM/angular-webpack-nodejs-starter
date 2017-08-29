module.exports = function (app) {
/// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        console.log(req.originalUrl);

        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

/// error handlers

// development error handler
// will print stacktrace

    if (app.get('env') === 'development' || app.get('env') === 'debug') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 200);

            // The route path is relative to whatever value is set for app.set('views', '/app/routes')
            res.render('error/error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    } else {

// production error handler
// no stacktraces leaked to user

        app.use(function (err, req, res, next) {
            res.status(err.status || 200);

            // The route path is relative to whatever value is set for app.set('views', '/app/routes')
            res.render('error/error', {
                message: err.message,
                error: {},
                title: 'error'
            });
        });
    }
}
