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

router.put('/check-in/:id', async (req, res) => {

    if (req.isAuthenticated()) {
        // initialize variable for array of to be looped over, variable name user picked to match loop in saga which does similar logic but with local state
        let users = req.body
        // this forms a connection to the database which will allow us to make multiple sql actions during the transaction
        const connection = await pool.connect();

        try {
            // this marks the beginning of the sql transaction
            connection.query('BEGIN;')
            // create sql text to be used during transaction
            sqlText = `
            UPDATE "class_list"
            SET "checked_in" = $1
            WHERE user_id = $2 and "class_id" = $3`;

            for (let i = 0; i < users.length; i++) {

                // this runs the sql command above and waits for it to be finished before moving on through the array
                await connection.query(sqlText, [users[i].checked_in, users[i].id, req.params.id])
            }
            // after the For loop is complete, this will save the changes that were made and complete the transaction
            await connection.query('COMMIT;')
            res.sendStatus(200)
        } catch (error) {
            //incase of error during transaction, this will revert any changes that might have been made during the transaction
            await connection.query('ROLLBACK;')
            console.log('the error while checking in', error);

        } finally {
            // this will disconnect us from the database
            connection.release();
        }
    } else {
        // when a request is made by an unauthorized user, this will be triggered instead of any logic.
        res.sendStatus(403);
    }
});


// -------------------------- gets attendance for a specific class (GET)
router.get('/attendance/:id', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('req.params.id', req.params.id)
        const queryText =`
            SELECT "user"."id", "first_name", "last_name",, "user"."profile_image", "class_list"."checked_in"
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