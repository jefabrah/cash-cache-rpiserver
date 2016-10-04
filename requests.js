 const axios = require('axios');

 module.exports = {
   postCoinInput: function (pulseCount) {
      console.log('Pulse Count:',pulseCount);
      // get coin value from pulse count
      let coin;
      switch (pulseCount) {
         case 1:
            console.log('penny');
            coin = 1;
            break;
         case 2:
            console.log('nickel');
            coin = 5;
            break;
         case 3:
            console.log('dime');
            coin = 10;
            break;
         case 4:
            console.log('quarter');
            coin = 25;
            break;
         default:
            console.log('Invalid pulse');
            return;
      }

      // send coin to API server
      let url = '192.168.1.162:3000/coin';

      axios.post(url, {
       coin: coin
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log('POST error: ', error);
     });
     
   }
 };
