define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmitterEvent = /** @class */ (function () {
        function EmitterEvent(type, data) {
            this.currentTarget = null;
            this.type = type;
            this.data = data;
        }
        return EmitterEvent;
    }());
    exports.default = EmitterEvent;
});
//# sourceMappingURL=EmitterEvent.js.map