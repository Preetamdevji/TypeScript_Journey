"use strict";
// Problem duplicate identiffier issue
// how to resolve it     ------>    {}
// what is watch mode    ------>    --w
// run without browser   ------>    node  
// let/const conversation      ------>    if any browser not support let or const then var will work fine

Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("code working fine ");
    };
    return App;
}());

var result = new App();
result.test();
