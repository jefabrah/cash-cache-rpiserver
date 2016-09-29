 const axios = require('axios');

 module.exports = {
   postCoinInput: function (pulseCount) {
      console.log('Pulse Count:',pulseCount);
      // get coin value from pulse count
      switch (pulseCount) {
         case 1:
            console.log('penny');
            break;
         case 2:
            console.log('nickel');
            break;
         case 3:
            console.log('dime');
            break;
         case 4:
            console.log('quarter');
            break;
         default:
            console.log('Invalid pulse');
      }
   }
 };
