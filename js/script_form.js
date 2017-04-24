// Apparently the temperatures are given in Kelvin.
// Knowing that the temperature in Celsius degrees is given by
// tempC = tempK - 273.15 ,
// we define the following constant:
//
const kelv = 273.15;

var forecastContainer = document.getElementById("forecast");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {

	//event.preventDefault();

	var xhr = new XMLHttpRequest();
	var url = "http://api.openweathermap.org/data/2.5/weather";
	//var url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e94f99a51481de0a1ca44714266f918c";
	//
	// Free on-line JSON file to be used as exemple
	//var url = "http://mysafeinfo.com/api/data?list=englishmonarchs&format=json";

	/*
		The following lines are for GET
	*/

	if (xhr) {

//		var cityName = '?q=' + document.getElementById("city-name").value;

//		var apiKey = '&appid=' + document.getElementById("appid").value;

//		xhr.open('GET', url + cityName + apiKey, true);
		xhr.open('GET', url, true);
		
		xhr.onreadystatechange = function() {

	// The *readyState* method of XMLHttpRequest can return 5 values, numbered as 0, 1, 2, 3, 4 .


			if (xhr.readyState === XMLHttpRequest.DONE) {

	//    			if (xhr.status === 200) {
	// But, if one wants to include all the error codes one has:
				if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {

					var data = xhr.responseText;

	//				console.log(data);

	// The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object:
	       			var jsonData = JSON.parse(xhr.responseText);

	//      			console.log(kelv, jsonData.main.temp, typeof(jsonData.main.temp), jsonData.main.temp - kelv);

	       			var tempC = jsonData.main.temp - kelv;

	// There too many decimal digits. To round them off we used the following trick,
	// taken from http://www.jacklmoore.com/notes/rounding-in-javascript/ :
					tempC = Number(Math.round(tempC+'e2')+'e-2');

					forecastContainer.innerHTML = "City: " + jsonData.name + "<br>" + "<br>" + "Temperature: " + tempC + " °C";

     //   			console.log(jsonData);

				} else {

					alert("Something did not work...");

				}
			
			}

		};

	
		xhr.send();

	}

	forecastContainer.innerHTML = "Processing...";

});