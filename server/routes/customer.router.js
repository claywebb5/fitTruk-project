
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// gets customers specific classes

// -------------------------- Gets classes a specific customer signed up for

router.get('/myclasses/:id', (req, res) => {
    // GET route code here
    if (req.isAuthenticated()) {
        const queryText = ` SELECT classes.* from classes 
        JOIN class_list ON classes.id = class_list.class_id
        JOIN "user" ON class_list.user_id = "user".id
        WHERE "user".id = ${req.params.id}
        ;`;
   
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


// cancels a customers reservation 
router.delete('/reservation/:id', (req,res) =>{
    console.log('req.body.class_id', req.body.class_id);
    if (req.isAuthenticated()) {
        let queryText = `DELETE FROM class_list
        WHERE class_list.user_id = $1 and class_list.class_id = $2`;
        pool.query(queryText, [req.body.class_id, req.params.id])
        .then(result => res.sendStatus(201))
          .catch(err => res.sendStatus(500));
      } else {
        res.sendStatus(403);
      }
})

// -------------------------- Reserves a class for a customer (POST)

router.post('/reserve-class/:id', (req, res) => {

  console.log('reserve class router', req.body.user_id);

  // if (req.isAuthenticated()) {
    const queryText = `INSERT into "class_list" ("class_id", "user_id")
    values ($1, $2);`
    pool.query(queryText, [req.params.id, req.body.user_id])

      .then((result) => {
        res.send(result.rows)
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      })
  // } else {
  //   res.sendStatus(403);
  // }
});











module.exports = router;