"use strict";
exports.__esModule = true;
var upload_1 = require("../utils/upload");
var restify = require("restify");
var initRoute = function (server) {
    server.get('/inicio', function (req, res, next) {
        res.send({ api: 'It works' });
        next();
    });
    server.post('/save', function (req, res, next) {
        console.log('campos', req.body);
        res.send(req.body);
        next();
    });
    server.get('/search/:id', function (req, res, next) {
        console.log('campos', req.params);
        res.send(req.params);
        next();
    });
    server.post('/saveFile', upload_1["default"].array('uploads[]', 12), function (req, res, next) {
        res.send({ msg: 'teste' });
        next();
    });
    server.get('/arquivo/*', restify.plugins.serveStatic({
        directory: './public',
        appendRequestPath: false
    }));
};
exports["default"] = initRoute;
