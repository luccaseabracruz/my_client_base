# My Customer Base

An application to save your clients contacts and information.

## Instructions

### Starting frontend

    1. On your terminal:
        $ cd ./frontend (to enter the frontend folder)
        $ npm install (to install all the dependencies)
        $ npm run dev (to check if it running properly)

    2. Pass the Local url provided in the terminal to the VITE_URL Env variable on the backend folder.
        ATTENTION: the url must be without "/" in the end!!!!!

### Starting backend

    This project uses node and postgreSQL. So, it is important to check if you already have these programs intalled on your machine.

    1. Create a SQL database through PostgreSQL using your terminal:
        $ psql
        $ CREATE DATABASE <your_db_name>;

    2. Fork this repository to your Github

    3. Clone the forked repository on your machine.
        $ git clone <ssh_key>

    4. On your terminal:
        $ cd ./backend (to enter the backend folder)
        $ npm install (to install all the dependencies)

    5. Populate the .env file with your the required information and run this command:
        $ npm run dev (to check if it is running properly)

    6. Migrate all the existent migrations with the following command:
        $ npm run typeorm migration:run -- -d src/data-source

    7. Enter the Local url link provided in the frontend terminal with cntrl + click, register your account and enjoy the app.

    OBS: remember to run the backend and frontend simutaneously.

### API Endpoints:

| Method | Endpoint                       | Description                   | Authentication                   |
| ------ | ------------------------------ | ----------------------------- | -------------------------------- |
| POST   | /users                         | Create user                   | Any user, token is not required  |
| GET    | /users                         | List all users                | Just admin user                  |
| GET    | /users/self                    | Retrieve self user data       | Any user, token is not required  |
| GET    | /users/:id                     | Retrieve user data            | Just admin user or account owner |
| PATCH  | /users/:id                     | Update user                   | Just admin user or account owner |
| DELETE | /users/:id                     | Delete user                   | Just admin user or account owner |
| POST   | /login                         | Generate authentication token | Any user, token is not required  |
| POST   | /users/:id/contacts            | Contact creation              | Just admin user or account owner |
| GET    | /users/:id/contacts            | List user contacts            | Just admin user or account owner |
| GET    | /users/:id/contacts/:contactId | Retrieve contact by id        | Just admin user or contact owner |
| PATCH  | /users/:id/contacts/:contactId | Update contact by id          | Just admin user or contact owner |
| DELETE | /users/:id/contacts/:contactId | Delete contact by id          | Just admin user or contact owner |
