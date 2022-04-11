
-- *** CREATE DATABASE NAME: fittruk

CREATE TABLE "users" (
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
	"access_level" integer
);

CREATE TABLE "classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"classname" varchar(255),
	"description" varchar(500),
	"trainer_user_id" int REFERENCES "users",
	"date" DATE,
	"start_time" TIME,
	"end_time" TIME,
	"location" varchar(255),
	"class_size" integer
);

CREATE TABLE "class_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"class_id" int REFERENCES "classes",
	"user_id" int REFERENCES "users",
	"checked_in" BOOLEAN DEFAULT false
);

insert into users ("username", "password", "name", "email", "phone_number", "address", "dob", "pronouns", "emergency_name", "emergency_number", "profile_image", "access_level")
values ('colinjay', 12345, 'Colin Jaworski', 'colin@yahoo.com', '763-867-5309', '123 first street, mpls, MN', '12/05/1984', 'he', 'clay', '123-4567', 'profileImage.url', 1); 


insert into classes ("classname", "description", "trainer_user_id", "date", "start_time", "end_time", "location", "class_size" )
values ('HIIT', 'high intensity interval training', 1, '4/12/2022', '12:00', '13:00', 'at the park?', 20);























