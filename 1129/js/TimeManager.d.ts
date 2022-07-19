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
    /**装饰器==>是在方法上面的通过修改descriptor，我们可以实现对方法进行重新描述。
     * 对于静态方法，第一个参数为类的构造函数。对于实例方法，为类的原型对象
        第二个参数为方法名。
        第三个参数为方法描述符。
        方法装饰器可以有返回值，返回值会作为方法的属性描述符
        https://blog.csdn.net/qq_36205941/article/details/124675122
    */
    private anmiation;
}
//# sourceMappingURL=TimeManager.d.ts.map