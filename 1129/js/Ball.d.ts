import { IUpdate } from "./TimeManager";
export default class Ball implements IUpdate {
    elem: HTMLElement;
    x: number;
    constructor(y: number);
    appendTo(parent: string | HTMLElement): void;
    update(): void;
    private clickHandler;
}
//# sourceMappingURL=Ball.d.ts.map