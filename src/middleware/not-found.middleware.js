const notFoundMiddleware = (req, res) =>{
    return res.status(404).json({
        error: 'RESOURCE_NOT_FOUND',
        message: 'El recurso solicitado no existe.',
        requesId: req.requestId
    });
};

module.exports = notFoundMiddleware;