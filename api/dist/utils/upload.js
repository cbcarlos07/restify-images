"use strict";
exports.__esModule = true;
var multer = require("multer");
var shortid = require("shortid");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/');
    },
    filename: function (req, file, cb) {
        var name = shortid.generate();
        var originalName = file.originalname.split('.');
        var ext = originalName[1];
        var nameFile = name + "." + ext;
        cb(null, nameFile);
    }
});
var upload = multer({ storage: storage });
exports["default"] = upload;
