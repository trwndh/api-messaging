# API for Messaging
Simple API for create and retrieve message

## API endpoint

1. API for sending message on ```POST /messages```
2. API for collect message that has been sent out on ```GET /message/:sender_id``` 
3. API to display realtime message on ```/ws``` using websocket on localhost port ```3333```

API server located on ```http://localhost:3000/```

# Quick Start

## Technologies used on this project
* ExpressJS
* MySQL

## Software required for installation
* NodeJS ```v12.13.0```
* npm ```v6.12.0```
* docker ```v18.09.7```
* docker-compose ```1.12.0```

## How to run
* Running database using docker-compose
```
$ docker-compose -f docker-mysql-compose.yml up
```

* Install Dependencies
```
$ npm install
```

* Start API Server
```
$ npm start
```

## Testing endpoint

test script available on ```test/messages.test.js```

```
$ npm test
```

## Testing websocket for display realtime messages

use browser (chrome/firefox) console
```
var conn = new WebSocket('ws://localhost:3333/ws')
conn.onmessage = function (e) {
    console.log(e.data);
};
```
