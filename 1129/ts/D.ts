import IPlay from "./IPlay";

export default class D{
    static play<T extends IPlay>(cls:{new ():T}):void{
       var a:T=new cls();
       a.play();
    }
}