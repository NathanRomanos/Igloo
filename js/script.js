console.log('Working');


var accom = [
  {
    name : "Matakauri Lodge",
    id : "a101",
    photo1 : "images/hotelMain2.jpg",
    photo2 : "images/hotel2.jpg",
    photo3 : "images/hotel3.jpg",
    pricePerNight : 157,
    minPeople : 1,
    maxPeople : 2,
    minNight : 1,
    maxNight : 5,
    latlng: {lat: -45.059, lng: 168.585,},
    type : "Hotel",
    bed : 1,
    bath : 1,
    sleeps : 2,
    food : '<h3>We provide:</h3>' +
          '<img src="images/icons/kitchen.svg" alt=""> Room service' +
          '<br>' +
          '<img src="images/icons/restaurant.svg" alt=""> On-site restaurant' +
          '<br>' +
          '<img src="images/icons/bar.svg" alt=""> On-site bar/Lounge' +
          '<br>' +
          '<img src="images/icons/coffee.svg" alt=""> Coffee/Tea facilities',
    para : "Spectacularly situated on Lake Wakatipu, Matakauri Lodge offers stunning views from every angle of the Remarkable, Cecil and Walter Peak mountain ranges. Just seven minutes from Queenstown, Matakauri Lodge provides an alpine lakeside retreat amongst one of the world’s most serenely beautiful landscapes.",
  },
  {
    name : "Nomads Queenstown Backpackers",
    id : "a102",
    photo1 : "images/hostelMain.jpg",
    photo2 : "images/hostel2.jpg",
    photo3 : "images/hostel3.jpg",
    pricePerNight : 30,
    minPeople : 1,
    maxPeople : 1,
    minNight : 1,
    maxNight : 10,
    latlng: {lat: -45.032, lng: 168.659,},
    type : "Hostel",
    bed : 1,
    bath : 1,
    sleeps : 1,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/bar.svg" alt=""> On-site bar/Lounge' +
            '<br>' +
            '<img src="images/icons/coffee.svg" alt=""> Complimentary Tea/Coffee, and Toast each morning' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Numerous restaurants and cafés nearby',
    para : "Designed for all budget travellers, this purpose built backpackers hostel has a variety of room types from small and large dorms, with or without en suites, to private en suite rooms with wide-screen cable TV.",
  },
  {
    name : "Autoline Queenstown Motel",
    id : "a103",
    photo1 : "images/motelMain.jpg",
    photo2 : "images/motel2.jpg",
    photo3 : "images/motel3.jpg",
    pricePerNight : 90,
    minPeople : 2,
    maxPeople : 4,
    minNight : 3,
    maxNight : 10,
    type : "Motel",
    latlng: {lat: -45.033, lng: 168.666,},
    bed : 2,
    bath : 1,
    sleeps : 4,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Each room contains a kitchenette' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Several restaurants within walking distance' +
            '<br>' +
            '<img src="images/icons/coffee.svg" alt=""> Several cafés nearby',
    para : "Just 5 minutes’ walk from Lake Wakatipu, Autoline Queenstown Motel offers self-contained accommodation with a spa bath or a private balcony with mountain views. Guests enjoy free WiFi.",
  },
  {
    name : "Mountain & Lake Views",
    id : "a104",
    photo1 : "images/houseMain.jpg",
    photo2 : "images/house2.jpg",
    photo3 : "images/house3.jpg",
    pricePerNight : 240,
    minPeople : 1,
    maxPeople : 4,
    minNight : 2,
    maxNight : 15,
    type : "House",
    latlng: {lat: -45.028, lng: 168.681,},
    bed : 2,
    bath : 2,
    sleeps : 4,
    food1 : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Kitchenette' +
            '<br>' +
            '<img src="images/icons/coffee.svg" alt=""> Coffee/Tea facilities' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Shores Restaurant (2 min drive)' +
            '<br>' +
            '<img src="images/icons/car.svg" alt=""> 5 min drive to city center',
    para : "Enjoy the fabulous views of the lake and mountains situated in gorgeous Queenstown. This home is a 5 minute drive or 30 min walk from the city centre and is close to all major attractions including wineries, hiking and ski fields.",
  }
];

console.log(accom);

// GLOBAL VARIABLES
var totalNight;
var adultNumber = 1;
var childNumber = 0;
var id = 101;
var markerArray = [];


// HIDDEN ITEMS
$("#adultMinus").hide();
$("#childMinus").hide();
$("#resultsPageContainer").hide();

// CHECK IN
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


// CHECK OUT
$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  onSelect: function dateDiff() {

    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;
    console.log(days);
    totalNight = days;
    return;
  }

});


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


// CHILD GUEST FUNCTION
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


// FUNCTION TO DISPLAY RESULTS CARD
function displayCard(i) {
  priceTotal = (accom[i].pricePerNight * totalNight)
  document.getElementById('cardContainer').innerHTML +=
  '<div id= class="card" style="width: 18rem;">' +
    '<img id="a' + id.toString() +'" src="' + accom[i].photo1 + '" class="card-img-top" alt="">' +
    '<div class="card-body">' +
      '<p class="card-text cardDetails">' +
        accom[i].name +
        '<br>' +
        accom[i].type + ' | <img src="images/icons/bed.svg" alt=""> ' + accom[i].bed + ' | <img src="images/icons/bath.svg" alt=""> ' + accom[i].bath +
      '</p>' +
      '<p class="card-text cardPrice">' +
        '<br>' +
        '$' + accom[i].pricePerNight + '/night' +
        '<br>' +
        '$' + priceTotal + ' in total' +
      '</p>' +
    '</div>' +
  '</div>'
};


// FUNCTION TO DISPLAY MODAL
function displayModal() {
  $('.card-img-top').on('click', function(){
    console.log(this.id);
    $('.myModal').show();
    for (var i = 0; i < accom.length; i++){
      if (accom[i].id.trim() == this.id.trim()){
        document.getElementById('slides').innerHTML =
          '<div id="slide1" class="swiper-slide"><img src="' + accom[i].photo1 + '" alt=""></div>' +
          '<div id="slide2" class="swiper-slide"><img src="' + accom[i].photo2 + '" alt=""></div>' +
          '<div id="slide3" class="swiper-slide"><img src="' + accom[i].photo3 + '" alt=""></div>';
      }
    }
    $('.modalClose').on('click', function(){
      $('.myModal').hide();
    });
  });
}


// SUBMIT BUTTON
$('#submit').click(function(){

  $("#resultsPageContainer").show();

  document.getElementById('cardContainer').innerHTML = "";
  var totalPeople = (adultNumber + childNumber);
  console.log(totalPeople);
  id=101;
  for (var i=0; i<accom.length; i++){
    if (((totalNight >= accom[i].minNight) && (totalNight <= accom[i].maxNight)) && ((totalPeople >= accom[i].minPeople)) && ((totalPeople <= accom[i].maxPeople))){
      markerArray.push(accom[i].latlng);
      displayCard(i);
      displayModal();
    }
    id++;
  }
  initMap();
  console.log(markerArray);
  var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});


// MAP FUNCTIONALITY
function initMap() {

  var queenstown = {lat: -45.024, lng: 168.656};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: queenstown});

  for (var i = 0; i < markerArray.length; i++) {
    var marker = new google.maps.Marker({position: markerArray[i], map: map});
  };

}
