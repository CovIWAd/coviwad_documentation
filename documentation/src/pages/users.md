# Coviwad - Users
:::tip My tip

Don't forget to launch keycloack first!

:::

## Database
The database should be available thanks to the command : `docker exec -it covid-postgres-keycloak psql -U postgres`
Then connect to the database '\c keycloak'
The table we are interested in is  `user_entity

## Launch microservice

:::danger Take care

This microservice does not work with the hosted version of keyclok!

:::

Run `bootRun` with the given environment variables:

```
DB_URL = jdbc:postgresql://localhost:5437/keycloak

DB_USER = postgres

KEYCLOAK_URL = http://localhost:5000/auth

KEYCLOACK_SECRET = (See your configuration in http://localhost:5000/auth)

KEYCLOAK_CLIENT = login-app

KEYCLOAK_REALM = SpringBootKeycloak

DB_PASSWORD = postgres

```


See [kafka](/kafka).
Go back to [gateway](/gateway).