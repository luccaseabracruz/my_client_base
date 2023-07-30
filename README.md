# My Customer Base

An application to save your clients contacts and information.

## Instructions

### Starting backend

    This project uses node and postgreSQL. So, it is important to check if you already have these programs intalled on your machine.

    1. Create a SQL database through PostgreSQL using your terminal:
        $ psql
        $ CREATE DATABASE <your_db_name>;

    X. Fork this repository to your Github

    2. Clone the forked repository on your machine.
        $ git clone <ssh_key>

    X. On your terminal:
        $ cd ./backend (to enter the backend folder)
        $ npm install (to install all the dependencies)

    3. Populate the .env file with your the required information.
        $ npm run dev (to check if it is running properly)

    4. Migrate all the existent migrations with the following command:
        $ npm run typeorm migration:run -- -d src/data-source

### Starting frontend

    X. On your terminal:
        $ cd ./frontend (to enter the frontend folder)
        $ npm install (to install all the dependencies)
        $ npm run dev (to check if it running properly)

### Endpoints:

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
