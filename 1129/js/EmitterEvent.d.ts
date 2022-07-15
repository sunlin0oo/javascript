import EmitterTarget from "./EmitterTarget";
export default class EmitterEvent {
    type: string;
    data?: object;
    currentTarget: EmitterTarget | null;
    constructor(type: string, data?: object);
}
//# sourceMappingURL=EmitterEvent.d.ts.map