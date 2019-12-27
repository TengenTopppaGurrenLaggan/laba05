const express = require('express')
const router = express.Router()
const db = require('./db_create.js') //готовая база данных
//отправка всех данных на сервер с базы данных
router.get('/', function(req, res) {
    db.all('SELECT * FROM Kids', (err, rows) => res.send(rows))
})
//получение данных
router.post('/', (req, res) => {
    const { customer, thing, price,age, } = req.body //обьект куда помещаются полученные данные
    db.run(
        `INSERT INTO Kids VALUES (NULL, '${customer}','${thing}','${price}','${age}')`
    ) //запрос на добавление в базу
    res.sendStatus(200) //отправка ответа(кода) о том что все успешно проведено
})
module.exports = router
