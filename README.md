# StackOverflowLite
[![Build Status](https://travis-ci.org/Frediflexta/StackOverflowLite.svg?branch=develop)](https://travis-ci.org/Frediflexta/StackOverflowLite)
[![Coverage Status](https://coveralls.io/repos/github/Frediflexta/StackOverflowLite/badge.svg?branch=develop)](https://coveralls.io/github/Frediflexta/StackOverflowLite?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f32b95f41b70d4ffb1ea/maintainability)](https://codeclimate.com/github/Frediflexta/StackOverflowLite/maintainability)

StackOverflowLite is a platform where people can ask questions and provide answers. Answers can be selected as favourites.

## Features:
- User can signup and signin to the platform
- Users can create questions
- Users can view all available questions
- Users can view the details of question and all it's answers
- Users can pick an answer to their question as their favourite
- Users can vote-up an answer or vote-down an answer
- Users can search for a question

## TECHNOLOGIES
#### Client Side:
The frontend was implemented using:
* [HTML](https://www.w3schools.com/Html/) A standard markup language for creating Web pages
* [CSS](https://www.w3schools.com/css/css_intro.asp) This describes how HTML elements are to be displayed on screen.
* [JavaScript](https://www.w3schools.com/js/default.asp) A programming language of HTML and the Web.

#### Backend:
The Backend was implemented using: 
 * [Node](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
 * [Express](https://expressjs.com/) Express is a minimal and flexible Node.js web application framework
 * [PostgreSQL](https://www.postgresql.org/) The world's most advanced, powerful, open source object-relational database system



## Documentation
The hosted endpoint of this app hosted on heroku can be tested via postman
Some available routes include,

> - Send a POST request to signup or login to
`https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/signup`
`https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/login`
> - Send a GET request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/` to access all the questions on the database
> - Send a GET request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>`
to access a single question
> - Send a POST request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/` to create a question.
> - Send a DELETE request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>`
> - Send a POST request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>/answers` to post an answer to the question
> - Send a POST requst to 
`https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>/answers/<answerId>` to pick an answer as prefered

### SETUP
TO run the app locally, you would need to clone the repo, run 
`npm install` and give it some minutes to set up all it's dependences and development dependence 

### Run The App
* Run `npm start:dev` to run the app

## Limitations
* Users don't get real-time notification when their answers are being picked as favourite
* Users don't get real-time notification when their answers are voted-up or voted-down

## Contributing
* Please feel free to fork this repository
* Clone to your local environment: https://github.com/Frediflexta/StackOverflowLite.git
* Create your feature branch: git checkout -b ft-my-new-feature
* Commit your changes: git commit -am 'Add some feature'
* Write test for the new features
* Push to the branch: git push origin ft-my-new-feature-2178134
* Submit a pull request against the development branch


## Author
* Adegoke Fred

## Licence 
[MIT License](https://github.com/Kenec/PostIt/blob/master/LICENSE)

