## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`






![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# FIT TRUK SCHEDULING APP

## Description

_Duration: 2 Week Sprint_

Your project description goes here.
What problem did you solve? 

_What led to Fit Truk?_
In 2020 the pandemic changed daily life for everyone. Life was more stressful, and to add to that people weren’t feeling comfortable exercising inside. Businesses strived to make the environment safe for their customers, but eventually non essential businesses, which includes gyms, were forced to close. Suddenly people weren’t able to have a healthy outlet to manage their stress, and when gyms were able to open back up, many people still felt uncertain about the safety of indoor gyms. This led our client to imagine a strength based, small group class format that could be done in a lower risk setting, that setting just happens to be outside.

Working out outside is nothing new, but it has always been very limited because of a lack of equipment, until now. Fit Truk is different. It is a fully equipped, mobile gym that delivers cutting edge group strength training workouts outdoors, anywhere, anytime. Simply put, it’s an innovative solution for outdoor strength training with all of the equipment you’d expect from a fully stocked professional gym.


_What was the purpose behind this app?_
Having a mobile gym presents its own unique set of challenges. When our client was trying to find a scheduling app that catered to Fit Truk’s needs, there just weren't any good options. Scheduling apps on the market today only cater to more traditional gyms, gyms that aren't mobile. Imagine as a business owner trying to change your location every time your mobile gym is offering a class in another spot. Now imagine your business is growing and you're bringing on more trucks, the scheduling process with the current apps becomes tedious, unmanageable and overall doesn’t scale. Our client’s customers also found these apps to be very cumbersome to use, with their excess of features making it too difficult to find the information that they needed so they could simply sign up for a class.

Fit Truk is unlike any other gym, so when our client was trying to find a scheduling app that catered to Fit Truk’s needs, there just weren't any good options. Our client was unsatisfied with other fitness scheduling apps because they had way too many features, a lot of which wouldn't be used by Fit Truk and their customers. Our client’s customers found these apps to be frustrating and cumbersome to use. It was too difficult to find the information that they needed so they could simply sign up for a class. Other scheduling apps only cater to more traditional gyms, gyms that can’t move around. Imagine as a business owner trying to change their location on google maps every time their mobile gym is offering a class in another spot, it’s tedious and time consuming. Now imagine your business is growing and you're bringing on more new trucks, the scheduling process with the current app becomes unmanageable, and impossible to scale. 

These are just some of the challenges that Hailee was facing when imagining the perfect scheduling app for her and her business. And it was these challenges that helped us design that perfect app. An app that is user friendly, scalable, and easy to use.


The Fit Truk App improves the scheduling and signup experiences of trainers and customers alike.
Customers are able to see upcoming classes and register for them; While administrators are able to create new classes, update existing class info, track attendance, and send updates to class participants all while keeping with Fit Truks’ brand standards and maintaining an enjoyable and cohesive experience for the user.




To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

List technologies and frameworks here

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)