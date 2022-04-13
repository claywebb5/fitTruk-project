const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Get all classes (GET) 

router.get('/', (req, res) => {
    // GET route code here
    let queryText = `select * from classes
    order by date, start_time;`
    pool.query(queryText).then((result) =>{
        res.send(result.rows)
    }).catch((error)=>{
        res.sendStatus(500)
    }) 
});

// -------------------------- Get class details (GET)

router.get('/details/:id', (req, res) => {
    // GET route code here
    let queryText = `SELECT * FROM "classes" WHERE id = ${req.params.id} `;
    pool.query(queryText).then((result) =>{
        res.send(result.rows)
    }).catch((error)=>{
        res.sendStatus(500)
    }) 
});

// -------------------------- Get classlist for specific class (GET)

router.get('/myclasses', (req, res) => {
    // GET route code here

});


module.exports = router;
