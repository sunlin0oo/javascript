// 模拟后端传来的数据进行get post delte操作==>去.roadhogrc.mock.js进行导入
// http://localhost:8000/users 进行接口访问==>创建get请求
export default{
    // 模拟GET
    'GET /users' :{name:'sunlin',age:100,location:"shandong"},
    // 模拟POST
    'POST /users/login':(req,res)=>{
        console.log(req.body)
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