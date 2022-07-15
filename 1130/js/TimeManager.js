define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeManager = /** @class */ (function () {
        function TimeManager() {
            this.updateList = [];
            this.ids = 0;
        }
        Object.defineProperty(TimeManager, "instance", {
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
        TimeManager.prototype.anmiation = function () {
            var _this = this;
            this.ids = requestAnimationFrame(function () { return _this.anmiation(); });
            this.updateList.forEach(function (item) { return item.update(); });
        };
        return TimeManager;
    }());
    exports.default = TimeManager;
});
//# sourceMappingURL=TimeManager.js.map