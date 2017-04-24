/*
var forecastContainer = document.getElementById("forecast");
*/

var btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {

	event.preventDefault();

	var xhr = new XMLHttpRequest();
	// var url = "http://localhost:3000/posts";
	// var url = "http://openweathermap.org/api";
	var url = "http://api.openweathermap.org/data/2.5/weather";
	///data/2.5/weather?q=London&appid=e94f99a51481de0a1ca44714266f918c";

	//var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e94f99a51481de0a1ca44714266f918c";
	// Free on-line JSON file to be used as exemple
	//var url = "http://mysafeinfo.com/api/data?list=englishmonarchs&format=json";

	/*
		The following lines are for POST
	*/
/*
	if (xhr) {

		var cityName = document.getElementById("city-name").value;

	//	console.log(cityName);

	//	xhr.open('POST','http://dev.domain.us/API/v02/json/V02');
		xhr.open('POST', url);

	//	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		xhr.onreadystatechange = function() {

	// The *readyState* method of XMLHttpRequest can return 5 values, numbered as 0, 1, 2, 3, 4 .


			if (xhr.readyState === XMLHttpRequest.DONE) {

	//    			if (xhr.status === 200) {
	// But, if one wants to include all the error codes one has:
				if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {

	// The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object:

	//        		var data = JSON.parse(xhr.responseText);
					var data = xhr.responseText;
        			console.log(data);
	//					document.getElementById("demo").innerHTML = "AUTHOR: " + data.author + "<br>" + "TITLE: " + data.title + "<br>" + 
	//																"CONTENT: " + data.content + "<br>" + "TAGS: " + data.tags + "<br>" +
	//																"ID: " + data.id + "<br>";

				} else {

					//alert("Something did not work with the URL " + url);
					console.log("Something did not work with the URL " + url);

				}
			
			}

		};

	  	xhr.send(cityName);

	}

});
*/
	/*
		The following lines are for GET
	*/

	if (xhr) {

		var cityName = '?q=' + document.getElementById("city-name").value;
		var apiKey = '&appid=' + document.getElementById("appid").value;

		xhr.open('GET', url + cityName + apiKey, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		
		xhr.onreadystatechange = function() {

	// The *readyState* method of XMLHttpRequest can return 5 values, numbered as 0, 1, 2, 3, 4 .


			if (xhr.readyState === XMLHttpRequest.DONE) {

	//    			if (xhr.status === 200) {
	// But, if one wants to include all the error codes one has:
				if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {

	// The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object:

	//        			var data = JSON.parse(xhr.responseText);
					var data = xhr.responseText;
        			console.log(data);
	//					document.getElementById("demo").innerHTML = "AUTHOR: " + data.author + "<br>" + "TITLE: " + data.title + "<br>" + 
	//																"CONTENT: " + data.content + "<br>" + "TAGS: " + data.tags + "<br>" +
	//																"ID: " + data.id + "<br>";

				} else {

					alert("Something did not work with the URL " + url);

				}
			
			}

		};

	
	xhr.send();

	}

});

/*
function renderHTML(data) {
	// here the HTML element for id = "forecast"
}
*/
