const sqlite3 = require('sqlite3').verbose() //модуль базы данных
const DB_PATH = 'mydatabase.db' //имя базы данных(путь)
const DB = new sqlite3.Database(DB_PATH) //коннект к файлу

//задание параметров
DB.serialize(() => {
    //запрос на создание если не существует
    DB.run(
        'CREATE TABLE IF NOT EXISTS Kids (id INTEGER PRIMARY KEY UNIQUE, thing TEXT, price TEXT, customer TEXT,age TEXT)'
    )
})
module.exports = DB
