(function(){
    'use strict'; //error check
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
      var n = Math.random(); // 0 <= n < 1
      if (n < 0.05){ //5%
        this.textContent = '大吉';
      }else if (n < 0.2){ //15%
        this.textContent = '中吉';
      }else { //80%
        this.textContent = '凶';
      }


/*      var result = ['大吉','中吉','凶','末吉'];
      var n = Math.floor( Math.random() * result.length );
      this.textContent = result[n];*/
/*
      btn.addEventListener('click', function(){
      var n  = Math.floor(Math.random() * 3);
      switch (n) {
        case 0:
              this.textContent = '大吉';
              break;
        case 1:
              this.textContent = '中吉';
              break;
        case 2:
              this.textContent = '凶';
              break;
      }*/

/*
      if (n === 0){
        this.textContent = '大吉';
      }else if(n === 1){
        this.textContent = '中吉';
      }else{
        this.textContent = '凶';
      }*/
      // this.textContent = n ;
    });
    btn.addEventListener('mousedown', function(){
      this.className = 'pushed'; // The neme of this class that mouse down. Later we will write CSS on this.
    });
    btn.addEventListener('mouseup', function(){
      this.className = ''; // No need name.
    });
})();



/*
Math.random

if you want to get random number(interger)

0,1,2
Math.floor(Math.random() * 3)
->  Math.random() * 3  ... get  a (actual)number 0 <= n < 3
->  Math.floor()  ... conver to interger


0,1,2, ... ,n
Math.floor(Math.random() * n+1)

*/
