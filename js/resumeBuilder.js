/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var hola="hola mundo";
var loveJS = true;

var metro = 100; 
var nanosegundo = 1.0/1000000000;
var velocida_de_la_luz = 299792458;
velocida_de_la_luz=velocida_de_la_luz*nanosegundo*metro;
 

 var name= "Inocencio";
 var role="Professional Kappa"
 var age= 21;
 var formattedName= HTMLheaderName.replace("%data%",name); 
var formattedRole= HTMLheaderRole.replace("%data%",role); 
console.log(name);
var s = "audacity";

var udacityizer = function(s) {  
    var s2 = s.slice(-7);
    s2=s2.replace("u","U");
    return s2;
};
console.log(udacityizer(s));

var bio = {
	"name":name,
	"role":role,
	"info":"sup",
	"pic": "images/pepe.gif",
	"skillz":["none","yup "]
};


document.getElementById("workExperience").append(bio.info);

$("#header").append(formattedName);
$("#header").append(formattedRole);
document.getElementById("projects").append(bio.skillz);

//$("#main").append(bio.info);
$("#mapDiv").append('<img src="images/pepe.gif" />');