define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmitterTarget = /** @class */ (function () {
        function EmitterTarget() {
            this.disc = {};
        }
        EmitterTarget.prototype.addEventListener = function (type, listener) {
            if (!this.disc[type])
                this.disc[type] = [];
            if (this.disc[type].indexOf(listener) > -1)
                return;
            this.disc[type].push(listener);
        };
        EmitterTarget.prototype.removeEventListener = function (type, listener) {
            if (!this.disc[type])
                return;
            var index = this.disc[type].indexOf(listener);
            if (index < 0)
                return;
            this.disc[type][index] = null;
        };
        EmitterTarget.prototype.dispatchEvent = function (evt) {
            if (!this.disc[evt.type])
                return;
            evt.currentTarget = this;
            for (var i = 0; i < this.disc[evt.type].length; i++) {
                if (this.disc[evt.type][i] === null)
                    continue;
                this.disc[evt.type][i].call(this, evt);
            }
            for (var j = 0; j < this.disc[evt.type].length;) {
                if (this.disc[evt.type][j] === null) {
                    this.disc[evt.type].splice(j, 1);
                    continue;
                }
                j++;
            }
        };
        return EmitterTarget;
    }());
    exports.default = EmitterTarget;
});
//# sourceMappingURL=EmitterTarget.js.map