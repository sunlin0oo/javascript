var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./TimeManager"], function (require, exports, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TimeManager_1 = __importDefault(TimeManager_1);
    var Rect = /** @class */ (function () {
        function Rect(canvas) {
            this._x = 0;
            this._y = 0;
            this._color = "black";
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
            var _a;
            this.ctx.fillStyle = this.color;
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.fillRect(this.x, this.y, Rect.WIDTH, Rect.HEIGHT);
            // if(this.bool) return;
            // this.bool=true;
            // Promise.resolve().then(()=>{
            //     this.bool=false;
            //     (this.ctx as CanvasRenderingContext2D).fillStyle=this.color;
            //     this.ctx?.fillRect(this.x,this.y,Rect.WIDTH,Rect.HEIGHT);
            // })
        };
        Rect.prototype.update = function () {
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