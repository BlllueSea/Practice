(function(){
  'use strict';

  var price=document.getElementById('price');
  var num=document.getElementById('num');
  var unit=document.getElementById('unit');
  var btn=document.getElementById('btn');
  var result=document.getElementById('result');
  var reset=document.getElementById('reset');
  function checkInput(){
    // 正規表現
    // /^[1-9][0-9]*$/
    if (
      price.value.match( /^[1-9][0-9]*$/ ) !== null &&
      num.value.match( /^[1-9][0-9]*$/ ) !== null
    ){
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled'); // 数宇をdeleteした時用
    }
  }

  btn.addEventListener('click',function(){
    var payLess;
    var shortage;
    var payMore;
    var over;
    var str;
    if (this.classList.contains('disabled') === true){ //this=btn  if btnId contains disabledClass, Do something 押せないようにしてるだけ
      return;
    }
    // A. 300 (payLess) .. 100 (shortage) 不足
    // B. 400(payMore)... 200 (over) 余り
    // payLess = 1000/3;  -> 333.3333...
    // payLess = 1000/3/100 -> 3.3333...
    // payLess = Math.floor(1000/3/100) * 100; //300
    // shortage = 1000 - (300 * 3);//100 不足
    // payMore = Math.ceil(1000/3/100) * 100; //400
    // over = Math.abs(1000 - (400 * 3)); // 200 余り

    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
    shortage = price.value - (payLess * num.value);
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    over = Math.abs(price.value - (payMore * num.value));
    if( over===0 && shortage===0 ){
      str = 'One Person pay just '+ (price.value/num.value) + ' yen!'
    }else{
    str =
      'If One Person pay ' + payLess + ' yen, shortage is ' + shortage + '. '+
      'If One Person pay ' + payMore + ' yen, remainder is ' + over + '.';
    }
    result.textContent = str;
    reset.classList.remove('hidden');
    });


    price.addEventListener('keyup'/*イベント名*/, checkInput /*関数名  イベントリスナ*/);
    num.addEventListener('keyup'/*イベント名*/, checkInput /*関数名  イベントリスナ*/);
    // kyeup -> ユーザがキーボードから指を離した瞬間処理する
    reset.addEventListener('click', function(){
      result.textContent = 'Show result here.';
      price.value = '';
      num.value = '';
      unit.value = '100';
      btn.classList.add('disabled');
      this.classList.add('hidden');
      price.focus();
    });
    price.focus();

})();
