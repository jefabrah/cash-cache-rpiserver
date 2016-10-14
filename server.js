// coinInput is attaced to pin 17
const requests = require('./requests'),
      GPIO = require('onoff').Gpio,
      coinInput = new GPIO(17, 'in', 'rising');
let   pulseCount = 0,
      pulsing = false;

// callback function for coinInput
function handlePulse (err, state) {

  if (err) {
    console.log('err: ', err);
    return;
  }
  // if state doesn't equal 1 return
  if (state !== 1) return;
  // increment pulse count
  pulseCount++;
  // if pulsing started return
  if (pulsing) return;
  pulsing = true;
  // otherwise set timeout to clear count
  setTimeout(function () {
    requests.postCoinInput(pulseCount);
    pulseCount = 0;
    pulsing = false;
  }, 600)
}

// set the coinInput callback function to handlePulse
coinInput.watch(handlePulse);
