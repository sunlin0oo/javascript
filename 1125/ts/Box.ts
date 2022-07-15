export default class Box{
    private a:number=1;
    public constructor(_a:number){
        this.a=_a;
    }
    public play():void{
        console.log(this.a);
    }
}