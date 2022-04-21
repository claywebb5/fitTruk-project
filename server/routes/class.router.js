const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// -------------------------- Get all classes (GET) (Everyone can see this)

router.get('/', (req, res) => {

    let queryText = `SELECT "c"."id", to_char("c"."date", 'FMDay') AS "week_day_name", to_char("c"."date", 'FMMM/FMDD') AS "abbreviated_date", to_char("c"."date", 'YYYY-MM-DD') AS "date", "c"."start_time", "c"."end_time", "c"."classname", "c"."trainer_user_id",
    "user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name",  "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image"
    FROM "classes" AS "c"
    JOIN "user" ON "user"."id" = "c"."trainer_user_id"
    ORDER BY date, start_time;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
});

// -------------------------- Get class details (GET)(Everyone can see this)

router.get('/details/:classId/', (req, res) => {
    let classId = req.params.classId
    // If the user is signed in, this will return the class details AS WELL AS 
    // a boolean of whether or not the user is registered for this class.
    if (req.user) {
        let registeredUserQuery = `SELECT "c"."id", to_char("c"."date", 'FMDay') AS "week_day_name",
		to_char("c"."date", 'FMMM/FMDD/YYYY') AS "clean_format_date", "c"."classname",
		"c"."description", "c"."trainer_user_id", to_char("c"."date", 'YYYY-MM-DD') AS "date",
		"c"."start_time", "c"."end_time", "c"."street", "c"."city", "c"."state", "c"."zip", "c"."class_size",
		"user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name", "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image",
        (select "class_size" - 
		(select count(user_id)
		from class_list
		where class_id = $1)
		from "classes" 
		where id = $1) as spots_remaining,
        CASE
        WHEN (SELECT "cl"."id" FROM "class_list" AS "cl" WHERE "cl"."class_id" = $1 AND "cl"."user_id" = $2 limit 1) > 0
        THEN true
        ELSE false
        END AS "is_my_class"
        FROM "classes" AS "c"
        JOIN "user" ON "user"."id" = "c"."trainer_user_id"
        WHERE "c"."id" = $1;`;

        pool.query(registeredUserQuery, [classId, req.user.id])

            .then((result) => {
                res.send(result.rows[0])
            }).catch((error) => {
                console.log(error)
                res.sendStatus(500)
            })
    } else {
        // Else if a user is not signed in, this will only return the class details
        // without checking any sort of reservation status.
        let unregisteredUserQuery = `SELECT "c"."id", to_char("c"."date", 'FMDay') AS "week_day_name",
		to_char("c"."date", 'FMMM/FMDD/YYYY') AS "clean_format_date", "c"."classname",
		"c"."description", "c"."trainer_user_id", to_char("c"."date", 'YYYY-MM-DD') AS "date",
		"c"."start_time", "c"."end_time", "c"."street", "c"."city", "c"."state", "c"."zip", "c"."class_size",
		"user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name", "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image",
        (select "class_size" - 
		(select count(user_id)
		from class_list
		where class_id = $1)
		from "classes" 
		where id = $1) as spots_remaining
        FROM "classes" AS "c"
        JOIN "user" ON "user"."id" = "c"."trainer_user_id"
        WHERE "c"."id" = $1;`;

        pool.query(unregisteredUserQuery, [classId])

            .then((result) => {
                res.send(result.rows[0])
            }).catch((error) => {
                console.log(error)
                res.sendStatus(500)
            })
    }
});

// -------------------------- Get classes, search by name that includes not case sensitive text

router.get('/:search', (req, res) => {

    let queryText = `SELECT * 
    FROM "classes" 
    WHERE "classname" ILIKE $1;`;
    pool.query(queryText, ['%' + req.params.search + '%'])
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })

});

router.get('/class-size/:id', (req, res) => {
    console.log('in router get class_id is:', req.params.id)

    let queryText = `select 
    CASE
    WHEN count(user_id) >= ( SELECT class_size FROM classes WHERE id = $1) 
    THEN true
    ELSE
    false
    END AS "full_class"
    from class_list 
    where class_id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows[0])
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })

});



module.exports = router;
