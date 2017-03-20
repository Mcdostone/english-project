# english-project


This repository presents our english project as well the way to work on it!


## The English Quizz

The web app is a realtime two-multiplayer quizz game about english and american culture.

## Rules

Rules are simple: prove that you're more intelligent that your challenger by answering a set of X questions. The winner will be the player the best score. Your score is represented by points. There are several ways to win and loose points:
 - Correct answers will give you 1 point.
 - A supplementary point will be given if you answer before your opponent !
 - But be careful, you can loose 1 point if your answer is wrong. In this case, if the second player give a bad answer, He will not loose a point.


**Prepare your strategy to be the winner !**


## Scenario

This part describes interactions and different actions of user in order to use the web application.  

### 1. Creating a game session

 - The user connects on the web app and selects *create a game*
 - The web app will give a unique URL to this user. This URL is useful for the second player who wants to challenge the first one.

 ## 2. Joining the game session

  - When the second player gets the URL, he can join the first player.
  - Each player has to validate that they are ready to start the game.

### 3. During the game

  Each player must answer correctly a set of X questions.


### 4. End of the game
  - Results are displayed and the winner is revealed !
  - Players have to possibility to play again !


## Getting started

In order to develop quickly the app, we've decided to code in node.JS for the backend. The frontend is created with VueJS.
The project is composed of two parts: the backend part and the frontend.


    # If you work on the frontend -> webpack server
    npm run dev

    # If you work on the backend
    npm run build
    npm run server

### If you work on the backend !

The *server/* folder contains all files you need!

    english-project/server
      - db/        # all files for managing connections with postgreSQL
      - models/    # Models of app
      - views/     # Views of the app, only one file: index.html
      - public/    # CSS and JS
      - config.js  # config for the server
      - server.js  # Init the server
      - routes.js  # all routes of the app
      - sockets.js # Sockets if we use this...

### If you work on the frontend !

We use Vue-CLI to create the boilerplate.

    english-project/
      - build/      # all scripts to build the frontend app
      - config/     # config
      - src/        # core the the frontend app
      - index.html  # Entry point of the app

## Databases
For the database, we use postgreSQL, simple and cool !
**To simplify things, use *root* as the username !**

    # Creation of a user
    sudo -i -u postgres

    ## postgreSQL CLI after this command
    createuser -P --interactive root
    Enter password for new role: root
    Enter it again: root
    Shall the new role be a superuser? (y/n) y
    Shall the new role be allowed to create databases? (y/n) y
    Shall the new role be allowed to create more new roles? (y/n) y
    createdb -O root -E UTF8 english
    # Database ok configured !

    # Connects to the database
    psql -U root english
    ...


    # Insert data
    # Connects to the 'english' database
    psql english
    COPY questions(question, answer_1, answer_2, answer_3, answer_4, correct, visual) FROM '/path/to/file/english-project/server/questions.csv' DELIMITER '|' CSV;



Sequelize handles communication with the database !

## Authors

Yann Prono, @mcdostone

Yannick Philippe, @yannickPhilippe
