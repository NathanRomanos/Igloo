console.log('Working');



$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


      $("#endDate").datepicker( "option", "maxDate", enDate );

  }
});


$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  onSelect: function dateDiff() {

    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;
    console.log(days);
    return;
  }

});

var adultNumber = 1;
var childNumber = 0;

$("#adultMinus").hide();
$("#childMinus").hide();

// ADULT GUEST FUNCTION
document.getElementById('adult').innerText = adultNumber;

$("#adultPlus").click(function(){
  $("#adultMinus").show();

  if (adultNumber === 3) {
    $("#adultPlus").hide();
    $("#childMinus").hide();
    adultNumber = adultNumber+1;
    childNumber = 0;
  } else if (((adultNumber + childNumber) > 3) && (adultNumber < 4)) {
    childNumber = childNumber-1;
    adultNumber = adultNumber+1;
    $("#childPlus").show();
  } else if (adultNumber < 4) {
    adultNumber = adultNumber+1;
  };
  document.getElementById('adult').innerText = adultNumber;
  document.getElementById('child').innerText = childNumber;
});

$("#adultMinus").click(function(){
  if (adultNumber === 2) {
    $("#adultMinus").hide();
    adultNumber = adultNumber-1;
  } else if (adultNumber > 1) {
    $("#adultPlus").show();
    $("#childPlus").show();
    adultNumber = adultNumber-1
  };
  document.getElementById('adult').innerText = adultNumber;
});


// child GUEST FUNCTION
document.getElementById('child').innerText = childNumber;

$("#childPlus").click(function(){
  $("#childMinus").show();

  if (childNumber === 2) {
    $("#childPlus").hide();
    $("#adultMinus").hide();
    childNumber = childNumber+1;
    adultNumber = 1;
  } else if ((adultNumber === 1) && (childNumber === 3)){

  } else if (((adultNumber + childNumber) > 3) && (childNumber < 4)) {
    childNumber = childNumber+1;
    adultNumber = adultNumber-1;
    $("#adultPlus").show();
  } else if (childNumber < 4) {
    childNumber = childNumber+1
  };
  document.getElementById('child').innerText = childNumber;
  document.getElementById('adult').innerText = adultNumber;
});

$("#childMinus").click(function(){
  if (childNumber === 1) {
    $("#childMinus").hide();
    childNumber = childNumber-1;
  } else if (childNumber > 0) {
    $("#childPlus").show();
    $("#adultPlus").show();
    childNumber = childNumber-1
  };
  document.getElementById('child').innerText = childNumber;
});




//Find the number of days between dates
// function dateDiff() {
//
//   var start = $('#startDate').datepicker('getDate');
//   var end = $('#endDate').datepicker('getDate');
//   var days   = (end - start)/1000/60/60/24;
//   console.log(days);
//   return;
// }
