// 想要webPack打包资源，必须引入该资源
import count from "./js/cout";
import sum from "./js/sum";
import "./css/index.css";
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"
// import "./stylus/index.styl"

console.log(count(2, 1));
console.log(sum(1,2,3,4));