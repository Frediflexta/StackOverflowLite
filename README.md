# StackOverflowLite
[![Build Status](https://travis-ci.org/Frediflexta/StackOverflowLite.svg?branch=develop)](https://travis-ci.org/Frediflexta/StackOverflowLite)
[![Coverage Status](https://coveralls.io/repos/github/Frediflexta/StackOverflowLite/badge.svg?branch=develop)](https://coveralls.io/github/Frediflexta/StackOverflowLite?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f32b95f41b70d4ffb1ea/maintainability)](https://codeclimate.com/github/Frediflexta/StackOverflowLite/maintainability)

StackOverflowLite is a platform where people can ask questions and provide answers. Answers can be selected as favourites.

## Documentation
The hosted endpoint of this app hosted on heroku can be tested via postman
Some available routes include,
> On postman, send a GET request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/` to access all the questions on the database
> Send a GET request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>`
to access a single question
> Send a POST request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/` to create a question.
>Send a DELETE request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/<questionId>`
> Send a POST request to `https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions/answers` to post an answer to the question
> You can also sign up if you're a new user or signin for the returning guy.
`https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/signup`
`https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/login`

# SETUP
TO run the app locally, you would need to clone the repo to your local machine, ran `npm install` and give it a minute to set up packages and modules needed for it to work

## Dependences
* Front-end: Vanilla Html, CSS and Javascript
* Back-end: Node/Express framework
* DataBase: pg-node, PostgreSQL
* Libraries: airbnb ESlint, Mocha&Chai Assertion, JWT, Bcrypt, just to name a few
### Run The Service
* Run `npm start:dev` to run the app

