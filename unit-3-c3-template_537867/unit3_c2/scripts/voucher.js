


async function getdata(){
 try{
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
 }
}


