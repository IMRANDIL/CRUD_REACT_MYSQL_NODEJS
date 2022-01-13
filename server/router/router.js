const router = require('express').Router();

const connection = require('../db/connection');


// create route for creating employee...

router.post('/createEmployee', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    const query = `INSERT INTO employee (name,age,country,position,wage) VALUES (?, ?, ?, ?, ?);`;
    connection.query(query, [name, age, country, position, wage], (err, result) => {
        if (err) throw err;
        res.status(201).send(`Employee ${name} inserted successfully.`)
    })
})




//show all the employee......

router.get('/showEmployee', (req, res) => {
    const query = `SELECT * FROM employee;`;
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json({ result });
    })
})









module.exports = router;