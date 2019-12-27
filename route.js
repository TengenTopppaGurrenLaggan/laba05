const express = require('express')
const router = express.Router() //настройка роутинга
router.use('/public', express.static('public')) //возможность использования всех файлов из папки public по пути /public
router.get('/', function(req, res) {
    //выбор пути
    res.sendFile(__dirname + '/public/index.html') //выбор файла
})


module.exports = router //возможность использование всех методов router в други js файлах
