
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Gets classes a specific customer signed up for
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


// -------------------------- Updates personal info of customer (PUT)

router.put('/pronouns/:id', (req, res) => {

  console.log('req.body.pronouns', req.body.pronouns) // data would be the user_id
  console.log('params', req.params.id) // params is user id

  // if (req.isAuthenticated()) {

      const queryText =
          `UPDATE "user"
          SET "pronouns" = $1
          WHERE "user"."id" = $2;`;

      pool.query(queryText, [req.body.pronouns, req.params.id])

          .then((result) => {
              res.send(result.rows)
          })
          .catch((error) => {
              console.log(error);
              res.sendStatus(500);
          })

  // } else {
  //     res.sendStatus(403);
  // }
});











module.exports = router;