
let id=document.getElementById("movie").addEventListener("input", function(){
    debouncing(getMovies, 1000);
});
 
function debouncing(func, time) {
    clearTimeout(id);
    id=setTimeout(() => {
    func();
    }, time);
}
 
async function getMovies(){
    const movieName =document.getElementById("movie").value;
    let url= `http://www.omdbapi.com/?s=${movieName}&apikey=83f62213`;
    if(!movieName){
        clearTimeout(id);
        return;
    }
 
    const api= await fetch(url);
    const data = await api.json();
    appendData(data.Search);
 
}
 
function appendData(data){
    document.getElementById("container").innerHTML= "";
    data
      ? data.forEach((one) => {
      let image=document.createElement("img");
      let title= document.createElement("h3");
      let type=document.createElement("p");
      let year=document.createElement("p");
      let div=document.createElement("div");
 
      image.src=one.poster;
      title.textContent=one.Title;
      type.textContent=one.Type;
      year.textContent=one.Year;
       div.addEventListener("click",() => {
        getSingleMovie(one);
       });
 
       div.append(title, image, type, year);
       document.getElementById("container").append(div);
   })
   :showError();
     
}
 
function showError(){
document.getElementById("container").innerHTML =`<h1>No Data Found</h1>`;
}
 
async function getSingleMovie(one) {
let url= `http://www.omdbapi.com/?i=${one?.imdbID}&apikey=83f62213`;
const api=await fetch(url);
const data=await api.json();
appendSingleMovie(data);
}

