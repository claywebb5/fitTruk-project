const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Get all classes (GET) (Everyone can see this)

router.get('/', (req, res) => {
    // GET route code here
    let queryText = `select * from classes
    order by date, start_time;`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
});

// -------------------------- Get class details (GET)(Everyone can see this)

router.get('/details/:id', (req, res) => {
    // GET route code here
    let queryText = `SELECT * FROM "classes" WHERE id = ${req.params.id} `;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
});

// -------------------------- Get classes, search by name that includes not case sensitive text

router.get('/:search', (req, res) => {
    console.log('req.params.search', req.params.search)
    let queryText = `SELECT * 
    FROM "classes" 
    WHERE "classname" ILIKE $1;`;
    pool.query(queryText, ['%' + req.params.search + '%'])
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
});







module.exports = router;
