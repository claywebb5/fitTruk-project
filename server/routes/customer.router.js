
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// put for updating users pronouns
router.get('/myclasses/:id', (req, res) => {
    // GET route code here
    if (req.isAuthenticated()) {
        const queryText = ` SELECT classes.* from classes 
        JOIN class_list ON classes.id = class_list.class_id
        JOIN "user" ON class_list.user_id = "user".id
        WHERE "user".id = ${req.params.id}
        ;`;
        // endpoint functionality
        // const queryValues = [req.body.data, req.params.id];
   
        pool.query(queryText).then((result) => {
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