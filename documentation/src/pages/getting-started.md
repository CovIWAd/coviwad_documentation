# Getting started guide
### Organization
Our app is available on this Github origanization named [CovIWAd](https://github.com/CovIWAd).

### Steps

To launch the project locally you must :

#### Start your docker
Don't forget to start docker.

#### Clone repositories

- Clone the different microservice :
	- [news](/news) : ```https://github.com/CovIWAd/coviwad_news.git```
	- [documents](/documents) : ```https://github.com/CovIWAd/coviwad_documents.git```
	- [users](/users) : ```https://github.com/CovIWAd/coviwad_users.git``` (not testable wih deployed Keycloak - version not terminated of the adaptation on branch *testDeploy*)
	- [geolocation](/geolocation) : ```https://github.com/CovIWAd/coviwad_geolocation.git```
	- [gateway](/gateway) : ```https://github.com/CovIWAd/coviwad_gateway.git```
	- [kafka](/kafka) : ```https://github.com/CovIWAd/coviwad_kafka.git```

- Clone front app :
	- [front](/front) : ```https://github.com/CovIWAd/coviwad_front.git```

#### Follow README
To launch each microservice just follow the steps of the readme. You will find each readme by **clicking the name of the microservice** just above.

#### Order of microservice launchings
- Launch Gateway
- Launch Kafka
- Launch Geolocation
- Launch News
- Launch Documents
- *(Launch Users)*

#### Front
- Launch Front


