-- *** CREATE DATABASE NAME: fittruk



-- Important SQL commands --
SELECT "c"."id", to_char("c"."date", 'FMDay') AS "week_day_name", to_char("c"."date", 'FMMM/FMDD') AS "abbreviated_date", to_char("c"."date", 'YYYY-MM-DD') AS "date",
		to_char("c"."start_time", 'FMHH:MMAM') AS "abrv_start_time","c"."start_time", to_char("c"."end_time", 'FMHH:MMAM') AS "abrv_end_time", "c"."end_time", "c"."classname", "c"."trainer_user_id",
    "user"."first_name" AS "trainer_first_name", "user"."last_name" AS "trainer_last_name",  "user"."pronouns" AS "trainer_pronouns", "user"."profile_image" AS "trainer_image"
    FROM "classes" AS "c"
    JOIN "user" ON "user"."id" = "c"."trainer_user_id" -- This join allows the database to grab the class trainer's data based off the class' trainer_user_id.
    JOIN "class_list" ON "c"."id" = "class_list"."class_id" -- This line and the following, are what differentiate the server grabbing data for ALL classes,
    WHERE "class_list"."user_id" = $1 											-- and the server grabbing data for a SINGLE USER's classes schedule.
    ORDER BY date, to_char("start_time",'HH24'); -- This orders by date first, then orders by a 24hr time format (This solves issues with DB logic thinking 12:00pm is an earlier time than 6:00am)






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




INSERT INTO "user"("id","username","password","first_name","profile_image","last_name","email","phone_number","street","city","state","zip","dob","pronouns","emergency_name","emergency_number","free_classes","access_level")
VALUES
(100,'Abdi11','check_slack','Abdikarim','https://avatars.githubusercontent.com/u/72318062?v=4','Ibrahim','alldayabdi@gmail.com','651-865-1234','90210 hollywood avenue','Saint Paul','MN','st paul zip here','1999-07-09','he/him','colin','123-4567','3',1),
(101,'Davey11','check_slack','David','https://avatars.githubusercontent.com/u/75805825?v=4','Meuer','dave@email.com','651-865-1234','1234 street ave','St Paul','MN','55101','2022-04-22','He/Him','Clay','123-123-1234','3',1),
(102,'Brandon11','check_slack','Brandon','https://avatars.githubusercontent.com/u/90584592?v=4','Lanier','mattblack@email.com','651-865-1234','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','123-4567','3',1),
(103,'Chandler11','check_slack','Andrew','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Chandler','chandler@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','he/him','Josh Kralewski','651-867-5309','3',1),
(104,'Tony11','check_slack','Tony','https://media-exp1.licdn.com/dms/image/C4E03AQFSm8TDnODIAg/profile-displayphoto-shrink_400_400/0/1643396210083?e=1656547200&v=beta&t=yLrG-T-rDDySQWbBWKJk49COOBiqUA-xyX-r-GN7RO4','LaForgia','tony@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','he/him','Josh Kralewski','651-867-5309','3',1),
(105,'Arthur11','check_slack','Arthur','https://media-exp1.licdn.com/dms/image/C4E03AQGSw9oc0xD6iw/profile-displayphoto-shrink_400_400/0/1607055874737?e=1655942400&v=beta&t=8A1Hxj5XizsbU98he9pKkZK4U8DfPuB_-JUxds-4qVM','Tran','arthurt@email.com','651-123-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','3',1),
(106,'Sion11','check_slack','Sion','https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Graham','siongraham@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(107,'Rhys11','check_slack','Rhys','https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','Kirk','rhyskirk@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','3',1),
(108,'Kianna11','check_slack','Kianna','https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Reed','kiannareed@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(109,'Ellie11','check_slack','Ellie-Louise','https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Shepard','ellieshep@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(110,'Kaitlin11','check_slack','Kaitlin','https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Torres','ktorres@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(111,'Benito11','check_slack','Benito','https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','Mcfarlane','benitomcfarlane@email.com','651-865-1234','1234 street ave','St Paul','MN','55101','2022-04-22','He/Him','Clay','651-123-1234','3',1),
(112,'Lucia11','check_slack','Lucia','https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Field','luciafield@email.com','651-865-1234','640 Jackson Street','St Paul','MN','55101','2000-07-20','She/Her','Clay','651-123-4567','3',1),
(113,'Alice11','check_slack','Alice','https://images.pexels.com/photos/6984618/pexels-photo-6984618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Kaiser','kaisera@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','She/Her','Josh Kralewski','651-867-5309','3',1),
(114,'Aron11','check_slack','Aron','https://images.pexels.com/photos/1676729/pexels-photo-1676729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Sullivan','sullivanaron@email.com','651-354-0552','640 Jackson Street','Saint Paul','MN','55101','1996-01-20','He/Him','Josh Kralewski','651-867-5309','3',1),
(115,'Dilan11','check_slack','Dilan','https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260','Mendez','dhogan@email.com','651-123-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','3',1),
(116,'Tina11','check_slack','Tina','https://images.pexels.com/photos/962337/pexels-photo-962337.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Dodd','tdodd@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(117,'Mckenzie11','check_slack','Mckenzie','https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Keller','mkeller@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','She/Her','Josh Kralewski','651-867-5309','3',1),
(118,'Matteo11','check_slack','Italo','https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Guerra','matteoguerra@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','3',1),
(119,'Devonte11','check_slack','Francisco','https://images.pexels.com/photos/2932728/pexels-photo-2932728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','Hogan','devgutierrez@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','He/Him','Josh Kralewski','651-867-5309','3',1),
(120,'Parker11','check_slack','Parker','https://images.pexels.com/photos/4073954/pexels-photo-4073954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','DeWitt','parkerdewitt@email.com','651-723-4567','640 Jackson St','St Paul','MN','55101','1995-11-03','They/Them','Josh Kralewski','651-867-5309','3',1),
(200,'Clay22','check_slack','Clay','https://avatars.githubusercontent.com/u/90583942?v=4','Webb','clay_webb@outlook.com','651-964-5585','38752 orange alcove','Bloomington','MN','55122','1999-07-09','he/him','colin','651-723-4567','3',2),
(201,'Mark22','check_slack','Mark','https://media.istockphoto.com/photos/confident-gym-owner-picture-id1324042769?b=1&k=20&m=1324042769&s=170667a&w=0&h=jAwDr6qkVDFxds70ODp0rlzaofDKXNhdaKZyfM_l-eQ=','Jaworski','colin@yahoo.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','651-723-4567','3',2),
(202,'Sarah22','check_slack','Sarah','https://www.afaa.com/images/default-source/2020/pages/home/afaa-group-fitness-certification.jpg?sfvrsn=236a314_0','Shulz','bethshulz@yemail.com','763-867-5309','123 first street','Minneapolis','MN','55443','1984-12-05','She/Her','clay','651-723-4567','3',2),
(203,'Andrew22','check_slack','Andrew','https://images.ctfassets.net/psi7gc0m4mjv/65DGWgJtzd6t2KRanvMsIa/60dc315420b13cd9102751bc014c5a0b/certified_personal_trainer_mobile_hero_image_2x.jpg','Smith','danesmith@email.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','651-723-4567','3',2),
(204,'Liz22','check_slack','Liz','https://avatars.githubusercontent.com/u/17734101?v=4','Kerber','lizkerber@email.com','651-865-1234','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','651-723-4567','3',2),
(300,'Koffi33','check_slack','Koffi','https://avatars.githubusercontent.com/u/80186837?v=4','Kittleson','koffi.k.collins@gmail.com','651-354-0552','8901 south ave','Minneapolis','MN','55443','1999-07-09','they, them','clay','651-723-4567','3',3),
(301,'Hailee33','check_slack','Hailee','https://media-exp1.licdn.com/dms/image/C4E03AQFNQlmK6gdl-A/profile-displayphoto-shrink_400_400/0/1601063689041?e=1655942400&v=beta&t=Cz1HHeP7Qvji74xVa0VOEKtokD73jWV2NOV1ABDzJW4','Bland-Walsh','hailee@email.com','651-865-1234','640 Jackson Street','St Paul','MN','55101','2000-07-20','she/her','Clay','651-723-4567','3',3),
(302,'Josh33','check_slack','Josh','https://media-exp1.licdn.com/dms/image/C4E03AQGlycW9Vpes2w/profile-displayphoto-shrink_200_200/0/1647360104027?e=1655942400&v=beta&t=LOr5SZOu40bwdk1o0CROEn8bmyI8WhNF3Ty6wOwpOpI','Kralewski','Joshkmanj@Gmail.com','651-295-8859','420 milky way','Minneapolis','MN','55444','1996-01-20','he/him','clay','651-723-4567','3',3);





INSERT INTO "public"."classes"("id","classname","description","trainer_user_id","date","start_time","end_time","street","city","state","zip","class_size")
VALUES
(1,E'Core Wrx',E'This core class will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',200,E'2022-04-26',E'08:00:00',E'09:00:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',18),
(2,E'Fit Strike',E'This is an hour long high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.',200,E'2022-04-26',E'12:30:00',E'13:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',12),
(3,E'Yoga Power',E'Be prepared to sweat in this athletic, strong, and centered, strength filled class.',202,E'2022-04-26',E'14:00:00',E'15:00:00',E'1 1st St S',E'Minneapolis',E'MN',E'55401',10),
(4,E'Fit Strength',E'This total body workout is designed to utilize a variety of gym equipment and is programmed to develop functional strength. Our instructors focus is to help you get stronger in a safe, fun, and well mixed format. Cardio will be worked in as well, but strength is the goal! All levels encouraged.',200,E'2022-04-26',E'17:00:00',E'18:00:00',E'1 1st St S',E'Minneapolis',E'MN',E'55401',18),
(5,E'Fit Circuit',E'This is an all encompassing strength and cardio class. The instructors have the unique opportunity to use the equipment and exercises they see fit. Participants will move from one challenging exercise to another. All levels encouraged. ',200,E'2022-04-26',E'18:30:00',E'19:30:00',E'1 1st St S',E'Minneapolis',E'MN',E'55401',18),
(6,E'Strength 360',E'This class utilizes all aspects of the Life Fitness SYNRGY360: cable station, pull-ups, land-mine, TRX, etc. Class will consist of 45 second rounds utilizing 15+ stations around the SYNRGY. All fitness levels are welcome.',201,E'2022-04-27',E'06:30:00',E'07:30:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',12),
(7,E'Fit Strength',E'This total body workout is designed to utilize a variety of gym equipment and is programmed to develop functional strength. Our instructors focus is to help you get stronger in a safe, fun, and well mixed format. Cardio will be worked in as well, but strength is the goal! All levels encouraged.',203,E'2022-04-27',E'09:00:00',E'10:00:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',15),
(8,E'Yoga Flow',E'A challenging and invigorating flow class, held in the group exercise room, is designed for all levels. This class will work: endurance, flexibility, strength and inner peace.',204,E'2022-04-27',E'10:30:00',E'11:30:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',15),
(9,E'Fit Strike',E'This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',200,E'2022-04-27',E'17:00:00',E'18:00:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',10),
(10,E'TRX Strength',E'This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,E'2022-04-27',E'18:30:00',E'19:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',10),
(11,E'Yoga Flow',E'A challenging and invigorating flow class, held in the group exercise room, is designed for all levels. This class will work: endurance, flexibility, strength and inner peace.',202,E'2022-04-28',E'06:00:00',E'07:00:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',18),
(12,E'City F.I.T.',E'This is a high intensity total body workout. The class is formatted specifically to give you one round of strength, cardio, and core, in 60 second bursts. Come ready to get your sweat on as we move through each round of exercise. All levels are encouraged, as our instructors have the capacity to modify for any individual.',203,E'2022-04-28',E'08:00:00',E'09:00:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',18),
(13,E'City Strike',E'This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,E'2022-04-28',E'12:15:00',E'01:15:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',18),
(14,E'TRX Strength',E'This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,E'2022-04-28',E'18:30:00',E'19:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',10),
(15,E'Zumba',E'Zumba® involves dance and aerobic elements. Unlike a typical dance class where counts are used, Zumba® involves following the music with repetitive movements. Zumbas® choreography incorporates hip-hop, samba, salsa, merengue, mambo, martial arts, Bollywood, and belly dance moves. With Zumba®, have fun and burn up the dance floor!',204,E'2022-04-29',E'07:00:00',E'08:00:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',18),
(16,E'Core Wrx',E'This core class will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',200,E'2022-04-29',E'08:00:00',E'09:00:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',18),
(17,E'Fit Strike',E'This is an hour long high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.',200,E'2022-04-28',E'12:30:00',E'13:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',12),
(18,E'TRX Strength',E'This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,E'2022-04-29',E'18:30:00',E'19:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',10),
(19,E'Zumba',E'Zumba® involves dance and aerobic elements. Unlike a typical dance class where counts are used, Zumba® involves following the music with repetitive movements. Zumbas® choreography incorporates hip-hop, samba, salsa, merengue, mambo, martial arts, Bollywood, and belly dance moves. With Zumba®, have fun and burn up the dance floor!',202,E'2022-04-30',E'08:00:00',E'09:00:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',18),
(20,E'City Strike',E'This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,E'2022-04-30',E'10:15:00',E'11:15:00',E'425 Jefferson St NE',E'Minneapolis',E'MN',E'55413',18),
(21,E'TRX Strength',E'This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,E'2022-04-30',E'13:30:00',E'14:30:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',18),
(22,E'Core Wrx',E'This core class, held on the grass, will work not only your core but your glutes, chest and back as well. All fitness levels are welcome!',201,E'2022-05-01',E'06:00:00',E'07:00:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',18),
(23,E'City Strike',E'This is a high-intensity, interval-based, full body workout. Each class utilizes heavy bags in combination with strength training and cardio equipment for the ultimate heart pumping, sweat dripping, calorie-blasting workout. This class has been carefully crafted to tone your body and torch your metabolism.\nGloves are required.',204,E'2022-05-01',E'10:15:00',E'11:15:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',12),
(24,E'TRX Strength',E'This class will focus on Total Body strength and functional movement utilizing TRX straps, body weight and functional training tools to help improve strength, stability and balance! All Levels are welcome, modifications will be offered.',200,E'2022-05-01',E'13:30:00',E'14:30:00',E'724 Sibley St NE',E'Minneapolis',E'MN',E'55413',10),
(25,E'Strength 360',E'This class utilizes all aspects of the Life Fitness SYNRGY360: cable station, pull-ups, land-mine, TRX, etc. Class will consist of 45 second rounds utilizing 15+ stations around the SYNRGY. All fitness levels are welcome.\n',200,E'2022-05-01',E'16:00:00',E'17:00:00',E'200 Dr Justus Ohage Blvd',E'St Paul',E'MN',E'55107',15);



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

