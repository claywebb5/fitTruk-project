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

    // console.log('Im just tryin to do stuffs with this stuffs', req.body);
    
    if (req.isAuthenticated()) {

        let users = req.body
        const connection = await pool.connect();
        
        try {
            
            
            connection.query('BEGIN;')
            
            sqlText = `
            UPDATE "class_list"
            SET "checked_in" = TRUE
            WHERE user_id = $1 and "class_id" = $2`;
            
            for (let i = 0; i < users.length; i++) {
                // console.log('this is the user info when looping', users[i]);
                if (users[i].checked_in) {
                    console.log('this person is checked in', users[i].username);
                    
                    console.log('not sure if I can see this in here',req.params.id);
                    await connection.query(sqlText, [users[i].id, req.params.id])
                    
                }
                else if (!users[i].checked_in) {
                    console.log('not sure if I can see this in here',req.params.id);
                    console.log('this person is NOT checked in', users[i].username);
                    
                }
            }
            
            await connection.query('COMMIT;')
            res.sendStatus(200)   
        } catch (error) {
            await connection.query('ROLLBACK;')
            console.log('the error while checking in', error);
            
        } finally {
            connection.release();
        }

        
    //     const queryText =
    //         

    //     pool.query(queryText, [req.body.data, req.params.id])

    //         .then((result) => {
    //             res.send(result.rows)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             res.sendStatus(500);
    //         })

    } else {
        res.sendStatus(403);
    }
});


// -------------------------- gets attendance for a specific class (GET)
router.get('/attendance/:id', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('req.params.id', req.params.id)
        const queryText =
            `SELECT "user"."id", "user"."username", "user"."profile_image", "class_list"."checked_in"
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