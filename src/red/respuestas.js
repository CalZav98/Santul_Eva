exports.success = function (req, res, mensaje, status) {
    const statusCode = status || 200;
    const msgOk = mensaje || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: msgOk
    });
}

exports.error = function (req, res, mensaje, status) {
    const statusCode = status || 500;
    const msgErr = mensaje || 'Error Interno';
    res.status(status).send({
        error: true,
        status: statusCode,
        body: msgErr
    });
}