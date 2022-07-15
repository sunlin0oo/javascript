define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Circle = /** @class */ (function () {
        function Circle() {
            this.x = 0;
            this.elem = document.createElement("div");
            Object.assign(this.elem.style, {
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                position: "absolute",
                backgroundColor: "red"
            });
        }
        Circle.prototype.appendTo = function (parent) {
            if (typeof parent === "string")
                parent = document.querySelector(parent);
            if (parent instanceof HTMLElement)
                parent.appendChild(this.elem);
        };
        Circle.prototype.update = function () {
            this.x++;
            this.elem.style.left = this.x + "px";
        };
        return Circle;
    }());
    exports.default = Circle;
});
//# sourceMappingURL=Circle.js.map