var xhr = new XMLHttpRequest();
// var url = "http://localhost:3000/posts";
var url = "http://openweathermap.org/api";

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

function displayCityWeather() {
	
	if (xhr) {
	
		xhr.onreadystatechange = function() {

    		if (xhr.readyState === XMLHttpRequest.DONE) {

    			if (xhr.status === 200) {

// The JavaScript function JSON.parse(text) can be used to convert a JSON text into a JavaScript object:

        			var data = JSON.parse(xhr.responseText);
//        			alert(data);
//        			console.log(data);
					document.getElementById("demo").innerHTML = "AUTHOR: " + data.author + "<br>" + "TITLE: " + data.title + "<br>" + 
																"CONTENT: " + data.content + "<br>" + "TAGS: " + data.tags + "<br>" +
																"ID: " + data.id + "<br>";

		      	} else {

    		    	alert("Une erreur s'est produite.");

      			}
    		}

		};

		xhr.open('GET', url + "/79");   
		xhr.send();

	}

}