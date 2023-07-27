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

### Endpoints:

| Method | Endpoint                   | Description                                       | Authentication                     |
| ------ | -------------------------- | ------------------------------------------------- | ---------------------------------- |
| POST   | /users                     | Create user                                       | Any user, token is not required    |
| GET    | /users                     | List all users                                    | Just admin user                    |
| GET    | /users/:id                 | Retrieve user data                                | Just admin user or account owner   |
| PATCH  | /users/:id                 | Update user                                       | Just admin user or account owner   |
| DELETE | /users/:id                 | Delete user                                       | Just admin user or account owner   |
| POST   | /login                     | Generate authentication token                     | Any user, token is not required    |
| POST   | /categories                | Criação de categoria                              | Just admin user                    |
| GET    | /categories                | Lista todas as categorias                         | Any user, token is not required    |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Any user, token is not required    |
| POST   | /realEstate                | Criação de um imóvel                              | Just admin user                    |
| GET    | /realEstate                | Lista todos os imóveis                            | Any user, token is not required    |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Registered User, token is required |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Just admin user                    |
