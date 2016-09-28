// coinInput is attaced to pin 17, led to 18
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
  console.log('state: ', state);
  // if coinInput state does not equal 1 log
  // & return out of function
  if(state !== 1) {
    console.log('State did not equal 1!?');
    return;
  }
  // increment pulse count
  pulseCount++;
  // if pulsing started return
  if (pulsing) return;
  pulsing = true;
  // otherwise set timeout to clear count
  setTimeout(function () {
    console.log('Pulse count:', pulseCount);
    requests.postCoinInput(pulseCount);
    pulseCount = 0;
    console.log('Pulse count reset to:', pulseCount);
    pulsing = false;
  }, 600)
}

// pass the coinInput callback function to the
coinInput.watch(handlePulse);
