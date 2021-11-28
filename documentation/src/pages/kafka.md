# Coviwad - Kafka

Kafka configuration used to launch kafka with docker for CovIWAd

## Setup kafka with docker

Launch Confluent Platform by running:
`docker-compose up -d`

Create the kafka topic:
`docker-compose exec broker kafka-topics --create --topic geolocation_topic --bootstrap-server broker:9092`

### In development mode

#### Start a console consumer (to read records sent to the topic)
From the same terminal you used to create the topic above, run the following command to open a terminal on the broker container:
`docker-compose exec broker bash`

From within the terminal on the broker container, run this command to start a console consumer:
`kafka-console-consumer --topic geolocation_topic --bootstrap-server broker:9092`

See [users](/users).
Go back to [keycloak](/keycloak).