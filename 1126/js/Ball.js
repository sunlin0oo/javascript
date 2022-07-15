define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ball = /** @class */ (function () {
        function Ball() {
            this.width = 1;
            this.ID = "Ball_Id";
            this.height = 2;
        }
        Ball.prototype.run = function () {
        };
        Ball.prototype.play = function (a, b) {
            return a + b;
        };
        Object.defineProperty(Ball.prototype, "num", {
            get: function () {
                return 1;
            },
            set: function (v) {
            },
            enumerable: false,
            configurable: true
        });
        return Ball;
    }());
    exports.default = Ball;
});
//# sourceMappingURL=Ball.js.map