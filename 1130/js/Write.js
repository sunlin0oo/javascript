define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Write = /** @class */ (function () {
        function Write(canvas) {
            var _this = this;
            this.widthCount = 5;
            this.widthBottom = 20;
            this.lineWidth = 50;
            this.Gap = 10;
            this.lineWidthList = [];
            this.widthValue = 1;
            this.lineColor = "black";
            this.eraser = false;
            this.colorArr = ["#F00", "#F90", "#FF0", "#0F0", "#0F9", "#0FF", "#00F", "#90F", "#F0F"];
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
            this.mouseBind = function (e) { return _this.mouseHandler(e); };
            canvas.addEventListener("mousedown", this.mouseBind);
            canvas.addEventListener("click", function (e) { return _this.clickHandler(e); });
            this.drawBn();
        }
        Write.prototype.drawBn = function () {
            var point;
            for (var i = 0; i < this.widthCount; i++) {
                point = this.getPoint(i, this.widthBottom, this.widthCount);
                this.drawRectWidth(point[0], point[1], (i + 1) * 2);
                this.lineWidthList.push([point[0], point[1]]);
            }
            for (var j = 0; j < this.colorArr.length; j++) {
                point = this.getPoint(j - this.widthCount, this.widthBottom, this.colorArr.length);
                this.drawRectColor(point[0], point[1], this.colorArr[j]);
                this.lineWidthList.push([point[0], point[1]]);
            }
        };
        Write.prototype.getPoint = function (i, bottom, len) {
            var x = this.canvas.width - (this.lineWidth + this.Gap) * (len - i);
            var y = this.canvas.height - bottom - this.lineWidth;
            return [x, y];
        };
        Write.prototype.mouseHandler = function (e) {
            if (e.offsetY > 320)
                return;
            if (this.hitTest(e.offsetX, e.offsetY) !== -1) {
                this.ctx.beginPath();
                return;
            }
            if (e.type === "mousedown") {
                this.ctx.beginPath();
                this.ctx.lineWidth = this.widthValue;
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.moveTo(e.offsetX, e.offsetY);
                this.canvas.addEventListener("mousemove", this.mouseBind);
                this.canvas.addEventListener("mouseup", this.mouseBind);
                this.canvas.addEventListener("mouseleave", this.mouseBind);
            }
            else if (e.type === "mousemove") {
                if (!this.eraser) {
                    this.ctx.lineTo(e.offsetX, e.offsetY);
                    this.ctx.stroke();
                }
                else {
                    this.ctx.clearRect(e.offsetX - 10, e.offsetY - 10, 20, 20);
                }
            }
            else {
                this.canvas.removeEventListener("mousemove", this.mouseBind);
                this.canvas.removeEventListener("mouseup", this.mouseBind);
                this.canvas.removeEventListener("mouseleave", this.mouseBind);
            }
        };
        Write.prototype.clickHandler = function (e) {
            var value = this.hitTest(e.offsetX, e.offsetY);
            if (value < this.widthCount) {
                this.widthValue = value || 1;
            }
            else {
                this.lineColor = this.colorArr[value - this.widthCount];
            }
        };
        Write.prototype.hitTest = function (x, y) {
            for (var i = 0; i < this.lineWidthList.length; i++) {
                if (x >= this.lineWidthList[i][0] && x <= this.lineWidthList[i][0] + this.lineWidth && y >= this.lineWidthList[i][1] && y <= this.lineWidthList[i][1] + this.lineWidth) {
                    return i;
                }
            }
            return -1;
        };
        Write.prototype.drawRectWidth = function (x, y, w) {
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.strokeRect(x, y, this.lineWidth, this.lineWidth);
            this.ctx.lineWidth = w;
            this.ctx.moveTo(x + 25, y + 15);
            this.ctx.lineTo(x + 25, y + 35);
            this.ctx.stroke();
        };
        Write.prototype.drawRectColor = function (x, y, color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, this.lineWidth, this.lineWidth);
        };
        Write.prototype.clear = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.widthValue = 1;
            this.lineColor = "black";
            this.drawBn();
        };
        return Write;
    }());
    exports.default = Write;
});
//# sourceMappingURL=Write.js.map