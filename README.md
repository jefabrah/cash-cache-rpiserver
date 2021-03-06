# :heavy_dollar_sign:Cash Cache Raspberry Pi Server:heavy_dollar_sign:
IO & HTTP server for coin input from CH-926 coin accepter to [Cash Cache Web App](https://github.com/mattbajorek/Cash-Cache)



## Dependencies

- [onoff](https://www.npmjs.com/package/onoff): GPIO input form coin accepter
- [axios](https://www.npmjs.com/package/axios): HTTP requests to Cash Cache API

## Requirements

- Raspberry Pi 3 (Raspbian Jessie or Ubuntu MATE)
- CH-926 Coin Accepter
- Node version 4 or above
- NPM version 2 or above
- Bread board
- jumpers for bread board
- electrical tape for connections to coin accepter
- coins/tokens (without holes)


## Getting Started

Go to the [Cash Cache Site](http://cash-cache.herokuapp.com) and sign up
**Take note of the username you use. You will need this later**

## Raspberry Pi Configuration

1. [Install Raspbian, Node & NPM on raspberry pi](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/)

2. [set up SSH on raspberry pi](http://www.instructables.com/id/Use-ssh-to-talk-with-your-Raspberry-Pi/)

3. Connect to raspberry pi through SSH

4. install git `sudo apt-get install git`

5. clone this repository onto the desktop 
  * `cd Desktop`
  * `git clone git@github.com:jefabrah/cash-cache-rpiserver.git`
  
6. **Important**: change your name on the in requests.js the username you set used on the [Cash Cache Site](http://cash-cache.herokuapp.com)
  * `cd cash-cache-rpiserver`
  * `nano requests.js`
  * arrow down and over to `const username = 'username';` and change username ex. `const username = 'johnsmith';`
  * save and exit
  
## Coin Accepter Wiring and Configuaration

### Note the ground from the coin accepter is also going to the ground on the raspberry pi and the Gray 'Counter' wire is unused on the coin accepter

1. Wire the coin accepter to the raspberry pi using the diagram below

![alt text][logo]

[logo]: https://github.com/jefabrah/cash-cache-rpiserver/blob/master/cash-cache-diagram.png "Wiring Diagram"
 
2. Folling the [CH-926 instructions](https://cdn-shop.adafruit.com/datasheets/CHmulticoin.jpg) program the coins below to their appropriate pulses
  * pennies = 1 pulse
  * nickels = 2 pulses
  * dimes = 3 pulses
  * quarters = 4 pulses
  
## Starting the Server

### Given the you have wired and programmed the coin accepter properly, the server and coin accepter are now ready to be used

1. Double check you have wired the coin accepter properly and renamed the username variable in requests.js

2. Install npm dependencies `npm i`

3. Run the server `node server.js`
