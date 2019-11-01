# API for Messaging
Simple API for create and retrieve message

## Case
1. API for sending message on ```POST /messages```
2. API for collect message that has been sent out on ```GET /messages/:sender_id``` 
3. API to display realtime message on ```/ws``` using websocket on localhost port ```3333```

API server located on ```http://localhost:3000/```

# Quick Start

## Technologies used on this project
* ExpressJS
* MySQL

## Software required for installation
* docker ```v18.09.7```
* docker-compose ```1.12.0```

## How to run
* Start the server
```
$ docker-compose -f docker-mysql-compose.yml up
```


## Testing 
* Test script available on ```test/messages.test.js```

* Use docker exec to execute test:

```docker exec -it image_name bash```

then run :
```# npm test```

## Testing websocket to display realtime messages

Use browser (chrome/firefox) console
```
var conn = new WebSocket('ws://localhost:3333/ws')
conn.onmessage = function (e) {
    console.log(e.data);
};
```
