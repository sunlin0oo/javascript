// this && this.__importDefault 当前this及this.__importDefault是否存在
// 或运算：前者存在返回前者，不存在则返回后者函数
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Box"], function (require, exports, Box_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Box_1 = __importDefault(Box_1);
    var b = new Box_1.default(4);
    b.play();
});
//# sourceMappingURL=main.js.map