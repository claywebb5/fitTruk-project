const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- Admin creates new class (POST)

router.post('/new-class', (req, res) => {
  // if (req.isAuthenticated()) {
  const queryText = `INSERT INTO "classes" ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "street", "city", "state", "zip", "class_size")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
  pool.query(queryText, [req.body.classname, req.body.description, req.body.trainer_user_id, req.body.date, req.body.start_time, req.body.end_time, req.body.street, req.body.city, req.body.state, req.body.zip, req.body.class_size])

    .then((result) => {
      res.send(result.rows)
      console.log('Created a new class!', result.rows);

    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  // } else {
  //   res.sendStatus(403);
  // }
});

// -------------------------- Admin GET trainer list (trainers have access level of 2)
router.get('/available-trainers', (req, res) => {

  if (req.isAuthenticated()) { // Authenticated users get more information about trainers than unauthenticated users.
    let queryText = `select "id" AS "trainer_user_id", "first_name" AS "trainer_first_name", "last_name" AS "trainer_last_name", "profile_image" AS "trainer_image",  "pronouns" AS "trainer_pronouns"
      from "user"
      where "access_level" = 2;`;
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
  } else {
    // This condition allows unauthenticated users to still use a "search by trainer" function as of right now, but they can't retrieve as much information about trainers.
    let unauthenticatedQueryText = `select "id" AS "trainer_user_id", "first_name" AS "trainer_first_name", "last_name" AS "trainer_last_name"
    from "user"
    where "access_level" = 2;`;
    pool.query(unauthenticatedQueryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
    // res.sendStatus(403);
  }
}
);




module.exports = router;