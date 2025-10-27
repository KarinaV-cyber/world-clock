//Los Angeles
function updateTime(){
let losAngelesElement=document.querySelector("#los-angeles");
let losAngelesDateElement=losAngelesElement.querySelector(".date");
let losAngelesTimeElement=losAngelesElement.querySelector(".time");
let losAngelesTime=moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML= losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML=losAngelesTime.format("h:mm:ss:SS[<small>]A[</small>]");
 
//Sydney

let sydneyElement=document.querySelector("#sydney");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime=moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML= sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML=sydneyTime.format("h:mm:ss:SS[<small>]A[</small>]");

//Lima
let limaElement=document.querySelector("#lima");
let limaDateElement=limaElement.querySelector(".date");
let limaTimeElement=limaElement.querySelector(".time");
let limaTime=moment().tz("America/Lima");

limaDateElement.innerHTML= limaTime.format("MMMM Do YYYY");
limaTimeElement.innerHTML=limaTime.format("h:mm:ss:SS[<small>]A[</small>]");}


updateTime();
setInterval(updateTime, 1000);
function updateCity(event){
    let cityTimeZone=event.target.value;
    if (cityTimeZone ==="current"){
      cityTimeZone  = moment.tz.guess();
    }
    let cityName=cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime=moment().tz(cityTimeZone);
    //console.log(cityTime.format("MMMM Do YYYY"));
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML= `<div class="city">
                          <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss:SS")}<small>${cityTime.format("A")}</small></div>
                <a href="index.html">All Cities</a>
        `;
}
let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);