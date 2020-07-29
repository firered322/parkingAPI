# parkingAPI
An API made using NodeJs and Express that manages a parking lot that is rate-limited by the IP Address.
There are 10 parking slots provided in the config names as the letters A to J inclusive.

The following API has 3 endpoints
  - POST /parker/park
  - POST /parker/unpark
  - POST /parker/status

- ### POST /parker/park
  - This endpoint takes in a string "carNumber" field from the request body which needs to be parked.
  - The car is then alotted the parking space accordingly.
- ### POST /parker/unpark
  - This endpoint takes in a string "parkingSlot" field from the request body which needs to be unparked.
  - The car is unparked and the parking slot is freed up.
- ### POST /parker/status
  - This endpoint takes in a string "parkingSlot" or a string "carNumber" field from the request body whose status whose parking status needs to be checked.
  - The car and its parking slot is shown as a result.

### Installation

Install the dependencies and devDependencies and start the server.

```
$ cd parkingAPI
$ npm install -d
$ node app
```
API testing done using Postman.
