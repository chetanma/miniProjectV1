var x = document.getElementById("currentLoc");

var getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentLocWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var getCurrentLocWeather = (position) => {
    var lat=position.coords.latitude
    var lon=position.coords.longitude
    $.ajax({
        type: 'GET',    
        dataType: 'json',
        //openweathermap.org weather API
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
        success: (res) => {
            var current=''
            current=
            `
            <h3><i class="fas fa-map-marker-alt"></i>${res.name}</h3>
            ${res.weather[0].main}                        
            <p>
                <i>${res.weather[0].description}</i>
                <img src="assets/temperature.png" style="width:20px;height:auto"></img> 
                ${res.main.temp}&#8451;  
                <img src="assets/humidity1.png" style="width:18px;height:auto"></img>
                ${res.main.humidity}%
            </p>
            `
            x.innerHTML=current
        }
        })
}


<div id="suggest_container">
    <form id="search-form"></form>
    <div id="autosuggest"></div>
</div>