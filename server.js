// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'rising'),
    buttonCount = 0,
    pulsing = false;

// callback function for button press
function handlePulse (err, state) {

  if (err) {
    console.log('err: ', err);
    return;
  }
  console.log('state: ', state);
  // if button state does not equal 1 log
  // & return out of function
  if(state !== 1) {
    console.log('State did not equal 1!?');
    return;
  }
  // increment pulse count
  buttonCount++;
  // if pulsing started return
  if (pulsing) return;
  pulsing = true;
  // otherwise turn on led &
  // set timeout to clear count & turn off led
  led.writeSync(1);
  setTimeout(function () {
    led.writeSync(0);
    console.log('LED off');
    console.log('Button count:', buttonCount);
    buttonCount = 0;
    console.log('Button count reset to:', buttonCount);
    pulsing = false;
  }, 600)
}

// pass the button callback function to the 
button.watch(handlePulse);
