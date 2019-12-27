const express = require('express')
const router = express.Router() //настройка роутинга
router.use('/public', express.static('public')) //возможность использования всех файлов из папки public по пути /public
router.get('/', function(req, res) {
    //выбор пути
    res.sendFile(__dirname + '/public/index.html') //выбор файла
})
router.get('/public/gemini', function(req, res) {
    res.sendFile(__dirname + '/public/gemini.html')
})
router.get('/public/oven', function(req, res) {
    res.sendFile(__dirname + '/public/oven.html')
})
router.get('/public/kaban', function(req, res) {
    res.sendFile(__dirname + '/public/kaban.html')
})

module.exports = router //возможность использование всех методов router в други js файлах
