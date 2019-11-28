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

var number = 0;

document.getElementById('adults').innerText = number;

$("#adultPlus").click(function(){
  if (number < 6) {
    number = number+1
  };
  document.getElementById('adults').innerText = number;
});

$("#adultMinus").click(function(){
  if (number > 0) {
    number = number-1
  };
  document.getElementById('adults').innerText = number;
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
