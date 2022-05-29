 


   
let container=document.getElementById("container");
 
async function getData(){
 
    let movie=document.getElementById("box").value
  
    let url =`http://www.omdbapi.com/?s=${movie}&apikey=dbfaad1`
    // console.log(url);
    try{
        let res=await fetch(url);
        let Data=await res.json();
 
       console.log(Data)
 
             container.append(image);
    
    }
    catch(err){
        console.log(err);
    }
}
 

 
 
 
function append(Data){
container.innerHTML=null;
Data.forEach(function(el){
    let title=document.createElement("p");
    title.innerText=el.Title;
   
    let image=document.createElement("img");
    image.src=el.Poster;
   
    let Release=document.createElement("p");
    Release.innerText=el.Year;
 
    let dic=document.createElement("p");
    dic.innerText=el.Type;
   
    container.append(title, image, dic, Release)
})
}

