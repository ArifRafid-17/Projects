 /**
  * 1. Data Source || JSON 
  * JSON.stringify()
  * JSON.parse()
  * 
  * 
  * .json()
  * 
  * 
 */




 // callback

 fetch('url dibo')

 .then(res => res.json())
 .then(data => {console.log(data)})


 // async await 

// normal fuction e async await

  async function loadData(){
    const rest = await fetch ('url ')
    const data = await  res.json();
    return data;
 }


// arrow function e async await 

 const loadData2  = async() =>{
    const res = await fetch ('url')
    const data = await res.json();
    return data;
 }