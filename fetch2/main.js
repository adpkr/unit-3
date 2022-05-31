const api_key="9147c73b320cf27559eaee47929d58d3";
async function getData(){
    let city=document.getElementById("city").value;
 
    // Destination;
 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 
 
 
    // car
    let res=await fetch(url);
 
    let data = await res.json();//chunk format
    append(data,city);
 
    //Calling function Here From Below;
 
    console.log(data);
 
 
 
 
}
 
function append(data,city){
 
    let container=document.getElementById("container");
    container.innerHTML =null;
 
    let h3=document.createElement("h3");
    h3.innerText=data.name;
 
    let p1=document.createElement("p");
    p1.innerText=`Current temp:  ${data.main.temp}`;
 
    let p2=document.createElement("p");
    p2.innerText=`Current temp:  ${data.main.temp_max}`;
 
    let p3=document.createElement("p");
    p3.innerText=`Current temp:  ${data.main.temp_min}`;
 
    container.append(h3, p1, p2, p3);
 
    let url=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   
    let iframe=document.getElementById("gmap_canvas");
    iframe.src=url;
 
}
