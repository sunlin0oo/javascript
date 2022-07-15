var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./ClassB"], function (require, exports, ClassB_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ClassB_1 = __importDefault(ClassB_1);
    var ClassC = /** @class */ (function (_super) {
        __extends(ClassC, _super);
        function ClassC() {
            var _this = _super.call(this) || this;
            _this.c = 10;
            _this.run();
            return _this;
        }
        ClassC.prototype.play = function () {
            _super.prototype.play.call(this);
        };
        // 重写、覆盖
        ClassC.prototype.run = function () {
            // override
            _super.prototype.run.call(this);
        };
        return ClassC;
    }(ClassB_1.default));
    exports.default = ClassC;
});
//# sourceMappingURL=ClassC.js.map