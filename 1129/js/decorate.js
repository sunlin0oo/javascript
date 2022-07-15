define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clearCanvas = void 0;
    function clearCanvas(thisArg) {
        return function (target, key, desc) {
            var method = desc.value;
            desc.value = function () {
                if (thisArg.canvas) {
                    var ctx = thisArg.canvas.getContext("2d");
                    // ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                    ctx.fillStyle = "#FFFFFF";
                    ctx.globalAlpha = 0.1;
                    ctx.fillRect(0, 0, thisArg.canvas.width, thisArg.canvas.height);
                    ctx.globalAlpha = 1;
                }
                return method.apply(thisArg);
            };
        };
    }
    exports.clearCanvas = clearCanvas;
});
//# sourceMappingURL=decorate.js.map