define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rect = /** @class */ (function () {
        function Rect() {
            this.y = 0;
            // 创建div
            this.elem = document.createElement("div");
            // 设置样式--通过断言说明对象类型(CSSStyleDeclaration))
            Object.assign(this.elem.style, {
                width: "50px",
                height: "50px",
                position: "absolute",
                backgroundColor: "yellow"
            });
        }
        Rect.prototype.appendTo = function (parent) {
            if (typeof parent === "string")
                parent = document.querySelector(parent);
            if (parent instanceof HTMLElement)
                parent.appendChild(this.elem);
        };
        Rect.prototype.update = function () {
            this.y++;
            this.elem.style.top = this.y + "px";
        };
        return Rect;
    }());
    exports.default = Rect;
});
//# sourceMappingURL=Rect.js.map