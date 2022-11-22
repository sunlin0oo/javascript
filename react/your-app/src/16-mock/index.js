import Mock from 'mockjs'
// 模拟接口
Mock.mock('/mock/usermsg', 'get', {
    code: '0',
    msg: 'success',
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})
