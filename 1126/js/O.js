define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.H = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
    var A = /** @class */ (function () {
        function A() {
            this.num = 1;
            this.step = 2;
        }
        A.prototype.a = function () {
        };
        A.prototype.b = function () {
        };
        return A;
    }());
    exports.A = A;
    var B = /** @class */ (function () {
        function B() {
            this.step = 3;
            this.sum = 5;
        }
        B.prototype.b = function () {
        };
        B.prototype.c = function () {
        };
        return B;
    }());
    exports.B = B;
    // C,D类实现IE接口，只要有一个类返回类型是IE且constructor有一个number参数，就可以使用ID接口
    var C = /** @class */ (function () {
        function C(a) {
            this.a = a;
        }
        C.prototype.tick = function () {
        };
        return C;
    }());
    exports.C = C;
    var D = /** @class */ (function () {
        function D(b) {
            this.b = b;
        }
        D.prototype.tick = function () {
        };
        return D;
    }());
    exports.D = D;
    var E = /** @class */ (function () {
        function E() {
            this.sum = 1;
        }
        E.prototype.play = function () {
        };
        E.prototype.tick = function () {
        };
        E.prototype.c = function () {
        };
        return E;
    }());
    exports.E = E;
    var F = /** @class */ (function () {
        function F() {
            this.num = 1;
        }
        F.prototype.runTime = function () {
            console.log("aaa");
        };
        return F;
    }());
    exports.F = F;
    var H = /** @class */ (function () {
        function H() {
            this.num = 2;
        }
        H.prototype.getSum = function () {
        };
        H.prototype.runTime = function () {
            console.log("bbb");
        };
        return H;
    }());
    exports.H = H;
});
//# sourceMappingURL=O.js.map