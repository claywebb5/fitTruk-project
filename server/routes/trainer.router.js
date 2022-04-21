const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- update class details (PUT)

router.put('/edit-class/:id', (req, res) => {

    if (req.isAuthenticated()) {

        const queryText =
            `UPDATE "classes"
    SET "location" = $1, "description" = $2
    WHERE classes.id = $3`;

        pool.query(queryText, [req.body.location, req.body.description, req.params.id])

            .then((result) => {
                res.send(result.rows)
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })

    } else {
        res.sendStatus(403);
    }

});


// -------------------------- check in customers for classes (PUT)

router.put('/check-in/:id', (req, res) => {

    if (req.isAuthenticated()) {

        const queryText =
            `UPDATE "class_list"
    SET "checked_in" = TRUE
    WHERE user_id = $1 and "class_id" = $2`;

        pool.query(queryText, [req.body.data, req.params.id])

            .then((result) => {
                res.send(result.rows)
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })

    } else {
        res.sendStatus(403);
    }
});


// -------------------------- gets attendance for a specific class (GET)
router.get('/attendance/:id', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('req.params.id', req.params.id)
        const queryText =
            `SELECT "first_name", "last_name", "profile_image"
        FROM "classes"
        JOIN "class_list"
        ON "classes"."id"="class_list"."class_id" 
        JOIN "user" ON "class_list"."user_id"="user"."id"
        WHERE "classes"."id" = $1;`;

        pool.query(queryText, [req.params.id])
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }

});



module.exports = router;