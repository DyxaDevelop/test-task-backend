# Task 

We create mobile applications and sometimes we have to run AB tests to test hypotheses. To do this, we need a system that is the simplest REST API, consisting of one endpoint.
## API and distribution

At startup, the mobile application generates some unique client ID (which is saved between sessions) and requests a list of experiments by adding the Device-Token HTTP header. In response, the server returns a list of experiments. For each experiment, the client receives:

  Key: the name of the experiment. There is some code in the client that will change some behavior depending on the value of this key 
  Value: string, one of the possible options (see below)
It is important that the device falls into one group and always remains in it.

## Experiments
1. Button color
We hypothesize that the color of the "buy" button affects the conversion to a purchase.
Key: button_color
Options:
  - #FF0000 → 33.3%
  - #00FF00 → 33.3%
  - #0000FF → 33.3%


So after 600 requests to the API with different DeviceToken, 200 devices should receive each color2.Purchase cost
We hypothesize that a change in the cost of an in-app purchase may affect our profit margin. But in order not to lose money in the event of an unsuccessful experiment, 75% of users will receive the old price and only on a small part of the audience we will test the change:
### Key price
Options:
  - 10 → 75%
  - 20 → 10%
  - 50 → 5%
  - 5 → 10%
## Requirements and Limitations
If the device once received a value, then it will always receive only that value.
The experiment is carried out only for new devices: if the experiment was created after the first request from the device, then the device should not know anything about this experiment
## Task
- Design, describe and implement an API
- Add experiments (1) and (2) to your app
- Create a page for statistics: a simple table with a list of experiments, the total number of devices participating in the experiment and their distribution between options
Any technology and libraries can be used

### As Advantage will be:
- Availability of tests
- Deployed version of the application
- Server response speed <100ms
- The table is powered by React with the ability to sort and filter by columns

 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

