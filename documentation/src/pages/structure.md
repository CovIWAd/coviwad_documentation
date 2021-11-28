# Code structure
- **Code** :
	- *config*: All configurations that link the microservice and the user management services (*Keycloak*) and the messages recorded on *Kafka*.
	- *controllers*: The structure of the application is **MVC** (Model, View, Controller). In a microservice environment, the controller allows the creation of each specific path and link this path to a specific functionality.
	- *dtos* : DTOs or Data Transfer Objects are templates that allow to retrieve information from the *body* of HTTP requests that are not exactly similar to a template (*see next part*).
	- *models*: Models are important elements in the **MVC** structure. Indeed, they allow to link a Java class to a table of the database allowing to manipulate similar objects (attributes).
	- *repositories* : The *repositories* are interfaces allowing to automatically perform (thanks to the JPA dependency) functions that perform SQL queries (findById, findByUsername etc.) on the database linked to the microservice.
	- *services*: Services are used to extend the business logic and take it out of the controllers so that it can be reused.
	- *tools*: The classes put in this package are used to implement specific functions that have little to do with the business logic.

- **Tests** : 
	- *controller tests*: Controller tests are integration tests that test the proper routing and operation of requests sent from the front end.
	- *repository tests*: The repository tests are integration tests that allow you to test the correct operation of actions performed on the database (access, deletion and modification requests).

## Example of code structure on the "Geolocation" microservice
```
.
└── coviwad_geolocation/
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── fr.polytech.mtp.coviwad_geolocation/
    │   │   │       ├── config/
    │   │   │       │   ├── KafkaConfiguration.java
    │   │   │       │   └── KeycloakSecurityConfig.java
    │   │   │       ├── controllers/
    │   │   │       │   └── GeolocationController.java
    │   │   │       ├── dtos/
    │   │   │       │   └── PositiveTestDTO.java
    │   │   │       ├── models/
    │   │   │       │   └── Geolocation.java
    │   │   │       ├── repositories/
    │   │   │       │   └── GeolocationRepository.java
    │   │   │       ├── services/
    │   │   │       │   ├── EmailService.java
    │   │   │       │   └── GeolocationKafkaService.java
    │   │   │       ├── utils/
    │   │   │       │   └── GeolocationUtils.java
    │   │   │       └── CoviwadGeolocationApplication.java
    │   │   └── ressources/
    │   │       └── application.properties
    │   └── test/
    │       ├── java/
    │       │   ├── GeolocationControllerTest.java
    │       │   ├── GeolocationRepositoryTest.java
    │       │   ├── TestUtils.java
    │       │   └── CoviwadGeolocationApplicationTests.java
    │       └── ressources/
    │           ├── datasets/
    │           │   └── geolocations.yml
    │           └── application-test.properties
    ├── .gitignore
    ├── build.gradle
    ├── docker-compose.yml
    ├── gradlew
    ├── gradlew.bat
    ├── settings.gradle
    └── .travis.yml
```


See [front](/front).
Back to [technologies](/technologies).
