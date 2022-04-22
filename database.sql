
-- *** CREATE DATABASE NAME: fittruk

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000),
	"first_name" VARCHAR(255),
	"last_name" VARCHAR(255),
	"email" VARCHAR(255),
	"phone_number" VARCHAR (20),
	"street" VARCHAR(255),
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
	"street" VARCHAR (255),
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
insert into "user" ("username", "password", "first_name", "last_name", "email", "phone_number", "street", "city", "state", "zip", "dob", "pronouns", "emergency_name", "emergency_number", "profile_image")
values 
('Colin11', 1234, 'Colin', 'Jaworski', 'colin@yahoo.com', '763-867-5309', '123 first street','Minneapolis', 'MN', '55443', '12/05/1984', 'he', 'clay', '123-4567', 'profileImage.url'),
 
('Bethany11', 1234, 'Dane', 'Smith', 'Joshkmanj@Gmail.com', '651-295-8859', '420 milky way', 'Minneapolis', 'MN', '55444', '01/20/1996', 'he/him', 'clay', '123-4567', 'https://avatars.githubusercontent.com/u/11574995?s=250&v=4'),
 
('Dane11', 1234, 'Dane', 'Smith', 'Joshkmanj@Gmail.com', '651-295-8859', '420 milky way', 'Minneapolis', 'MN', '55444', '01/20/1996', 'he/him', 'clay', '123-4567', 'https://avatars.githubusercontent.com/u/11574995?s=250&v=4'),

('Lizz11', 1234, 'Kofi', 'Kittleson', 'koffi.k.collins@gmail.com', '651-354-0552', '8901 south ave', 'Minneapolis', 'MN', '55443', '07/09/1999', 'they, them', 'clay', '123-4567', 'https://avatars.githubusercontent.com/u/17734101?v=4'),
 
('Hailee', 1234, 'Clay', 'Webb', 'clay_webb@outlook.com', '651-964-5585', '38752 orange alcove', 'Bloomington', 'MN', '55122', '07/09/1999', 'he/him', 'colin', '123-4567', 'https://avatars.githubusercontent.com/u/17734101?v=4'), 

('Abdi', 1234, 'Abdikarim', 'Ibrahim', 'alldayabdi@gmail.com', 'no phone number', '90210 hollywood avenue', 'Saint Paul', 'MN', 'st paul zip here', '07/09/1999', 'he/him', 'colin', '123-4567', 'profileImage.url');

--This would be adding a new class
insert into classes ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "street", "city", "state", "zip", "class_size" )
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

--Updates pronouns for a specific user
UPDATE "user"
SET "pronouns" = 'he/him'
WHERE "user"."id" = 1;

--Updates access level for a specific user 
UPDATE "user"
SET "access_level" = 2
WHERE "user"."id" = 1;







--==========-- Presentation Data --============-- Presentation Data --============-- Presentation Data --============--
--==========-- Presentation Data --============-- Presentation Data --============-- Presentation Data --============--
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000),
	"first_name" VARCHAR(255),
	"last_name" VARCHAR(255),
	"email" VARCHAR(255),
	"phone_number" VARCHAR (20),
	"street" VARCHAR(255),
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
	"street" VARCHAR (255),
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


-------------------------
INSERT INTO "classes"("id","classname","description","trainer_user_id","date","start_time","end_time","street","city","state","zip","class_size")
VALUES
(100,'HIIT','high intensity interval training at Joshes place for some reason',102,'2022-04-12','12:00:00','13:00:00','724 Sibley St NE','Minneapolis','MN','55413',20),
(102,'Yoga','Its yoga',103,'2022-04-13','14:00:00','15:00:00','1 1st St S','Minneapolis','MN','55401',10),
(103,'Kick boxing','This is a class where we are going to kick and box',101,'2022-04-14','09:00:00','10:00:00','1 1st St S','Minneapolis','MN','55401',18),
(104,'Yogayogayoga','Welcome to the YOGA ZONEE',102,'2022-04-23','21:00:00','22:00:00','425 Jefferson St NE','Minneapolis','MN','55413',3),
(106,'Circuits','No need to call an ambulance, I already brought it.',103,'2022-04-22','09:00:00','22:00:00','640 Jackson St','St Paul','MN','55101',5),
(107,'Circuitzz','No need to call an ambulance, I already brought it.',102,'2022-04-22','09:00:00','22:00:00','640 Jackson St','St Paul','MN','55101',5),
(108,'Yoga','Yoga in the park',101,'2022-04-16','14:00:00','15:00:00','724 Sibley St NE','Minneapolis','MN','55413',10),
(109,'Kick boxing','Kick a lot of boxes',103,'2022-04-15','09:00:00','10:00:00','425 Jefferson St NE','Minneapolis','MN','55413',18),
(110,'Power lifting','Lift heavy',101,'2022-04-17','09:00:00','10:00:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',18);




---------------------
INSERT INTO "user"("id","username","password","first_name","last_name","email","phone_number","street","city","state","zip","dob","pronouns","emergency_name","emergency_number","profile_image","free_classes","access_level")
VALUES
		(100,'Colin11',
'' ,'Colin','Jaworski','colin@yahoo.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','123-4567','https://media-exp1.licdn.com/dms/image/C4E03AQGlycW9Vpes2w/profile-displayphoto-shrink_400_400/0/1647360104027?e=1655942400&v=beta&t=NtxVQS3k7JYTSq8UQQIiQfFHrscjzNWo4r88V3iodD8','3',1),
		(101,'Bethany22',
'' ,'Bethany','Shulz','bethshulz@yemail.com','763-867-5309','123 first street','Minneapolis','MN','55443','1984-12-05','She/Her','clay','123-4567','https://media-exp1.licdn.com/dms/image/C4D03AQFxaonCB1zSsA/profile-displayphoto-shrink_400_400/0/1630027459789?e=1655942400&v=beta&t=pDQynv5qHj7HNsdhFS8CfY7JAKNauNI0yddm3s8GGJE','3',2),
		(102,'Dane22',
'' ,'Dane','Smith','danesmith@email.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','123-4567','https://avatars.githubusercontent.com/u/11574995?s=250&v=4','3',2),
		(103,'Lizz22',
'' ,'Liz','Kerber','lizkerber@email.com','no phone','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','123-4567','https://avatars.githubusercontent.com/u/17734101?v=4','3',2),
		(104,'Matt22',
'' ,'Matt','Black','mattblack@email.com','no phone','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','123-4567','https://avatars.githubusercontent.com/u/17734101?v=4','3',2),
		(105,'Clay22',
'' ,'Clay','Webb','clay_webb@outlook.com','651-964-5585','38752 orange alcove','Bloomington','MN','55122','1999-07-09','he/him','colin','123-4567','profileImage.url','3',1),
		(106,'Hailee33',
'' ,'Hailee','Bland-Walsh','hailee@email.com','no phone','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','123-4567','https://media-exp1.licdn.com/dms/image/C4E03AQFNQlmK6gdl-A/profile-displayphoto-shrink_400_400/0/1601063689041?e=1655942400&v=beta&t=Cz1HHeP7Qvji74xVa0VOEKtokD73jWV2NOV1ABDzJW4','3',3),
		(107,'Josh33',
'' ,'Josh','Kralewski','Joshkmanj@Gmail.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','123-4567','profileImage.url','3',1),
		(108,'Koffi33',
'' ,'Koffi','Kittleson','koffi.k.collins@gmail.com','651-354-0552','8901 south ave','Minneapolis','MN','55443','1999-07-09','they, them','clay','123-4567','profileImage.url','3',1),
		(109,'Abdi11',
'' ,'Abdikarim','Ibrahim','alldayabdi@gmail.com','no phone number','90210 hollywood avenue','Saint Paul','MN','st paul zip here','1999-07-09','he/him','colin','123-4567','profileImage.url','3',1),
		(110,'Chandler11',
'' ,'Josh','Chandler','chandler@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','he/him','Josh Kralewski','651-867-5309','profileImage.url','3',1),
		(111,'Tony11',
'' ,'Tony','LaForgia','tony@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','he/him','Josh Kralewski','651-867-5309','profileImage.url','3',1),
		(112,'Arthur11',
'' ,'Arthur','Tran','arthurt@email.com','651-123-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','profileImage.url','3',1),
		(113,'passwordis22',
'' ,'Brant','McCarthy','brantmct@email.com','651-867-5309','640 Jackson St','St Paul','MN','55101','1995-06-15','He/Him','Clay Webb','651-456-8555','profileImage.url','3',1),
		(114,'passwordis11',
'' ,'Heather','Kim','hkim@email.com','651-867-5309','640 Jackson St','St Paul','MN','55101','1995-06-15','He/Him','Clay Webb','651-456-8555','profileImage.url','3',1),
		(115,'passwordis33',
'' ,'Dan','Fenske','danfenske@email.com','651-867-5309','640 Jackson St','St Paul','MN','55101','1995-06-15','He/Him','Clay Webb','651-456-8555','profileImage.url','3',1);
------------------