# Coviwad - Documents

## Setup database for documents (vaccines and tests)

Run docker-compose configuration:

`docker compose up`

After the services have started, the database should be available thanks to the command : `docker exec -it covid-postgres-documents psql -U postgres`
Then connect to the database '\c documents_covid'

**If there is no table named "documents" : copy/paste the content of `./sql/create-tables.sql`**

## Launch microservice

Run `bootRun` with the given environment variables:

```
KEYCLOAK_CLIENT = login-app

KEYCLOAK_REALM = SpringBootKeycloak

DB_URL = jdbc:postgresql://localhost:5438/documents_covid

DB_USER = postgres

KEYCLOAK_SECRET = 7b062370-684b-4cb0-ab44-a6aca424da58

DB_PASSWORD = postgres

KEYCLOAK_URL = https://coviwad-keycloak.cluster-ig5.igpolytech.fr/auth

```

See [news](/news).
Go back to [front](/front).
