/*********************************************/
/*           Simple Thermometer              */
/*                                           */
/* Press button once. If temperature is 25C  */
/* then the RED LED will flash twice and the */
/* GREEN LED will flash 5 times.             */
/*********************************************/

function flashRED() {
  digitalWrite(LED1, 1);
  setTimeout(function() {
    digitalWrite(LED1,0);
  }, 100);
}

function flashGREEN() {
  digitalWrite(LED2, 1);
  setTimeout(function() {
    digitalWrite(LED2,0);
  }, 100);
}

function flashBLUE() {
  digitalWrite(LED3, 1);
  setTimeout(function() {
    digitalWrite(LED3,0);
  }, 100);
}

var digits = [0, 0];
setInterval(function() {
  if(digitalRead(BTN)) {
    temp = E.getTemperature();
    console.log('temp: ' + temp);
    digits = parseInt(temp).toString(10).split("").map(Number);
    console.log(digits);
  }
    
  if(digits[0]>0) {
    console.log("flashRED");
    flashRED();
  }
  
  if(digits[0] <= 0) {
   if(digits[1]>0) {
     console.log("flashGREEN");
     flashGREEN();
     digits[1]--;
   }
  }
  
  digits[0]--;
  
}, 800);
