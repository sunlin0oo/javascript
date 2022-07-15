define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassB = /** @class */ (function () {
        function ClassB() {
            this.a = 1;
            this.b = 1;
            this.c = 1;
        }
        ClassB.prototype.play = function () {
            console.log("play");
        };
        ClassB.prototype.run = function () {
            console.log("run");
        };
        ClassB.prototype.getTime = function () {
            console.log("getTime");
        };
        return ClassB;
    }());
    exports.default = ClassB;
});
//# sourceMappingURL=ClassB.js.map