// variables

let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;


// Store user input in local Storage

function Store(j){
 localStorage.setItem('text'+(j+1),$("#text"+(j+1)).val());
}

//This time I prefer to create the Timeblocks here in a quick way using JQuery codes instead of creating them in HTML file.
$(document).ready(function(){
  for (var i=0 ; i<9 ; i++){
    if (i<3) hr=(i+9)+'am';
    else if(i==3) hr='12pm';
    else  hr =(i-3)+'pm';
    $('#timeList').append('<div class="row"><div id="time'+(i+1)+'" class="col-2 border text-center time">'+hr+'</div><textarea id="text'+(i+1)+'" class="description col-9 border"></textarea>  <button id="btn'+(i+1)+'" type="button" onClick="Store('+i+');" class="col-1 saveBtn btn-info fa fa-save border" ></button></div>');
    $('#text'+(i+1)).text(localStorage.getItem('text'+(i+1)));
    $('#time'+(i+1)).css('background-color', '#8ddfba');
  }

// Display the time using moment.js

$('#currentDay').append(timeNow);

// Color coding to reflect whether the time slot is in the past, the present or the future 

colorCoding();

});

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  const hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  const hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  const hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  const hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  const hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  const hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  const hour8String = JSON.stringify(hour8);

  localStorage.setItem(hour8, $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  const hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})

//setings colors for past, present and future times

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', 'yellow');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', '#ff6961');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'lightgray');
  }
}

