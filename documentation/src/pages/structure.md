# Structure du code
- Le **code** : 
	- *config* : Toutes les configurations permettant de relier le microservice et les services de gestion des utilisateurs (*Keycloak*) et les messages enregistrés sur *Kafka*.
	- *controllers* : La structure de l'application est celle du **MVC** (Model, View, Controller). Dans un environnement de microservice, le controller permet la création de chaque chemin spécifique et lier ce chemin à une fonctionnalité spécifique.
	- *dtos* : Les DTOs ou Data Transfer Objects sont des modèles qui permettent de récupérer des informations depuis les *body* des requêtes HTTP qui ne sont pas exactement similaire à un modèle (*cf. Partie suivante*).
	- *models* : Les modèles sont des éléments importants dans la structure **MVC**. En effet, ils permettent de relier une classe Java à une table de la base de données permettant de manipuler des objets similaires (attributs).
	- *repositories* : Les *repositories* sont des interfaces permettant d'effectuer automatiquement (grâce à la dépendance JPA) des fonctions qui réalisent des requêtes SQL (findById, findByUsername etc.) sur la base de données liée au microservice.
	- *services* : Les services sont utilisés pour étendre la logique métier et la sortir des controllers afin de pouvoir les réutiliser.
	- *utils* : Les classes misent dans ce package permettent d'implémenter des fonctions précises et assez peu en lien avec la logique métier.
- Les **tests** : 
	- *tests du controller* : Les tests du controller sont des tests d'intégration permettant de tester le bon routage et le bon fonctionnement des requêtes envoyées depuis le front.
	- *tests du repository* : Les tests du repository sont des tests d'intégration permettant de tester le bon fonctionnement des actions faites sur la base de données (requêtes d'accès, de suppression et de modification).

##Exemple de structure de code sur le microservice "Geolocation"
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


Voir [keycloack](/keycloack).
Revenir sur [la géolocalisation](/geolocation).