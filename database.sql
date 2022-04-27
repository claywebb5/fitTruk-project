-- *** CREATE DATABASE NAME: fittruk

-- Here's the database setup, some things that may need to be changed for real world application are the
-- VARCHAR() limits, as no password needs to be 1000 characters, and other data types don't need to be as
-- large as they are currently set up to be.

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"username" VARCHAR (80) UNIQUE NOT NULL,
  "password" VARCHAR (1000),
	"first_name" VARCHAR(100),
	"last_name" VARCHAR(100),
	"email" VARCHAR(100),
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





--==========-- Mock Data --============-- Mock Data --============-- Mock Data --============--

INSERT INTO "user"("id","username","password","first_name","profile_image","last_name","email","phone_number","street","city","state","zip","dob","pronouns","emergency_name","emergency_number","free_classes","access_level")
VALUES
(100,'Abdi11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Abdikarim','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(101,'Davey11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','David','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(102,'Brandon11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Brandon','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(103,'Chandler11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Andrew','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(104,'Tony11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Tony','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(105,'Arthur11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Arthur','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(106,'Sion11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Sion','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(107,'Rhys11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Rhys','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(108,'Kianna11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Kianna','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(109,'Ellie11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Ellie-Louise','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(110,'Kaitlin11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Kaitlin','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(111,'Benito11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Benito','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(112,'Lucia11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Lucia','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(113,'Alice11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Alice','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(114,'Aron11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Aron','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(115,'Dilan11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Dilan','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(116,'Tina11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Tina','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(117,'Mckenzie11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Mckenzie','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',1),
(118,'Matteo11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Italo','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(119,'Devonte11','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Francisco','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',1),
(200,'Mark22','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Mark','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',2),
(201,'Ben22','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Ben','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',2),
(202,'Sarah22','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Sarah','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',2),
(203,'Andrew22','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Andrew','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','He/Him','Jane/John Doe','612-374-5622','3',2),
(204,'Hollie22','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Hollie','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',2),
(300,'Hailee33','this-password-needs-to-be-replaced-after-creation-of-a-salt/hash-key','Hailee','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260','Doe','exampleemail@email.com','612-374-5622','724 Sibley St NE','Minneapolis','MN','55413','1990-01-01','She/Her','Jane/John Doe','612-374-5622','3',3);



INSERT INTO "classes"("classname","description","trainer_user_id","date","start_time","end_time","street","city","state","zip","class_size")
VALUES
('Core Wrx','This core class will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',200,'2022-04-26','08:00:00','09:00:00','724 Sibley St NE','Minneapolis','MN','55413',18),
('Fit Strike','This is an hour long high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.',201,'2022-04-26','12:30:00','13:30:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('Yoga Power','Be prepared to sweat in this athletic, strong, and centered, strength filled class.',202,'2022-04-26','14:00:00','15:00:00','1 1st St S','Minneapolis','MN','55401',13),
('Fit Strength','This total body workout is designed to utilize a variety of gym equipment and is programmed to develop functional strength. Our instructors focus is to help you get stronger in a safe, fun, and well mixed format. Cardio will be worked in as well, but strength is the goal! All levels encouraged.',200,'2022-04-26','17:00:00','18:00:00','1 1st St S','Minneapolis','MN','55401',18),
('Fit Circuit','This is an all encompassing strength and cardio class. The instructors have the unique opportunity to use the equipment and exercises they see fit. Participants will move from one challenging exercise to another. All levels encouraged. ',200,'2022-04-26','18:30:00','19:30:00','1 1st St S','Minneapolis','MN','55401',18),
('Strength 360','This class utilizes all aspects of the Life Fitness SYNRGY360: cable station, pull-ups, land-mine, TRX, etc. Class will consist of 45 second rounds utilizing 15+ stations around the SYNRGY. All fitness levels are welcome.',201,'2022-04-27','06:30:00','07:30:00','425 Jefferson St NE','Minneapolis','MN','55413',12),
('Fit Strength','This total body workout is designed to utilize a variety of gym equipment and is programmed to develop functional strength. Our instructors focus is to help you get stronger in a safe, fun, and well mixed format. Cardio will be worked in as well, but strength is the goal! All levels encouraged.',203,'2022-04-27','09:00:00','10:00:00','425 Jefferson St NE','Minneapolis','MN','55413',15),
('Yoga Flow','A challenging and invigorating flow class, held in the group exercise room, is designed for all levels. This class will work: endurance, flexibility, strength and inner peace.',204,'2022-04-27','10:30:00','11:30:00','425 Jefferson St NE','Minneapolis','MN','55413',15),
('Fit Strike','This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',200,'2022-04-27','17:00:00','18:00:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('TRX Strength','This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,'2022-04-27','18:30:00','19:30:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('Yoga Flow','A challenging and invigorating flow class, held in the group exercise room, is designed for all levels. This class will work: endurance, flexibility, strength and inner peace.',202,'2022-04-28','06:00:00','07:00:00','425 Jefferson St NE','Minneapolis','MN','55413',18),
('City F.I.T.','This is a high intensity total body workout. The class is formatted specifically to give you one round of strength, cardio, and core, in 60 second bursts. Come ready to get your sweat on as we move through each round of exercise. All levels are encouraged, as our instructors have the capacity to modify for any individual.',203,'2022-04-28','08:00:00','09:00:00','425 Jefferson St NE','Minneapolis','MN','55413',18),
('City Strike','This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,'2022-04-28','12:15:00','01:15:00','425 Jefferson St NE','Minneapolis','MN','55413',18),
('TRX Strength','This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,'2022-04-28','18:30:00','19:30:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('Zumba','Zumba® involves dance and aerobic elements. Unlike a typical dance class where counts are used, Zumba® involves following the music with repetitive movements. Zumbas® choreography incorporates hip-hop, samba, salsa, merengue, mambo, martial arts, Bollywood, and belly dance moves. With Zumba®, have fun and burn up the dance floor!',204,'2022-04-29','07:00:00','08:00:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',18),
('Core Wrx','This core class will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',200,'2022-04-29','08:00:00','09:00:00','724 Sibley St NE','Minneapolis','MN','55413',18),
('Fit Strike','This is an hour long high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.',200,'2022-04-28','12:30:00','13:30:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('TRX Strength','This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,'2022-04-29','18:30:00','19:30:00','724 Sibley St NE','Minneapolis','MN','55413',13),
('Zumba','Zumba® involves dance and aerobic elements. Unlike a typical dance class where counts are used, Zumba® involves following the music with repetitive movements. Zumbas® choreography incorporates hip-hop, samba, salsa, merengue, mambo, martial arts, Bollywood, and belly dance moves. With Zumba®, have fun and burn up the dance floor!',202,'2022-04-30','08:00:00','09:00:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',18),
('City Strike','This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,'2022-04-30','10:15:00','11:15:00','425 Jefferson St NE','Minneapolis','MN','55413',18),
('TRX Strength','This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,'2022-04-30','13:30:00','14:30:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',18),
('Core Wrx','This core class, held on the grass, will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',201,'2022-05-01','06:00:00','07:00:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',18),
('City Strike','This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,'2022-05-01','10:15:00','11:15:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',12),
('TRX Strength','This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,'2022-05-01','13:30:00','14:30:00','724 Sibley St NE','Minneapolis','MN','55413',12),
('Strength 360','This class utilizes all aspects of the Life Fitness SYNRGY360: cable station, pull-ups, land-mine, TRX, etc. Class will consist of 45 second rounds utilizing 15+ stations around the SYNRGY. All fitness levels are welcome.\n',200,'2022-05-01','16:00:00','17:00:00','200 Dr Justus Ohage Blvd','St Paul','MN','55107',15);



INSERT INTO "class_list"("class_id","user_id")
VALUES
(1,101),(1,102),(1,103),(1,104),(1,105),(1,106),(1,107),(1,108),(1,109),(1,110),
(2,101),(2,102),(2,103),(2,104),(2,105),(2,106),(2,107),(2,108),(2,109),(2,110),
(3,101),(3,102),(3,103),(3,104),(3,105),(3,106),(3,107),(3,108),(3,109),(3,110),
(4,101),(4,102),(4,103),(4,104),(4,105),(4,106),(4,107),(4,108),(4,109),(4,110),
(5,101),(5,102),(5,103),(5,104),(5,105),(5,106),(5,107),(5,108),(5,109),(5,110),
(6,101),(6,102),(6,103),(6,104),(6,105),(6,106),(6,107),(6,108),(6,109),(6,110),
(7,101),(7,102),(7,103),(7,104),(7,105),(7,106),(7,107),(7,108),(7,109),(7,110),
(8,101),(8,102),(8,103),(8,104),(8,105),(8,106),(8,107),(8,108),(8,109),(8,110),
(9,101),(9,102),(9,103),(9,104),(9,105),(9,106),(9,107),(9,108),(9,109),(9,110),
(10,101),(10,102),(10,103),(10,104),(10,105),(10,106),(10,107),(10,108),(10,109),(10,110),
(11,101),(11,102),(11,103),(11,104),(11,105),(11,106),(11,107),(11,108),(11,109),(11,110),
(12,101),(12,102),(12,103),(12,104),(12,105),(12,106),(12,107),(12,108),(12,109),(12,110),
(13,101),(13,102),(13,103),(13,104),(13,105),(13,106),(13,107),(13,108),(13,109),(13,110),
(14,101),(14,102),(14,103),(14,104),(14,105),(14,106),(14,107),(14,108),(14,109),(14,110),
(15,101),(15,102),(15,103),(15,104),(15,105),(15,106),(15,107),(15,108),(15,109),(15,110),
(16,101),(16,102),(16,103),(16,104),(16,105),(16,106),(16,107),(16,108),(16,109),(16,110),
(17,101),(17,102),(17,103),(17,104),(17,105),(17,106),(17,107),(17,108),(17,109),(17,110),
(18,101),(18,102),(18,103),(18,104),(18,105),(18,106),(18,107),(18,108),(18,109),(18,110),
(19,101),(19,102),(19,103),(19,104),(19,105),(19,106),(19,107),(19,108),(19,109),(19,110),
(20,101),(20,102),(20,103),(20,104),(20,105),(20,106),(20,107),(20,108),(20,109),(20,110),
(21,101),(21,102),(21,103),(21,104),(21,105),(21,106),(21,107),(21,108),(21,109),(21,110),
(22,101),(22,102),(22,103),(22,104),(22,105),(22,106),(22,107),(22,108),(22,109),(22,110),
(23,101),(23,102),(23,103),(23,104),(23,105),(23,106),(23,107),(23,108),(23,109),(23,110),
(24,101),(24,102),(24,103),(24,104),(24,105),(24,106),(24,107),(24,108),(24,109),(24,110),
(25,101),(25,102),(25,103),(25,104),(25,105),(25,106),(25,107),(25,108),(25,109),(25,110);



-- To use this mock data for testing purposes, a generic password can be created for each user and inserted into the database.
-- Step 1: Register a new user with a memorizable password, that password will go through a salt/hashing process and be stored as a long string of text in the database.
-- Step 2: Copy that password from the "user" table in the database.
-- Step 3: Paste that password into the following command. Now all users will have the same password (for testing/presentations). (:
UPDATE "user" SET "password" = 'insert-password-here';
