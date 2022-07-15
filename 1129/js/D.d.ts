import IPlay from "./IPlay";
export default class D {
    static play<T extends IPlay>(cls: {
        new (): T;
    }): void;
}
//# sourceMappingURL=D.d.ts.map