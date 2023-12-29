// The Fetch API provides an interface for fetching resources (including across the network).
fetch('https://randomuser.me/api/')
.then((response) =>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((errro)=>{
    console.log(errro);
})

