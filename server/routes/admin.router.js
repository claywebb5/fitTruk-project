const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// -------------------------- Admin creates new class (POST)

router.post('/', (req, res) => {

  if (req.isAuthenticated()) {
    const queryText = `insert into classes ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "location", "class_size")
      values ($1, $2, $3, $4, $5, $6, $7, $8);`
    pool.query(queryText, [req.body.classname, req.body.description, req.body.trainer_user_id, req.body.date, req.body.start_time, req.body.end_time, req.body.location, req.body.class_size])

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