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

app.get('/', async(req, res) => {
    const db = await Supercar.create({
        'engine': 'v8',
        'power': '450hp',
        'topSpeed': '450mph',
        'color': 'midnight blue',
        'name': 'Lamborghini',
        'model': 'huracan',
        'year': '2015'
    });
    console.log(db);
    res.render('index.ejs')
})
//
app.get('/carList', (req, res) => {
    res.render('carlist.ejs', {cars: sampleCars})
})

app.get('/newcar', (req, res) => {
    res.render('newcar.ejs');
})

app.get('/delete/:name', (req, res) => {
   sampleCars.forEach((Car) => {
    if(req.params.name === Car.name) {
        sampleCars.pop(Car);
    }
   })
console.log(sampleCars);
res.redirect('/');
})

app.get('/update/:name', (req, res) => {
    let carToUpdate = {};
    sampleCars.forEach((Car) => {
        if(req.params.name === Car.name) {
            carToUpdate = Car
        }
       })
       res.render('pimp.ejs', {carToUpdate: carToUpdate});
})


app.post('/update/:name', (req, res) => {
    console.log(req.body);
    sampleCars.forEach((Car) => {
        if(req.params.name === Car.name) {
            Car.name = req.body.name
            Car.model = req.body.model
            Car.color = req.body.color
            Car.year = req.body.year
            Car.engine = req.body.engine
            Car.power = req.body.power
            Car.topSpeed = req.body.topSpeed
        }
       })
    res.redirect('/');
    console.log(sampleCars);
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