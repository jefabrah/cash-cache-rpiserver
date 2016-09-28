// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'rising');

// define the callback function
function light(err, state) {
  
  if (err) console.log('err: ', err);
  console.log('state: ', state);
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
   setTimeout(function () {
    console.log('LED off');
    led.writeSync(0);
   }, 100)
  }

}

// pass the callback function to the
// as the first argument to watch()
button.watch(light);
