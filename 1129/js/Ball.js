var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./TimeManager"], function (require, exports, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TimeManager_1 = __importDefault(TimeManager_1);
    var Ball = /** @class */ (function () {
        function Ball(y) {
            this.x = 0;
            this.elem = document.createElement("div");
            // 设置样式
            Object.assign(this.elem.style, {
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                position: "absolute",
                left: "0px",
                top: y + "px",
            });
        }
        // 将元素添加到页面上
        Ball.prototype.appendTo = function (parent) {
            var _this = this;
            if (typeof parent === "string")
                parent = document.querySelector(parent);
            if (parent)
                parent.appendChild(this.elem);
            // TimeManager.instance调用get，返回一个 TimeManager实例
            TimeManager_1.default.instance.add(this);
            this.elem.addEventListener("click", function (e) { return _this.clickHandler(e); });
        };
        Ball.prototype.update = function () {
            this.x++;
            this.elem.style.left = this.x + "px";
        };
        Ball.prototype.clickHandler = function (e) {
            TimeManager_1.default.instance.remove(this);
            this.elem.remove();
        };
        return Ball;
    }());
    exports.default = Ball;
});
//# sourceMappingURL=Ball.js.map