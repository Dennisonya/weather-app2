

function checkWeather(button){
    let city = document.querySelector('input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f7fd008844b1dc5e0ad291f90a92828
&units=metric`)
        .then(res => res.json())
        .then(data =>{
            let weatherIcon = document.querySelector(".weather-icon");
            console.log(data)
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}ºC`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed}km/hr`;
            let weather = data.weather[0].main;
            if(weather === "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }else if(weather === "Clear"){
                weatherIcon.src = "images/clear.png";
            }else if(weather === "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }else if(weather === "Humidity"){
                weatherIcon.src = "images/humidity.png";
            }else if(weather === "Mist"){
                weatherIcon.src = "images/mist.png";
            }else if(weather === "Rain"){
                weatherIcon.src = "images/rain.png";
            }else if(weather === "Snow"){
                weatherIcon.src = "images/snow.png";
            }else if(weather === "Wind"){
                weatherIcon.src = "images/wind.png";
            }
        })
        .catch(err =>{
            console.log(err)
        })
    
        document.querySelector(".weather").style.display = "block";    
 }









 <div class="content">
 <div class="anime-list">
     <div class="anime" id="1">
         <img src="images/b4adf141028bb1649873123a38c99597.jpg" class="anime-cover">
         <h2>Title</h2>
         <p>short description</p>
         <h3>no of episodes</h3>
         <h4>score</h4>
         <h5>start date</h5>
         <h6>end date</h6>
         <button onclick="addAnime(1)">Add to watchlist</button>
     </div>
     
 </div>
</div>