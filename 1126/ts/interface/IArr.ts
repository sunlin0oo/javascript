export interface IRect{
    width:number;
    height:number;
    left:number;
    top:number;
    right:number;
    bottom:number;
}
export default interface IArr{
    // 索引（[index:number]索引是数值，在Ibox中是String）的每一项都是IRect类型
    [index:number]:IRect;
    a:number;
}