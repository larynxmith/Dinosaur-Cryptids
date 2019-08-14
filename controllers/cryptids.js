let fs = require('fs')
let router = require('express').Router()

router.get('/', (req, res) => {
    let cryptids = fs.readFileSync(__dirname + "/../cryptids.json")
    let cryptidData = JSON.parse(cryptids)
    res.render('cryptids/index', {
        myCryptids: cryptidData
    })
})

router.post('/', (req, res) => {
    let cryptids = fs.readFileSync(__dirname + "/../cryptids.json")
    let cryptidData = JSON.parse(cryptids)

    cryptidData.push(req.body)

    fs.writeFileSync(__dirname + "/../cryptids.json", JSON.stringify(cryptidData))

    res.redirect('/cryptids')
})

router.get('/new', (req, res) => {
    res.render('cryptids/new')
})

router.get('/:idx', (req, res) => {
    let cryptids = fs.readFileSync(__dirname + "/../cryptids.json")
    let cryptidData = JSON.parse(cryptids)
    // get idx value from url parameters
    let cryptidIndex = parseInt(req.params.idx)
    res.render('cryptids/show', {
        myCryptid: cryptidData[cryptidIndex]
    })
})

module.exports = router