define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmitterTarget = /** @class */ (function () {
        function EmitterTarget() {
            // 用于存储事件函数
            this.disc = {};
        }
        EmitterTarget.prototype.addEventListener = function (type, hanlder) {
            //判断事件是否存在
            if (!this.disc[type])
                this.disc[type] = [];
            if (this.disc[type].indexOf(hanlder) > -1)
                return;
            // 将相同的事件的函数放入其中
            this.disc[type].push(hanlder);
        };
        EmitterTarget.prototype.dispatchEvent = function (evt) {
            console.log(evt.type);
            console.log("this", this);
            if (!this.disc[evt.type] || this.disc[evt.type].length === 0)
                return;
            for (var i = 0; i < this.disc[evt.type].length; i++) {
                // 修改this指向
                this.disc[evt.type][i].call(this, evt);
            }
        };
        return EmitterTarget;
    }());
    exports.default = EmitterTarget;
});
//# sourceMappingURL=EmitterTarget.js.map