module.exports = {
    environment: 'dev',
    database: {
        dbName: 'qinqiyun',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'wangyuan-ky'
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wechatKey: {
        appId: 'wx345b42da830c9c3a',
        appSecret: '7b20db9df27346658d68ee9cdc10ac7f',
        weChatUrl: 'https://api.weixin.qq.com/cgi-bin/'
    }
}
