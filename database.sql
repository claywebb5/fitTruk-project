
-- *** CREATE DATABASE NAME: fittruk

CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000),
	"name" varchar(255),
	"email" varchar(255),
	"phone_number" varchar (20),
	"address" varchar(255),
	"dob" DATE,
	"pronouns" varchar(255),
	"emergency_name" varchar(255),
	"emergency_number" varchar(20),
	"profile_image" varchar(255),
	"free_classes" integer DEFAULT 3,
	"access_level" integer DEFAULT 1
);

CREATE TABLE "classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"classname" varchar(255),
	"description" varchar(500),
	"trainer_user_id" int REFERENCES "user",
	"date" DATE,
	"start_time" TIME,
	"end_time" TIME,
	"location" varchar(255),
	"class_size" integer
);

CREATE TABLE "class_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"class_id" int REFERENCES "classes",
	"user_id" int REFERENCES "user",
	"checked_in" BOOLEAN DEFAULT false
);


--This would be the login
insert into "user" ("username", "password", "name", "email", "phone_number", "address", "dob", "pronouns", "emergency_name", "emergency_number", "profile_image")
values ('colinjay', 12345, 'Colin Jaworski', 'colin@yahoo.com', '763-867-5309', '123 first street, mpls, MN', '12/05/1984', 'he', 'clay', '123-4567', 'profileImage.url'), 
('joshBoss', 1234, 'Josh Kralewski', 'Joshkmanj@Gmail.com', '651-295-8859', '123 first street, mpls, MN', '01/20/1996', 'he/him', 'clay', '123-4567', 'profileImage.url'), 
('Koffi', 123, 'Koffi Kittleson', 'koffi.k.collins@gmail.com', '651-354-0552', '123 first street, mpls, MN', '07/09/1999', 'they, them', 'clay', '123-4567', 'profileImage.url'), 
('Claybaebae', 12, 'Clay Webb', 'clay_webb@outlook.com', '651-964-5585', '123 first street, mpls, MN', '07/09/1999', 'he/him', 'colin', '123-4567', 'profileImage.url'), 
('Abdi', 12, 'Abdikarim Ibrahim', 'alldayabdi@gmail.com', 'no phone number', '123 first street, mpls, MN', '07/09/1999', 'he/him', 'colin', '123-4567', 'profileImage.url');

--This would be adding a new class
insert into classes ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "location", "class_size" )
values 
('HIIT', 'high intensity interval training', 2, '4/12/2022', '12:00', '13:00', 'at the park?', 20),
('Yoga', 'Its yoga', 1, '4/13/2022', '14:00', '15:00', 'Some place noisy', 10),
('Kick boxing', 'This is a class where we are going to kick and box', 1, '4/13/2022', '9:00', '10:00', 'Near the truck', 18);

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




















