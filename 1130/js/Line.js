var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./TimeManager"], function (require, exports, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TimeManager_1 = __importDefault(TimeManager_1);
    var Line = /** @class */ (function () {
        function Line(canvas) {
            this.arr = [[50, 50], [150, 50], [150, 100], [250, 100], [250, 150], [200, 150], [200, 200], [50, 50]];
            this.speed = 100;
            this.speedX = 0;
            this.speedY = 0;
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
            this.arr = this.arr.reverse();
            this.currentPoint = this.arr.pop();
            this.ctx.beginPath();
            this.ctx.moveTo(this.currentPoint[0], this.currentPoint[1]);
            this.x = this.currentPoint[0];
            this.y = this.currentPoint[1];
            TimeManager_1.default.instance.add(this);
        }
        Line.prototype.update = function () {
            if (this.x === this.currentPoint[0] && this.y === this.currentPoint[1]) {
                this.currentPoint = this.arr.pop();
                if (!this.currentPoint) {
                    TimeManager_1.default.instance.remove(this);
                    return;
                }
                this.speedX = (this.currentPoint[0] - this.x) / this.speed;
                this.speedY = (this.currentPoint[1] - this.y) / this.speed;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.ctx.lineTo(this.x, this.y);
            this.ctx.stroke();
        };
        return Line;
    }());
    exports.default = Line;
});
//# sourceMappingURL=Line.js.map