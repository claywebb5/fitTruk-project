
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- Gets classes a specific customer signed up for

router.get('/myclasses/:id', (req, res) => {

  if (req.isAuthenticated()) {
    const queryText = ` SELECT classes.* from classes 
        JOIN class_list ON classes.id = class_list.class_id
        JOIN "user" ON class_list.user_id = "user".id
        WHERE "user".id = $1
        ;`;
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


// -------------------------- Updates personal info and address of customer (PUT)
// --- SYNTAX-UPDATE : update this name
router.put('/pronouns/:id', (req, res) => {
  let userId = req.user.id;
  console.log('req userId is:', userId)

  if (req.isAuthenticated()) {
    const queryText =
      `UPDATE "user"
          SET "pronouns" = $1, "address" = $2
          WHERE "user"."id" = $3;`;
    pool.query(queryText, [req.body.pronouns, req.body.address, req.params.id]) // SYNTAX-UPDATE : change req.params.id to req.user.id , as it's verified by Passport
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


//  -------------------------- cancels a customers reservation 
router.delete('/reservation/:id', (req, res) => {

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
// SYNTAX-UPDATE : change userID verification
router.post('/reserve-class/:id', (req, res) => {

  if (req.isAuthenticated()) {
    const queryText = `INSERT into "class_list" ("class_id", "user_id")
    values ($1, $2);`
    pool.query(queryText, [req.params.id, req.body.user_id]) // SYNTAX-UPDATE : change req.params.id to req.user.id , as it's verified by Passport

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

// -------------------------- Get classes, search by name that includes not case sensitive text for specific user

router.get('/search/:id', (req, res) => {

  if (req.isAuthenticated()) {
    let queryText = `SELECT classes.*
  FROM "classes"
  JOIN "class_list"
  ON "classes"."id" = "class_list"."class_id"
  JOIN "user" on "class_list"."user_id" = "user"."id"
  WHERE "user"."id" = $1 AND "classes"."classname" ILIKE $2;`;
    pool.query(queryText, [req.params.id, '%' + req.body.classname + '%'])
      .then((result) => {
        res.send(result.rows)
      }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
});









module.exports = router;