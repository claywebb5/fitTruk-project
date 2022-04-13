const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- update class details (PUT)
// UPDATE classes
// SET "location" = 'someplace noisy', "description" = 'yoga is fun and a great way to stay in shape'
// WHERE classes.id = 2;



// -------------------------- check in customers for classes (PUT)
router.put('/:id', (req, res) => {

    console.log('req.body', req.body )
    console.log('params', req.params.id)
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

 

    // if (req.isAuthenticated()) {

    // } else {
    //     res.sendStatus(403);
    // }

});

// UPDATE class_list
// SET checked_in = FALSE
// WHERE class_id = 1 and user_id = 4;



module.exports = router;