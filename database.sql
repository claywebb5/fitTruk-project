
-- *** CREATE DATABASE NAME: fittruk


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--- THIS IS THE NEW STUFF BUT IT DEF NEEDS TO BE UPDATED SOMEWHAT ---
CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone number" integer NOT NULL,
	"address" varchar(255) NOT NULL,
	"dob" DATE NOT NULL,
	"pronouns" varchar(255) NOT NULL,
	"emergency_name" varchar(255) NOT NULL,
	"emergency_number" integer NOT NULL,
	"profile_image" varchar(255) NOT NULL,
	"free_classes" integer NOT NULL DEFAULT '3',
	"access_level" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.classes" (
	"id" serial NOT NULL,
	"classname" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"trainer_user_id" integer NOT NULL,
	"date" DATE NOT NULL,
	"start_time" TIME NOT NULL,
	"end_time" TIME NOT NULL,
	"location" varchar(255) NOT NULL,
	"class_size" integer NOT NULL,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.final attendance" (
	"id" serial NOT NULL,
	"class_id" integer NOT NULL,
	"total_signup" integer NOT NULL,
	"total_attendance" integer NOT NULL,
	"total_walkup" integer NOT NULL,
	CONSTRAINT "final attendance_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.class_list" (
	"id" serial NOT NULL,
	"class_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"checked_in" BOOLEAN NOT NULL,
	CONSTRAINT "class_list_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "classes" ADD CONSTRAINT "classes_fk0" FOREIGN KEY ("trainer_user_id") REFERENCES "users"("id");


ALTER TABLE "class_list" ADD CONSTRAINT "class_list_fk0" FOREIGN KEY ("class_id") REFERENCES "classes"("id");
ALTER TABLE "class_list" ADD CONSTRAINT "class_list_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");




