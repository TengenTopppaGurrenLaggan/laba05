const express = require('express') //подключение модуля
const port = process.env.PORT || '3000' //порт
const indexRouter = require('./route') //подключение роутинга сайтов
const usersRouter = require('./db_select_insert') //подключение базы данных
const app = express() //создание сервера
app.use(express.json()) //возможность использовать файлы json
app.use('/', indexRouter) //подключение сайтов к серверу
app.use('/api', usersRouter) //подключение базы данных
app.listen(port) //прослушивание порта(ожидание)
