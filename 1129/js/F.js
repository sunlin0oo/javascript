define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.F1 = void 0;
    var F1;
    (function (F1) {
        var Box1 = /** @class */ (function () {
            function Box1() {
            }
            Box1.prototype.play = function () {
                console.log("play1");
            };
            return Box1;
        }());
        F1.Box1 = Box1;
        F1.EVENT_ID = "BOX_ID1";
    })(F1 = exports.F1 || (exports.F1 = {}));
});
//# sourceMappingURL=F.js.map