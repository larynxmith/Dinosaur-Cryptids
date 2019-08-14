let fs = require('fs')
let router = require('express').Router()

router.get('/', (req, res) => {
    //get data
    let dinosaurs = fs.readFileSync(__dirname + "/../dinosaurs.json")
    // parse JSON from that data
    let dinoData = JSON.parse(dinosaurs)
    res.render('dinosaurs/index', {
        myDinos: dinoData
    })
})

router.post('/', (req, res) => {
    //read Dinosaurs file
    let dinosaurs = fs.readFileSync(__dirname + "/../dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs)
    //add to dinosaurs array
    dinoData.push(req.body)
    // save new dino to dinosaurs.json
    fs.writeFileSync(__dirname + "/../dinosaurs.json", JSON.stringify(dinoData))

    res.redirect('/dinosaurs')
})

router.get('/new', (req, res) => {
    res.render('dinosaurs/new')
})

router.get('/:idx', (req, res) => {
    let dinosaurs = fs.readFileSync(__dirname + "/../dinosaurs.json")
    let dinoData = JSON.parse(dinosaurs)
    // get idx value from url parameters
    let dinoIndex = parseInt(req.params.idx)
    res.render('dinosaurs/show', {
        myDino: dinoData[dinoIndex]
    })
})




module.exports = router