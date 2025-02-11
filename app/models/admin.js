const moment = require('moment');
const bcrypt = require('bcryptjs')
const {sequelize} = require('../../core/db')
const {Sequelize, Model} = require('sequelize')

// 定义管理员模型
class Admin extends Model {

}

// 初始用户模型
Admin.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // 管理员昵称
    nickname: Sequelize.STRING,
    // 管理员邮箱
    username: {
        type: Sequelize.STRING(128),
        unique: true
    },
    // 管理员密码
    password: {
        type: Sequelize.STRING,
        set(val) {
            // 加密
            const salt = bcrypt.genSaltSync(10);
            // val="Admin123"; salt="$2a$10$HZdJ1pfIpGcNAJwSf3JPwu"
            const psw = bcrypt.hashSync(val, salt);
            this.setDataValue("password", psw);
        }
    },
    // 用户openID
    openid: Sequelize.STRING,
    created_at: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }
}, {
    sequelize,
    tableName: 'admin'
})


module.exports = {
    Admin
}
