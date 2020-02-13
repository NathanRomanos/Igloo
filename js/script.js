var myKey = JSON.parse(apiKey);
// Dynamically creating the script element
var script = document.createElement('script');
// Giving the src attribute to the google plug in from external json file
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
// Appending to the body of index.html
document.getElementsByTagName('body')[0].appendChild(script);

console.log('Working');


var accom = [
  {
    name : "Matakauri Lodge",
    id : "a101",
    photo1 : "images/hotelMain.jpg",
    photo2 : "images/hotel2.jpg",
    photo3 : "images/hotel3.jpg",
    pricePerNight : 157,
    minPeople : 1,
    maxPeople : 2,
    minNight : 1,
    maxNight : 5,
    latlng: {lat: -45.059, lng: 168.585,},
    link: "https://www.booking.com/hotel/nz/matakauri-lodge-queenstown.html",
    type : "Hotel",
    bed : 1,
    bath : 1,
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
    name : "Nomads Backpackers",
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
    link: "https://nomadsworld.com/new-zealand/nomads-queenstown/",
    type : "Hostel",
    bed : 1,
    bath : 1,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/bar.svg" alt=""> On-site bar/Lounge' +
            '<br>' +
            '<img src="images/icons/coffee.svg" alt=""> Complimentary Tea/Coffee, and Toast each morning' +
            '<br>' +
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
    link: "https://www.booking.com/hotel/nz/autoline-queenstown-motel.en-gb.html?aid=339463;label=msn-%2ASDYZLcgJez8bfytVKkWvg-4204406398%3Atikwd-16530141601%3Aloc-134%3Anes%3Amte%3Adec%3Aqsautoline%20queenstown%20motel;sid=6c3367700d97d56f7292e2b6d778f90a;dest_id=900039039;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1575784544;srpvid=b5a129b0263c006a;type=total;ucfs=1&#hotelTmpl",
    bed : 2,
    bath : 1,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Each room contains a kitchenette' +
            '<br>' +
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
    link: "https://amazingaccom.com/luxury-accommodation/new-zealand/queenstown/mountain-lake-views-1",
    bed : 2,
    bath : 2,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Kitchenette' +
            '<br>' +
            '<img src="images/icons/coffee.svg" alt=""> Coffee/Tea facilities' +
            '<br>' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Shores Restaurant (2 min drive)' +
            '<br>' +
            '<img src="images/icons/car.svg" alt=""> 5 min drive to city center',
    para : "Enjoy the fabulous views of the lake and mountains situated in gorgeous Queenstown. This home is a 5 minute drive or 30 min walk from the city centre and is close to all major attractions including wineries, hiking and ski fields.",
  },
  {
    name : "2/42 Queenstown Hill",
    id : "a105",
    photo1 : "images/houseTwoMain.jpg",
    photo2 : "images/houseTwo2.jpg",
    photo3 : "images/houseTwo3.jpg",
    pricePerNight : 240,
    minPeople : 1,
    maxPeople : 4,
    minNight : 2,
    maxNight : 15,
    type : "House",
    latlng: {lat: -45.026, lng: 168.683,},
    link: "https://www.trademe.co.nz/property/residential-property-to-rent/auction-2418405947.htm?rsqid=d42ed495a99642448946318fc8ab8815-001",
    bed : 3,
    bath : 3,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Full Kitchen' +
            '<br>' +
            '<img src="images/icons/kitchen.svg" alt=""> $10 Breakfast' +
            '<br>' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> True South Dining Room (3 min drive)' +
            '<br>' +
            '<img src="images/icons/car.svg" alt=""> 7 min drive to city center',
    para : "Enjoy this fully furnished executive home in Queenstown Hill with 180 degree views of Lake Wakatipu and The Remarkables.",
  },
  {
      name : "6 Reading Court, Jacks Point",
    id : "a106",
    photo1 : "images/houseThreeMain.jpg",
    photo2 : "images/houseThree2.jpg",
    photo3 : "images/houseThree3.jpg",
    pricePerNight : 240,
    minPeople : 1,
    maxPeople : 4,
    minNight : 2,
    maxNight : 15,
    type : "House",
    latlng: {lat: -45.075, lng: 168.743,},
    link: "https://www.bayleys.co.nz/4502363",
    bed : 2,
    bath : 1,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Full Kitchen' +
            '<br>' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Jacks Point Clubhouse (2 min drive)' +
            '<br>' +
            '<img src="images/icons/car.svg" alt=""> 16 min drive to Queenstown city centre',
    para : "This Queenstown paradise, is a modern cedar home, set in stunning scenery, opening on to the reserve thru a rustic gate. Fully fenced & surrounded by dry stone walls, has easy maintenance section.",
  },
  {
    name : "Hotel St Moritz",
    id : "a107",
    photo1 : "images/hotelTwoMain.jpg",
    photo2 : "images/hotelTwo2.jpg",
    photo3 : "images/hotelTwo3.jpg",
    pricePerNight : 157,
    minPeople : 1,
    maxPeople : 2,
    minNight : 1,
    maxNight : 5,
    latlng: {lat: -45.034, lng: 168.651,},
    link: "https://www.stmoritz.co.nz/accommodation/",
    type : "Hotel",
    bed : 1,
    bath : 1,
    food : '<h3>We provide:</h3>' +
          '<img src="images/icons/kitchen.svg" alt=""> Breakfast to your room' +
          '<br>' +
          '<img src="images/icons/restaurant.svg" alt=""> On-site restaurant' +
          '<br>' +
          '<img src="images/icons/bar.svg" alt=""> On-site bar' +
          '<br>' +
          '<img src="images/icons/coffee.svg" alt=""> Coffee/Tea facilities',
    para : "Idyllically situated in the heart of Queenstown and with wonderful views overlooking Lake Wakatipu to The Remarkables mountain range, Hotel St Moritz embodies the spirit of its location.",
  },
  {
    name : "Four Seasons Motel",
    id : "a108",
    photo1 : "images/motelTwoMain.jpg",
    photo2 : "images/motelTwo2.jpg",
    photo3 : "images/motelTwo3.jpg",
    pricePerNight : 90,
    minPeople : 2,
    maxPeople : 4,
    minNight : 3,
    maxNight : 10,
    type : "Motel",
    latlng: {lat: -45.032, lng: 168.662,},
    link: "https://www.booking.com/hotel/nz/four-seasons-motel.en-gb.html?aid=339463;label=msn-9I_Vg9wXaXuW6icF_0lN0g-80676755199296%3Atikwd-16530142361%3Aloc-134%3Anes%3Amte%3Adec%3Aqsfour%20seasons%20motel%20queenstown;sid=6c3367700d97d56f7292e2b6d778f90a;dest_id=900039039;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1575785012;srpvid=065d2a997ce900dc;type=total;ucfs=1&#hotelTmpl",
    bed : 2,
    bath : 1,
    food : '<h3>We provide:</h3>' +
            '<img src="images/icons/oven.svg" alt=""> Full kitchen facilities' +
            '<br>' +
            '<br>' +
            '<h3>Alternatively:</h3>' +
            '<img src="images/icons/restaurant.svg" alt=""> Several restaurants and cafes within walking distance',
    para : "Just 5 minutes’ walk from Lake Wakatipu, Autoline Queenstown Motel offers self-contained accommodation with a spa bath or a private balcony with mountain views. Guests enjoy free WiFi.",
  },
];

console.log(accom);

// GLOBAL VARIABLES
var totalNight = 0;
var adultNumber = 1;
var childNumber = 0;
var id = 101;
var markerArray = [];
var totalStart;


// HIDDEN ITEMS
$(".adultMinus").hide();
$(".childMinus").hide();
$("#resultsPageContainer").hide();

// CHECK IN
$(".startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);
      totalNight = 0;

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $(".endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


      $(".endDate").datepicker( "option", "maxDate", enDate );

  }
});


// CHECK OUT
$(".endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  onSelect: function dateDiff() {

    var start = $('.startDate').datepicker('getDate');
    var end = $('.endDate').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;
    console.log(start);
    totalNight = days;
    totalStart = start;
    return;
  }

});


// ADULT GUEST FUNCTION
$(".adult").text(adultNumber);

$(".adultPlus").click(function(){
  $(".adultMinus").show();

  if (adultNumber === 3) {
    $(".adultPlus").hide();
    $(".childMinus").hide();
    adultNumber = adultNumber+1;
    childNumber = 0;
  } else if (((adultNumber + childNumber) > 3) && (adultNumber < 4)) {
    childNumber = childNumber-1;
    adultNumber = adultNumber+1;
    $(".childPlus").show();
  } else if (adultNumber < 4) {
    adultNumber = adultNumber+1;
  };
  $(".adult").text(adultNumber);
  $(".child").text(childNumber);
});

$(".adultMinus").click(function(){
  if (adultNumber === 2) {
    $(".adultMinus").hide();
    adultNumber = adultNumber-1;
  } else if (adultNumber > 1) {
    $(".adultPlus").show();
    $(".childPlus").show();
    adultNumber = adultNumber-1
  };
  $(".adult").text(adultNumber);
});


// CHILD GUEST FUNCTION
$(".child").text(childNumber);

$(".childPlus").click(function(){
  $(".childMinus").show();

  if (childNumber === 2) {
    $(".childPlus").hide();
    $(".adultMinus").hide();
    childNumber = childNumber+1;
    adultNumber = 1;
  } else if ((adultNumber === 1) && (childNumber === 3)){

  } else if (((adultNumber + childNumber) > 3) && (childNumber < 4)) {
    childNumber = childNumber+1;
    adultNumber = adultNumber-1;
    $(".adultPlus").show();
  } else if (childNumber < 4) {
    childNumber = childNumber+1
  };
  $(".child").text(childNumber);
  $(".adult").text(adultNumber);
});

$(".childMinus").click(function(){
  if (childNumber === 1) {
    $(".childMinus").hide();
    childNumber = childNumber-1;
  } else if (childNumber > 0) {
    $(".childPlus").show();
    $(".adultPlus").show();
    childNumber = childNumber-1
  };
  $(".child").text(childNumber);
});


// FUNCTION TO DISPLAY RESULTS CARD
function displayCard(i) {
  priceTotal = (accom[i].pricePerNight * totalNight)
  document.getElementById('cardContainer').innerHTML +=
  '<div id="a' + id.toString() +'" class="card" style="width: 18rem;">' +
    '<img src="' + accom[i].photo1 + '" class="card-img-top" alt="">' +
    '<div class="card-body">' +
      '<h3>' + accom[i].name + '</h3>' +
      '<p class="card-text cardDetails">' +
        accom[i].type + ' | <img src="images/icons/bed.svg" alt=""> ' + accom[i].bed + ' | <img src="images/icons/bath.svg" alt=""> ' + accom[i].bath +
      '</p>' +
      '<p class="card-text cardPrice">' +
        '<br>' +
        '$' + accom[i].pricePerNight + '/night' +
        '<br>' +
        '$' + priceTotal + ' in total' +
      '</p>' +
    '</div>' +
  '</div>';
  var swiper = document.querySelector('#resultsSwiper').swiper
  swiper.update(swiper = new Swiper('#resultsSwiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
      })
    );
};


// FUNCTION TO DISPLAY MODAL
function displayModal() {
  $('.card').on('click', function(){
    console.log(this.id);
    $('.myModal').show();
    for (var i = 0; i < accom.length; i++){
      if (accom[i].id.trim() == this.id.trim()){
        document.getElementById('slides').innerHTML =
          '<div id="slide1" class="swiper-slide"><img class= "swiperImg" src="' + accom[i].photo1 + '" alt=""></div>' +
          '<div id="slide2" class="swiper-slide"><img class= "swiperImg" src="' + accom[i].photo2 + '" alt=""></div>' +
          '<div id="slide3" class="swiper-slide"><img class= "swiperImg" src="' + accom[i].photo3 + '" alt=""></div>';

          document.getElementById('modalName').innerHTML = '<h3>' + accom[i].name + '</h3>';

          document.getElementById('modalPara').innerHTML = accom[i].para;

          document.getElementById('modalFood').innerHTML = accom[i].food;

          document.getElementById('modalDetails').innerHTML =
          accom[i].type +
          '<br>' +
          '<img src="images/icons/bed.svg" alt=""> ' + accom[i].bed +
          '<br>' +
          '<img src="images/icons/bath.svg" alt=""> ' + accom[i].bath +
          '<br>' +
          '<img src="images/icons/people.svg" alt=""> ' + accom[i].maxPeople +
          '<br>' +
          '<br>' +
          '<br>' +
          '$' + accom[i].pricePerNight + '/night' +
        '<br>' +
        '$' + priceTotal + ' in total';

        document.getElementById('modalBook').innerHTML =
        '<a href= "'+ accom[i].link +'" target="_blank"><input type="button" name="submit" class="btn btn-lg btn-dark"  id="modalBook" value="Book Now"></a>';
      }
      var mySwiper = document.querySelector('#modalSwiper').swiper
      mySwiper.update(mySwiper = new Swiper('#modalSwiper', {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            loop: true,
            autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
          })
        );
    }
    $('.modalClose').on('click', function(){
      $('.myModal').hide();
    });

  });
}


// ERROR MESSAGE
$(".errorMessage-outer").click(function(){
  $(".errorMessage").fadeOut(100);
  $(".errorMessage-outer").fadeOut(100);
});


// SUBMIT BUTTON
$('.submit').click(function(){

if (totalNight == 0 ) {

  console.log('error message');
  $(".errorMessage").fadeIn(100);
  $(".errorMessage-outer").fadeIn(100);

} else {

  $("#resultsPageContainer").show();
  $(".landingPage").hide(500);

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
  totalNight = 0;
}

});


$('#resultsLogo').click(function(){
  $(".landingPage").show();
  $("#resultsPageContainer").hide(500);

})


var mySwiper = new Swiper('#modalSwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      loop: true,
      autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    });

    var swiper = new Swiper('#resultsSwiper', {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          mousewheel: true,
        });


// MAP FUNCTIONALITY
function initMap() {

  var queenstown = {lat: -45.024, lng: 168.656};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: queenstown});

for (var j = 0; j < accom.length; j++) {
  for (var i = 0; i < markerArray.length; i++) {
    var marker = new google.maps.Marker({position: markerArray[i], map: map});

    if (accom[j].latlng == markerArray[i]) {
      console.log(accom[j].name);

      marker.addListener('click', function(){
        console.log('bruh');

      });
    }


    };
  };



}
