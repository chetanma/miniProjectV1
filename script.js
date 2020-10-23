var onBodyLoad = () => {
    loadWeather()
    getLocation()
}


var loadWeather = () => {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        //openweathermap.org weather API
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=Pune&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
        success: (res) => {
            var sec1 = ''
            var sec2 = ''
            var sunrise = res.city.sunrise;
            var sunset = res.city.sunset;
            var riseDate = new Date(sunrise * 1000);
            var setDate = new Date(sunset * 1000);

            var riseTime = riseDate.toLocaleTimeString();
            var setTime = setDate.toLocaleTimeString();
            
            var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
            console.log(res);
            sec1 +=
                `            
                <p class="row text-center">  
                    <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                        <a href="index.html">&#8451;</a> |
                        <a href="index.html">&#8457;</a>                        
                    </sup> 
                </p>
                <p class="row">
                    <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                    height: auto;">
                </p>                       
                `
            $('.ct1sec1').append(sec1)
            sec2 +=
                `
                    <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                    <div class="row">
                        <div class="col-5 border-right">
                            <p>
                                
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-up"></i>  
                                ${res.list[0].main.temp_max}&#8451;<br>
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-down"></i>                            
                                ${res.list[0].main.temp_min}&#8451;<br>
                                <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                            </p>
                        </div>
                        <div class="col-3 border-right">
                            <table>
                                <tr>
                                    <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                    <td> ${res.list[0].clouds.all}% </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                    <td>  ${res.list[1].main.humidity}%  </td>
                                </tr>                                  
                            </table> 
                        </div>
                        <div class="col-3">
                            <table>
                                <tr>
                                    <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                </tr>                                    
                            </table>   
                        </div>                                                                 
                `
            $('.ct1sec2').append(sec2)

        }
    })
    //     <div class="col-6">
    //     
    //        
    // </div>
    $.ajax({
        type: 'GET',
        dataType: 'json',
        //openweathermap.org weather API
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
        success: (res) => {
            var sec1 = ''
            var sec2 = ''
            var sunrise = res.city.sunrise;
            var sunset = res.city.sunset;
            var riseDate = new Date(sunrise * 1000);
            var setDate = new Date(sunset * 1000);

            var riseTime = riseDate.toLocaleTimeString();
            var setTime = setDate.toLocaleTimeString();
            
            var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
            console.log(res);
            sec1 +=
                `            
                <p class="row text-center">  
                    <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                        <a href="index.html">&#8451;</a> |
                        <a href="index.html">&#8457;</a>                        
                    </sup> 
                </p>
                <p class="row">
                    <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                    height: auto;">
                </p>                       
                `
            $('.ct2sec1').append(sec1)
            sec2 +=
                `
                    <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                    <div class="row">
                        <div class="col-5 border-right">
                            <p>
                                
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-up"></i>  
                                ${res.list[0].main.temp_max}&#8451;<br>
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-down"></i>                            
                                ${res.list[0].main.temp_min}&#8451;<br>
                                <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                            </p>
                        </div>
                        <div class="col-3 border-right">
                            <table>
                                <tr>
                                    <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                    <td> ${res.list[0].clouds.all}% </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                    <td>  ${res.list[1].main.humidity}&#8451;  </td>
                                </tr>                                  
                            </table> 
                        </div>
                        <div class="col-3">
                            <table>
                                <tr>
                                    <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                </tr>                                    
                            </table>   
                        </div>                                                                 
                `
            $('.ct2sec2').append(sec2)
        }
    })

    $.ajax({
        type: 'GET',
        dataType: 'json',
        //openweathermap.org weather API
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=nagpur&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
        success: (res) => {
            var sec1 = ''
            var sec2 = ''
            var sunrise = res.city.sunrise;
            var sunset = res.city.sunset;
            var riseDate = new Date(sunrise * 1000);
            var setDate = new Date(sunset * 1000);

            var riseTime = riseDate.toLocaleTimeString();
            var setTime = setDate.toLocaleTimeString();
            
            var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
            console.log(res);
            sec1 +=
                `            
                <p class="row text-center">  
                    <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                        <a href="index.html">&#8451;</a> |
                        <a href="index.html">&#8457;</a>                        
                    </sup> 
                </p>
                <p class="row">
                    <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                    height: auto;">
                </p>                       
                `
            $('.ct3sec1').append(sec1)
            sec2 +=
                `
                    <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                    <div class="row">
                        <div class="col-5 border-right">
                            <p>
                                
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-up"></i>  
                                ${res.list[0].main.temp_max}&#8451;<br>
                                <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                <i class="fas fa-arrow-down"></i>                            
                                ${res.list[0].main.temp_min}&#8451;<br>
                                <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                            </p>
                        </div>
                        <div class="col-3 border-right">
                            <table>
                                <tr>
                                    <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                    <td> ${res.list[0].clouds.all}% </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                    <td>  ${res.list[1].main.humidity}&#8451;  </td>
                                </tr>                                  
                            </table> 
                        </div>
                        <div class="col-3">
                            <table>
                                <tr>
                                    <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                </tr>
                                <tr>
                                    <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                    <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                </tr>                                    
                            </table>   
                        </div>                                                                 
                `
            $('.ct3sec2').append(sec2)
        }
    })
}