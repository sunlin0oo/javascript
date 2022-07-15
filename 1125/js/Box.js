define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Box = /** @class */ (function () {
        function Box(_a) {
            this.a = 1;
            this.a = _a;
        }
        Box.prototype.play = function () {
            console.log(this.a);
        };
        return Box;
    }());
    exports.default = Box;
});
//# sourceMappingURL=Box.js.map