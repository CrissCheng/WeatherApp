function weather(){
	var ApiKey = "3a3f1f2ba7714e91e34c3c1110e2b6af";
	var Location = document.getElementById("location");
	var url = "https://api.darksky.net/forecast/";


  	navigator.geolocation.getCurrentPosition(success, error);

  	function success(pos){
  		var crd = pos.coords;
  		var latitude = crd.latitude;
  		var longitude = crd.longitude;
  		var WeartherApi = url+ApiKey+"/"+latitude+","+longitude;
  		Location.innerHTML = "<h2>Latitude is <h2>"  + latitude + "° <br> Longitude is " + longitude + "°";
  		$.getJSON(WeartherApi+"?callback=?", function(data){
  			$('#temp').html("<h1>Current temperature is <h1>" + data.currently.temperature + '<h1>° F<h1>');
  			$('#summary').html("<h2>Weather: <h2>" + data.currently.summary);

  		})
  	}

  	function error() {
  		location.innerHTML = "Unable to retrieve your location";
	};

Location.innerHTML = "Locating...";

  
}

weather();