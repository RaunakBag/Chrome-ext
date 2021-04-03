const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
   res.sendFile(__dirname+'/index.html'); 
});
app.get("/style.css",(re,rs)=>{
    rs.sendFile(__dirname+'/style.css');
});
app.post("/",(req,res)=>{
    
    const city = req.body.city;
    const key = "8c3b20acd403c6ed0fb856b5a2abfe1b";
    const unit = "metric";
    const provider = "https://api.openweathermap.org/data/2.5/weather";
    const url = provider+"?q="+city+"&appid="+key+"&units="+unit;
    
    https.get(url, (response)=>{
        console.log(response.statusCode);

        response.on("data",(data)=>{
            const weatherData = JSON.parse(data);
            const cod = weatherData.cod;
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<p>The weather condition is: "+weatherDescription+ "</p>");
            res.write("<h1>The temperature in "+city+" is: " +temp+" Degrees celcius</h1>");
            res.write("<img src= "+imageURL+">");
            res.send();
        });
    });
})

app.listen(3000, function() {
   console.log("App Running on Port 3000"); 
});