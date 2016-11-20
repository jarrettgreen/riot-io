<img src='https://github.com/jarrettgreen/riot-io/blob/master/logo.png?raw=true' height=120/>

[![Build Status](https://travis-ci.org/jarrettgreen/riot-io.svg?branch=master)](https://travis-ci.org/jarrettgreen/riot-io)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/riot-io/general)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard%20js-brightgreen.svg)](http://standardjs.com/)

# RIOT IO - React Internet of Things
### A MERN based app for monitoring and interacting with your Internet of Things Things via MQTT.

Currently, Riot is a BYOB (Bring your Own Broker) setup. You can configure your MQTT connection in a .env file:

```
MQTT_HOST=mqtt://somehost
MQTT_USER=username
MQTT_PASS=password

```

# Run
```
$ npm run watch
$ npm start
```

By default this will start on port `8080` but you can define a different port in your .env file.
