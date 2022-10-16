export default {
    "GET /users":{name:"age",age:24},
    "POST /users/login":(req,res)=>{
        console.log(req.body)// 获取前端传来的内容
        // 将信息发送给前端
        if(req.body.username === 'sunlin' && req.body.password === '123'){
            res.send({
                ok:1
            })
        }else{
            res.send({
                ok:0
            })
        }
    }
}