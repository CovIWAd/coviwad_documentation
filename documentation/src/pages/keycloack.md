# Coviwad - Keycloak

## Setup keycloak

Run docker-compose configuration:

`docker compose up`

After the services have started, keycloak should be available at http://localhost:5000/auth

**IF IT'S YOUR FIRST STARTUP, FOLLOW THESE INSTRUCTIONS**

1. Visit http://localhost:5000/auth
2. Click on `Administration Console`
3. Login with username `admin` and password `C0viwad2`
4. On left panel, over `Master` and click on `Add realm` button
5. Click on `Select File` and select the file `realm-export-V1.json` in this repository
6. Click on `Create`
7. Click user in top right corner > Manage account
8. Click Personal Info and edit the email to : coviwad.alert@gmail.com and choose names

See [kafka](/kafka).
Go back to [geolocation](/structure).
