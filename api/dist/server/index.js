"use strict";
exports.__esModule = true;
var restify = require("restify");
var corsMiddleware = require("restify-cors-middleware");
var environment_1 = require("../environment");
var routes_1 = require("../routes");
var bodyParser = require("body-parser");
var Server = /** @class */ (function () {
    function Server() {
        this.config();
    }
    Server.prototype.config = function () {
        this.server = restify.createServer();
        this.port = environment_1["default"].PORT_SERVER;
    };
    Server.prototype.listen = function () {
        var _this = this;
        //this.server.use(restify.plugins.bodyParser())        
        //this.server.use(restify.plugins.urlEncodedBodyParser())
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.enableCors();
        this.configRoutes();
        this.server.listen(this.port, function () {
            console.log("Server listening on port " + _this.port);
        });
    };
    Server.prototype.enableCors = function () {
        var cors = corsMiddleware({
            preflightMaxAge: 5,
            origins: ['*'],
            allowHeaders: ['*'],
            exposeHeaders: ['*']
        });
        this.server.pre(cors.preflight);
        this.server.use(cors.actual);
    };
    Server.prototype.configRoutes = function () {
        routes_1["default"](this.server);
    };
    return Server;
}());
var server = new Server();
exports["default"] = server;
