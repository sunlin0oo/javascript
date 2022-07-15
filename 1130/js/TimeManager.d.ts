export interface IUpdate {
    update(): void;
}
export default class TimeManager {
    private static _instance;
    updateList: Array<IUpdate>;
    private ids;
    canvas?: HTMLCanvasElement;
    private constructor();
    static get instance(): TimeManager;
    add(item: IUpdate): void;
    remove(item: IUpdate): void;
    private anmiation;
}
//# sourceMappingURL=TimeManager.d.ts.map