# Coviwad - Geolocation

## Setup database for geolocation

Run docker-compose configuration:

`docker compose up`

After the services have started, the database should be available thanks to the command : `docker exec -it covid-postgres-geolocation psql -U postgres`
Then connect to the database '\c geolocation_covid'

**If there is no table named "documents" : copy/paste the content of `./sql/create-tables.sql`**

## Launch microservice

Run `bootRun` with the given environment variables:

```
KAFKA_BOOTSTRAP_ADDRESS = localhost:29092

KEYCLOAK_CLIENT = login-app

KEYCLOAK_REALM = SpringBootKeycloak

DB_URL = jdbc:postgresql://localhost:5439/geolocation_covid

DB_USER = postgres

KAFKA_GROUP_ID = coviwad

EMAIL_PASSWORD = C0viwad2

EMAIL_USERNAME = coviwad.alert@gmail.com

KEYCLOAK_SECRET = 7b062370-684b-4cb0-ab44-a6aca424da58

DB_PASSWORD = postgres

KEYCLOAK_URL = https://coviwad-keycloak.cluster-ig5.igpolytech.fr/auth

```

See [keycloak](/keycloack).
Go back to [news](/news).
