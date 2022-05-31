
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const api_key = "ac11b367e5ad5a082823063ff12a6501";



// async function getData(){
//     let city = document.getElementById("city").value;


// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
//    let res = await fetch(url)
//    let data = await res.json();


//    append(data);
//    console.log(data);


// //https://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=ac11b367e5ad5a082823063ff12a6501
// }


// function append(data){
 

//      let cantainer = document.getElementById("cantainer");
//      cantainer.innerHTML = null;

//        let h3 = document.createElement("h3");
//        h3.innerText=data.name;
       
       
//        let p1 = document.createElement("p");
//        p1.innerText =`Current temp: ${data.main.temp}`;

        
//        let p2 = document.createElement("p");
//        p2.innerText =`Max temp: ${data.main.temp_max}`;

        
//        let p3 = document.createElement("p");
//        p3.innerText =`Min temp: ${data.main.temp_min}`;


//        cantainer.append(h3,p1,p2,p3)

//        let iframe = document.getElementById("gmap_canvas");
//        iframe.src="https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed"


// }
    



async function getData(){
    let city = document.getElementById("city").value ;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    let res = await fetch(url)
    let data = await res.json();

    append(data)
    console.log(data)
}


function append(data){

    let cantainer = document.getElementById("cantainer")
    cantainer.innerHTML = null;

    let h1 = document.createElement("h1")
    h1.innerText = data.name;

    let p1 = document.createElement("p");
           p1.innerText =`Current temp: ${data.main.temp}`;

    let p2 = document.createElement("p")
    p2.innerText = `Max temp: $(data.main.temp_max)`;

    let p3 = document.createElement("p")
    p3.innerText = `Min temp: ${data.main.temp_min}`;

    cantainer.append(h1,p1,p2,p3)


       let iframe = document.getElementById("gmap_canvas");
       iframe.src="https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed"

}
