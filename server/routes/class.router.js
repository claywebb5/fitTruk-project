const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Get all classes (GET) (Everyone can see this)

router.get('/', (req, res) => {

        let queryText = `SELECT classes.id, to_char("date", 'FMDay') AS "week_day_name", to_char("date", 'FMMM/FMDD') AS "abbreviated_date", to_char("date", 'YYYY-MM-DD') AS "date", start_time, end_time, classname, trainer_user_id  
        FROM classes
        ORDER BY date, start_time;`
        pool.query(queryText).then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
});

// -------------------------- Get class details (GET)(Everyone can see this)

router.get('/details/:id/:userId', (req, res) => {

    let queryText = `SELECT "id", to_char("date", 'FMDay') AS "week_day_name", to_char("date", 'FMMM/FMDD/YYYY') AS "clean_format_date", "classname", "description", "trainer_user_id",
    to_char("date", 'YYYY-MM-DD') AS "date", "start_time", "end_time", "street",
    "city", "state", "zip", "class_size", 
    CASE
    WHEN (SELECT id FROM class_list WHERE class_id = $1 AND user_id = $2 limit 1) > 0
    THEN true
    ELSE
    false
    END AS "is_my_class"
    FROM "classes" WHERE id = $1;
    `;
    // FROM "classes" 
    // WHERE id = $1;`;
    pool.query(queryText, [req.params.id, req.params.userId])
        .then((result) => {
            res.send(result.rows[0])
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
});

// -------------------------- Get classes, search by name that includes not case sensitive text

router.get('/:search', (req, res) => {

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
