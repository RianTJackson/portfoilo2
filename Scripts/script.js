
const url = "http://api.open-notify.org/iss-now.json";

async function findIss(){
console.log("looking...")
let rawData = await fetch(url);
let data = await rawData.json();
console.log(data.iss_position);

document.getElementById("lat").innerHTML = "Latitude: " + data.iss_position.latitude; 
document.getElementById("long").innerHTML = "Longitude: " + data.iss_position.longitude; 
}

window.onload = function(){
    findIss();
}