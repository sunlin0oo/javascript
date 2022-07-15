define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmitterTarget = /** @class */ (function () {
        function EmitterTarget() {
            this.disc = {};
        }
        EmitterTarget.prototype.addEventListener = function (type, hanlder) {
            if (!this.disc[type])
                this.disc[type] = [];
            if (this.disc[type].indexOf(hanlder) > -1)
                return;
            this.disc[type].push(hanlder);
        };
        EmitterTarget.prototype.dispatchEvent = function (evt) {
            if (!this.disc[evt.type] || this.disc[evt.type].length === 0)
                return;
            for (var i = 0; i < this.disc[evt.type].length; i++) {
                this.disc[evt.type][i].call(this, evt);
            }
        };
        return EmitterTarget;
    }());
    exports.default = EmitterTarget;
});
//# sourceMappingURL=EmitterTarget.js.map