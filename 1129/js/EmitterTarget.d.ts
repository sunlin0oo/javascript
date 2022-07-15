import EmitterEvent from "./EmitterEvent";
export interface IEmitter {
    [key: string]: Array<Function | null>;
}
export default class EmitterTarget {
    private disc;
    constructor();
    addEventListener(type: string, listener: Function): void;
    removeEventListener(type: string, listener: Function): void;
    dispatchEvent(evt: EmitterEvent): void;
}
//# sourceMappingURL=EmitterTarget.d.ts.map