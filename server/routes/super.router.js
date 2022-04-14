const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Updates user access level 

router.put('/:id', (req, res) => {

    if (req.isAuthenticated()) {
        const queryText =
            `UPDATE "user"
        SET "access_level" = $1
        WHERE "user"."id" = $2;`;

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

module.exports = router;
