const WELLINGTON = {lat: -41.286460, lng: 174.776236} //The coordinates of Wellington.

var map = null;

/**
	Loads the imbedded map onto the page.
*/
function myMap(){
	

	//Create Map
	map = new google.maps.Map(document.getElementById("map"),{
		zoom: 15,
		center: WELLINGTON
	});


	if(map == null) alert("Map not loaded.");

	//Get location
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayPosition);
	}
	else alert("could not get location");
	

}


function displayPosition(position){

	var coordinates = {lat: position.coords.latitude, lng: position.coords.longitude}
	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		title: "Current Location"
	});

	map.setCenter(marker.getPosition());

}