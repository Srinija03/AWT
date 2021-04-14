function fetchWeather()
{
    var table=document.createElement("table");
        table.border="2";
    var request=new XMLHttpRequest();
    var apikey='3445a43b3a52259bd0237c6eb4bfec97';
    var city=document.getElementById("city").value;
    var base=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`
    request.open('GET',base,true)
    request.onload=function(){
        var result=JSON.parse(this.response)
        
        row=table.insertRow(-1);
            ch1=row.insertCell(-1);
            ch2=row.insertCell(-1);
            ch3=row.insertCell(-1);
            ch1.innerHTML="DATE";
            ch2.innerHTML="Max TEMP";
            ch3.innerHTML="Min TEMP";
        result.list.forEach((day)=>
        {
            row1=table.insertRow(-1);
            c1=row1.insertCell(-1);
            c2=row1.insertCell(-1);
            c3=row1.insertCell(-1)
            c1.innerHTML=day.dt_txt;
            c2.innerHTML=day.main.temp_max;
            c3.innerHTML=day.main.temp_min;
        })
    }
    var div=document.getElementById("div1");
    div.append(table);
    request.send();
}