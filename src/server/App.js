"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-Parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(express.static(__dirname + './../')); //serves the index.html
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(cors());
    };
    //api
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/start/of/api/route', function (req, res) {
            //your logic here
        });
        this.app.use('/', router);
    };
    return App;
}());
;
exports["default"] = new App().app;
