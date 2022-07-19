var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./TimeManager"], function (require, exports, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TimeManager_1 = __importDefault(TimeManager_1);
    var Rect = /** @class */ (function () {
        // 从外部带入canvas，防止多次产生
        function Rect(canvas) {
            this._x = 0;
            this._y = 0;
            this._color = "black";
            // 控制渲染次数
            this.bool = false;
            this.speedX = 2;
            this.speedY = 2;
            this.canvas = canvas;
            this.ctx = this.canvas.getContext("2d");
            TimeManager_1.default.instance.add(this);
        }
        Object.defineProperty(Rect.prototype, "x", {
            get: function () {
                return this._x;
            },
            // 设置初始位置_x,_y 
            set: function (v) {
                this._x = v;
                this.drawRect();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (v) {
                this._y = v;
                this.drawRect();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (c) {
                this._color = c;
                this.drawRect();
            },
            enumerable: false,
            configurable: true
        });
        Rect.prototype.drawRect = function () {
            var _this = this;
            // (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
            // ?:作用是 如果存在this.ctx，才会进行执行，没有则不执行
            // this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
            // 利用Promise对渲染进行一次调用
            if (this.bool)
                return;
            this.bool = true;
            Promise.resolve().then(function () {
                var _a;
                _this.bool = false;
                _this.ctx.fillStyle = _this.color;
                (_a = _this.ctx) === null || _a === void 0 ? void 0 : _a.fillRect(_this.x, _this.y, Rect.WIDTH, Rect.HEIGHT);
            });
        };
        Rect.prototype.update = function () {
            // 碰到边界反弹
            if (this.x < 0 || this.x > this.canvas.width - Rect.WIDTH)
                this.speedX = -this.speedX;
            if (this.y < 0 || this.y > this.canvas.height - Rect.HEIGHT)
                this.speedY = -this.speedY;
            this.x += this.speedX;
            this.y += this.speedY;
        };
        Rect.WIDTH = 50;
        Rect.HEIGHT = 50;
        return Rect;
    }());
    exports.default = Rect;
});
//# sourceMappingURL=Rect.js.map