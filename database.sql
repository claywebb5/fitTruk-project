
-- *** CREATE DATABASE NAME: fittruk

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000),
	"name" VARCHAR(255),
	"email" VARCHAR(255),
	"phone_number" VARCHAR (20),
	"street_address" VARCHAR(255),
	"city" VARCHAR (50),
	"state" VARCHAR (50),
	"zip" VARCHAR (20),
	"dob" DATE,
	"pronouns" VARCHAR(255),
	"emergency_name" VARCHAR(255),
	"emergency_number" VARCHAR(20),
	"profile_image" VARCHAR(255),
	"free_classes" VARCHAR DEFAULT 3,
	"access_level" INTEGER DEFAULT 1
);

CREATE TABLE "classes" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"classname" VARCHAR(255),
	"description" VARCHAR(500),
	"trainer_user_id" INT REFERENCES "user",
	"date" DATE,
	"start_time" TIME,
	"end_time" TIME,
	"street_address" VARCHAR (255),
	"city" VARCHAR (50),
	"state" VARCHAR (50),
	"zip" VARCHAR (20),
	"class_size" INTEGER
);

CREATE TABLE "class_list" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"class_id" INT REFERENCES "classes" ON DELETE CASCADE ON UPDATE CASCADE,
	"user_id" INT REFERENCES "user",
	"checked_in" BOOLEAN DEFAULT FALSE
);

--This would be sign up
insert into "user" ("username", "password", "name", "email", "phone_number", "street_address", "city", "state", "zip", "dob", "pronouns", "emergency_name", "emergency_number", "profile_image")
values 
('colinjay', 12345, 'Colin Jaworski', 'colin@yahoo.com', '763-867-5309', '123 first street','Minneapolis', 'MN', '55443', '12/05/1984', 'he', 'clay', '123-4567', 'profileImage.url'),
 
('joshBoss', 1234, 'Josh Kralewski', 'Joshkmanj@Gmail.com', '651-295-8859', '420 milky way', 'Minneapolis', 'MN', '55444', '01/20/1996', 'he/him', 'clay', '123-4567', 'profileImage.url'),
 
('Koffi', 123, 'Koffi Kittleson', 'koffi.k.collins@gmail.com', '651-354-0552', '8901 south ave', 'Minneapolis', 'MN', '55443', '07/09/1999', 'they, them', 'clay', '123-4567', 'profileImage.url'),
 
('Claybaebae', 12, 'Clay Webb', 'clay_webb@outlook.com', '651-964-5585', '38752 orange alcove', 'Bloomington', 'MN', '55122', '07/09/1999', 'he/him', 'colin', '123-4567', 'profileImage.url'), 

('Abdi', 12, 'Abdikarim Ibrahim', 'alldayabdi@gmail.com', 'no phone number', '90210 hollywood avenue', 'Saint Paul', 'MN', 'st paul zip here', '07/09/1999', 'he/him', 'colin', '123-4567', 'profileImage.url');

--This would be adding a new class
insert into classes ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "street_address", "city", "state", "zip", "class_size" )
values 
('HIIT', 'high intensity interval training at Joshes place for some reason', 2, '4/12/2022', '12:00', '13:00', '420 milky way', 'Minneapolis', 'MN', '55444', 20), 
('Yoga', 'Its yoga', 1, '4/13/2022', '14:00', '15:00', '345 coolplace drive', 'Saint Cloud', 'MN', '56301' , 10),
('Kick boxing', 'This is a class where we are going to kick and box', 1, '4/14/2022', '9:00', '10:00', '8675309 song alcove', 'Brooklyn Park', 'MN', '55444', 18);


-----------------------^^^----------------------- INITIAL DUMMY DATA ----------------------^^^------------------------ 


--Get all classes ordering them by date and then start_time
select * from classes
order by date, start_time;

--adding Koffi to HIIT class
Insert into "class_list" ("class_id", "user_id")
values (1, 3);

--adding Abdi to kickboxing and yoga 
Insert into "class_list" ("class_id", "user_id")
values (3, 5), (2,5);

--adding Clay to yoga, kickboxing, and HIIT
Insert into "class_list" ("class_id", "user_id")
values (2, 4), (3,4), (1,4);

-- Updating your password to log in (password is 1234), put in your id #
UPDATE "user" 
SET "password"='$2a$10$4Sgtt603bqy7iYnQDM58bug6XR.Vh5vBEGlez9h9eKTUdWV/pAiXe' 
WHERE id = ;

--updating checked in status to true for Clay in HIIT class (signing in users)
UPDATE class_list
SET checked_in = FALSE
WHERE class_id = 1 and user_id = 4;

--Get all classes that Clay has signed up for
SELECT classes.*
FROM "classes"
JOIN "class_list"
ON "classes"."id" = "class_list"."class_id"
JOIN "user" on "class_list"."user_id" = "user"."id"
WHERE "user"."id" = 4;

--Get all users who signed up for yoga
select username
from "classes"
join "class_list"
on "classes"."id"="class_list"."class_id" 
join "user" on "class_list"."user_id"="user"."id"
where "classes"."id" = 2;

--Updates location and details for a specific class
UPDATE classes
SET "location" = 'someplace noisy', "description" = 'yoga is fun and a great way to stay in shape'
WHERE classes.id = 2; 

--Updates pronouns for a specific user
UPDATE "user"
SET "pronouns" = 'he/him'
WHERE "user"."id" = 1;

--Updates access level for a specific user 
UPDATE "user"
SET "access_level" = 2
WHERE "user"."id" = 1;












