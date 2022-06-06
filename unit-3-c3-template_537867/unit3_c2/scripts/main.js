

document.getElementById("form").addEventListener("submit",mysubmit)
let arr = JSON.parse(localStorage.getItem("user"))||[]

function mysubmit(){
    event.preventDefault()
   let obj = {
       
     name : document.getElementById("name").value,
     email : document.getElementById("email").value,
    address : document.getElementById("address").value,
    amount : document.getElementById("amount").value,
   } 
  

    arr.push(obj)
    // console.log(arr)
    
    localStorage.setItem("user",JSON.stringify(arr))


}
