var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./decorate"], function (require, exports, decorate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeManager = /** @class */ (function () {
        function TimeManager() {
            this.updateList = [];
            this.ids = 0; //动画
        }
        Object.defineProperty(TimeManager, "instance", {
            //单例
            // public static getInstance():TimeManager
            // {
            //     return TimeManager._instance || (TimeManager._instance=new TimeManager());
            // }
            get: function () {
                return TimeManager._instance || (TimeManager._instance = new TimeManager());
            },
            enumerable: false,
            configurable: true
        });
        TimeManager.prototype.add = function (item) {
            if (this.updateList.indexOf(item) > -1)
                return;
            this.updateList.push(item);
            if (this.ids === 0 && this.updateList.length > 0) {
                this.anmiation();
            }
        };
        TimeManager.prototype.remove = function (item) {
            var index = this.updateList.indexOf(item);
            if (index < 0)
                return;
            this.updateList.splice(index, 1);
            if (this.updateList.length === 0 && this.ids > 0) {
                cancelAnimationFrame(this.ids);
                this.ids = 0;
            }
        };
        /**装饰器==>是在方法上面的通过修改descriptor，我们可以实现对方法进行重新描述。
         * 对于静态方法，第一个参数为类的构造函数。对于实例方法，为类的原型对象
            第二个参数为方法名。
            第三个参数为方法描述符。
            方法装饰器可以有返回值，返回值会作为方法的属性描述符
            https://blog.csdn.net/qq_36205941/article/details/124675122
        */
        TimeManager.prototype.anmiation = function () {
            var _this = this;
            console.log(this); //TimeManager只有方法没有属性
            // 这样保持this统一
            this.ids = requestAnimationFrame(function () { return _this.anmiation(); });
            this.updateList.forEach(function (item) { return item.update(); });
        };
        __decorate([
            (0, decorate_1.clearCanvas)(TimeManager.instance) //执行函数
        ], TimeManager.prototype, "anmiation", null);
        return TimeManager;
    }());
    exports.default = TimeManager;
});
//# sourceMappingURL=TimeManager.js.map