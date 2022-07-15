define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassA = /** @class */ (function () {
        function ClassA() {
            this.a = 1;
            this.c = 3;
        }
        ClassA.prototype.play = function () {
        };
        ClassA.run = function () {
        };
        Object.defineProperty(ClassA.prototype, "num", {
            get: function () {
                return 1;
            },
            set: function (v) {
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClassA, "step", {
            get: function () {
                return 2;
            },
            set: function (v) {
            },
            enumerable: false,
            configurable: true
        });
        ClassA.b = 2;
        ClassA.D = 4;
        return ClassA;
    }());
    exports.default = ClassA;
});
//# sourceMappingURL=ClassA.js.map