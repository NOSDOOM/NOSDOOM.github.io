$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    getWeather();
    var latlng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, function(result) {
      console.log(result)
      cityname = result[4].formatted_address;
      document.getElementById("city").innerHTML = cityname;
    });
  });
  setInterval(getWeather, 600000);
});

var input = document.getElementById("loc");
var options = {
  types: ["geocode"]
};
var mcloc = new google.maps.places.Autocomplete(input, options);
function loadWeather() {
  var place = mcloc.getPlace();
  cityname = place.formatted_address;
  latitude = place.geometry.location.lat();
  longitude = place.geometry.location.lng();
  document.getElementById("city").innerHTML = cityname;
  getWeather();
}
function getWeather() {
  $.getJSON(
    "https://api.darksky.net/forecast/95ed7968e18fc51e98228c6be17c2680/" +
      latitude +
      "," +
      longitude
  );
  $.ajax({
    url:
      "https://api.darksky.net/forecast/95ed7968e18fc51e98228c6be17c2680/" +
      latitude +
      "," +
      longitude,
    type: "GET",
    dataType: "jsonp",
    success: function(weatherData) {
      //time
      var updtime = moment.unix(weatherData.currently.time).format("LT");
      //icon information (explained after)
      var icon = weatherData.currently.icon;
      //weather description
      var description = weatherData.currently.summary;
      //temperature
      var temperature = Math.trunc(weatherData.currently.temperature);
      document.getElementById("temps").innerHTML = temperature + "°";
      //percip chance
      var percipchance = weatherData.currently.precipProbability * 100;
      //percip type
      var perciptype = weatherData.currently.precipType;
      if (perciptype == undefined) {
        perciptype = "";
      }
      //humidity
      var humid = Math.trunc(weatherData.currently.humidity * 100);
      //wind speed
      var windspd = weatherData.currently.windSpeed;
      //time
      var curtime = moment.unix(weatherData.currently.time).format("ll");
      //today high temp
      var thigh = Math.trunc(weatherData.daily.data[0].temperatureHigh);
      //today low temp
      var tlow = Math.trunc(weatherData.daily.data[0].temperatureLow);
      //today feels like low
      var flowtemp = Math.trunc(
        weatherData.daily.data[0].apparentTemperatureLow
      );
      //today feels like high
      var fhightemp = Math.trunc(
        weatherData.daily.data[0].apparentTemperatureHigh
      );
      //sunrise time
      var csunrise = weatherData.daily.data[0].sunriseTime;
      //sunset time
      var csunset = weatherData.daily.data[0].sunsetTime;
      //sunrise time
      var csunrisef = moment
        .unix(weatherData.daily.data[0].sunriseTime)
        .format("HH:mm");
      //sunset time
      var csunsetf = moment
        .unix(weatherData.daily.data[0].sunsetTime)
        .format("HH:mm");
      var CurrentDate = moment().format("HH:mm");
      var alpha = moment
        .unix(csunrise)
        .add(4, "h")
        .format("HH:mm");
      var bravo = moment
        .unix(csunset)
        .add(2, "h")
        .format("HH:mm");
      if (CurrentDate > csunsetf && CurrentDate <= bravo) {
        dusk();
      } else if (CurrentDate > csunrisef && CurrentDate <= alpha) {
        dawn();
      } else if (CurrentDate > alpha && CurrentDate <= csunsetf) {
        day();
      } else {
        night();
      }
      //DAILY
      var dailyfixed = weatherData.daily.data;
      dailyfixed.shift();

      dailyfixed.forEach(function(element) {
        var dailynum = moment.unix(element.time).format("ddd DD");
        var dailyicon = element.icon;
        var high = Math.trunc(element.temperatureHigh);
        var low = Math.trunc(element.temperatureLow);
        var fhigh = Math.trunc(element.apparentTemperatureHigh);
        var flow = Math.trunc(element.apparentTemperatureLow);
      });

      var loading = document.getElementById("week-weather");
      loading.style.visibility = "visible";

      //weekly summary
      var wklysummary = weatherData.daily.summary;
      //hourly temp
      var hourlytemp = weatherData.hourly.data[0].temperature;
      //hourly feels like temp
      var fhourlytemp = weatherData.hourly.data[0].apparentTemperature;
      //hourly humidity
      var hrhumidity = weatherData.hourly.data[0].humidity;
      //hourly icon
      var hricon = weatherData.hourly.data[0].icon;
      //hourly percip
      var hrpercip = weatherData.hourly.data[0].precipProbability;
      //hourly percip type
      var hrperciptype = weatherData.hourly.data[0].precipType;
      //hourly summary
      var hrsummary = weatherData.hourly.data[0].summary;
      //hourly wind speed
      var hrwindspd = weatherData.hourly.data[0].windSpeed;
      // hourly data time
      var hrtime = moment.unix(weatherData.hourly.data[0].time).format("lll");
      //alert title
      //var alertitle = weatherData.alert.title;
      ////alert summary
      //var alertsum = weatherData.alert.description;
      ////alert regions
      //var alertreg = weatherData.alert.regions;
      ////alert time
      //var alertime = moment.unix(weatherData.alert.time).format('lll');
      ////alert expires
      //var alertexpir = moment.unix(weatherData.alert.expires).format('lll');

      $(document).ajaxComplete(function() {
        //Animated weather icons
        var icons = new Skycons({ monochrome: false }),
          list = [
            "clear-day",
            "clear-night",
            "partly-cloudy-day",
            "partly-cloudy-night",
            "cloudy",
            "rain",
            "sleet",
            "snow",
            "wind",
            "fog"
          ],
          i;

        for (i = list.length; i--; ) {
          var weatherType = list[i],
            elements = document.getElementsByClassName(weatherType);
          for (e = elements.length; e--; ) {
            icons.set(elements[e], weatherType);
          }
        }
        icons.pause();
      });
    }
  });
}
function dawn() {
  $("#bground").append(
    '<svg width="' +
      "100%" +
      '"' +
      " " +
      'height="' +
      "99vh" +
      '"' +
      ">" +
      '<circle cx="50vw" cy="00" r="25vh" fill="#F6B6B6" />' +
      "</svg>"
  );
}

function day() {
  $("#bground").append(
    '<svg width="' +
      "100%" +
      '"' +
      " " +
      'height="' +
      "99vh" +
      '"' +
      ">" +
      '<circle cx="50vw" cy="50vh" r="25vh" fill="#FFCC59" />' +
      "</svg>"
  );
}

function dusk() {
  $("#bground").append(
    '<svg width="' +
      "100%" +
      '"' +
      " " +
      'height="' +
      "100vh" +
      '"' +
      ">" +
      '<circle cx="50vw" cy="100vh" r="25vh" fill="#FFCC59" />' +
      "</svg>"
  );
}

function night() {
  document.body.style.backgroundColor = "#07164A";
  document.getElementById("temps").style.color = "#ECF0F1";
  document.getElementById("city").style.color = "#ECF0F1";
}
