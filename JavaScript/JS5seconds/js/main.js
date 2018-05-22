(function(){
  'use strict'

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click',function(){
      if(isStarted === true){
        return;
      }
      isStarted = true;
      startTime = Date.now();
      result.textContent = '0.000';
      result.className = 'standby'; //put back standby-Style
  });

  //push-action
  start.addEventListener('mousedown',function(){
      this.className = 'pushed';//pushed-Style
  });
  start.addEventListener('mouseup',function(){
      this.className = '';//put off pushed-Style
  });


  stop.addEventListener('click',function(){
      if(isStarted === false){
        return;
      }
      isStarted = false;
      var elapsedTime;
      var diff;
      elapsedTime = (Date.now() - startTime) / 1000;
      result.textContent = elapsedTime.toFixed(3);
      diff = elapsedTime - 5.0;
      // if (diff > -1.0 && diff < 1.0){
      if( Math.abs(diff) < 1.0){
        result.className = 'parfect';
      }
  });

  //push-action
  stop.addEventListener('mousedown',function(){
      this.className = 'pushed';//pushed-Style

  });
  stop.addEventListener('mouseup',function(){
      this.className = ''; //put off pushed-Style
      result.className = ''; // put off ever additional style on result and make it original
  });


})();
