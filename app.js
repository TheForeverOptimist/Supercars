const express = require('express');
const path = require("path");
const Supercar = require("/Users/foreveroptimist/sei/repos/supercars/Supercars/model/Supercar.js");

const sampleCars = [
    {
        engine: 'v8',
        power: '450hp',
        topSpeed: '450mph',
        color: 'midnight blue',
        name: 'Lamborghini',
        model: 'huracan',
        year: '2015'

    },
    {
        engine: 'v12',
        power: '800hp',
        topSpeed: '550mph',
        color: 'space gray',
        name: 'Bugatti',
        model: 'Veyron Super Sport',
        year: '2023'

    },
    {
        engine: 'v12',
        power: '650hp',
        topSpeed: '400mph',
        color: 'ruby red',
        name: 'McLaren',
        model: 'P1',
        year: '2021'

    },
    {
        engine: 'v12',
        power: '700hp',
        topSpeed: '620mph',
        color: 'midnight blue',
        name: 'Aston Martin',
        model: 'Valkyrie',
        year: '2022'

    }
]








const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // res.send('Our car is faster than yours');
    res.render('index.ejs')
})
//
app.get('/carList', (req, res) => {
    res.render('carlist.ejs', {cars: sampleCars})
})

app.get('/newcar', (req, res) => {
    res.render('newcar.ejs');
})

app.post('/createCar', (req, res) => {
    console.log(req.body);
    sampleCars.push(req.body);
    res.redirect('/')
    console.log(sampleCars);
})

app.listen(4000, () => {
    console.log("I'm listening on port 4000");
})