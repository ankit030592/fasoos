module.exports = {
    db: {
        database: 'fasoos',
        host: 'db4free.net',
        port: 3306,
        user: 'fasoos',
        password: 'fasoos'
    },
    mysql_date_format: 'YYYY-MM-DD HH:MM:SS',
    sequelize: {
        options: {
            timestamps: false,
            freezeTableName: true
        }
    }
}