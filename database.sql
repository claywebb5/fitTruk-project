
-- *** CREATE DATABASE NAME: fittruk

CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"phone number" integer,
	"address" varchar(255),
	"dob" DATE NOT NULL,
	"pronouns" varchar(255),
	"emergency_name" varchar(255),
	"emergency_number" integer,
	"profile_image" varchar(255),
	"free_classes" integer DEFAULT '3',
	"access_level" integer
);

CREATE TABLE "classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"classname" varchar(255),
	"description" varchar(500),
	"trainer_user_id" integer,
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






















