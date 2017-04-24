/*
var forecastContainer = document.getElementById("forecast");
*/

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

	var xhr = new XMLHttpRequest();
	// var url = "http://localhost:3000/posts";
	// var url = "http://openweathermap.org/api";
	var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e94f99a51481de0a1ca44714266f918c";

	/*
		The following lines are for POST
		*/
	/*
	if (xhr) {

	//	xhr.open('POST','http://dev.domain.us/API/v02/json/V02');
		xhr.open('POST', url);

		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


		var article = JSON.stringify({
			
			author: "Max Porrini",
			title: "La Dynamique Moléculaire",
			content: "La dynamique moléculaire (MD) est une technique de simulation à l'ordinateur qui nous permet de connaitre les proprietés des systemes moleculaires complexes",
			tags: "simulations/mechanique statistique/champ de force"

		});


	  	xhr.send(article);

	}
	*/

	/*
		The following lines are for GET
		*/
		
	if (xhr) {

		xhr.onreadystatechange = function() {

			xhr.open('GET', url, true);

	// The *readyState* method of XMLHttpRequest can return 5 values, numbered as 0, 1, 2, 3, 4 .


			if (xhr.readyState === XMLHttpRequest.DONE) {

	//    			if (xhr.status === 200) {
	// But, if one wants to include all the error codes one has:
				if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {

	// The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object:

	//        			var data = JSON.parse(xhr.responseText);
					var data = xhr.responseText;
					alert(data);
	//        			console.log(data);
	//					document.getElementById("demo").innerHTML = "AUTHOR: " + data.author + "<br>" + "TITLE: " + data.title + "<br>" + 
	//																"CONTENT: " + data.content + "<br>" + "TAGS: " + data.tags + "<br>" +
	//																"ID: " + data.id + "<br>";

				} else {

					alert("Something did not work.");

				}
			
			}

//				xhr.open('GET', url, true);

			};

	
			xhr.send();

	}
});
/*
function renderHTML(data) {
	// here the HTML element for id = "forecast"
}
*/