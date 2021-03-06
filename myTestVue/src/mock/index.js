// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let datas = []
  for (let i = 0; i < 8; i++) {
    let data = {
      name: Random.cname(),
      date: Random.date(),
      city: Random.city()
    }
    datas.push(data)
  }

  return {
    data: datas
  }
}

Mock.mock('/user/login', 'get', simulateData)
