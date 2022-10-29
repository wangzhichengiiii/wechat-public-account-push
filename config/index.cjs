/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfddadb4af259b0b3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '47b1ec5782aa34b9246da881fcffa8f1',

  PROVINCE: '安徽',
  CITY: '合肥',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSrja547S25hLauFuySvd1vf1kcs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mE3_3ButO96ax3iTxISh5YLZOzYtCrmMrw48MTzwy00',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '10-10',
        },
        {
          type: '节日', name: '周年纪念日', year: '2018', date: '08-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-08-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSrja5wZbmG32MjPEeFWQOxB43oA',
    }
  ],

}

module.exports = USER_CONFIG

