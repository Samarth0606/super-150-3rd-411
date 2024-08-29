// https://api.tvmaze.com/search/shows?q=girls


// 1. fetch -> web api(browser) -> it returns a promise , meta data -> json() -> returns a promise

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then((data)=>{  return data.json() })
// .then((resp)=>{console.log(resp , "resp")})
// .catch((err)=>{console.log(err)})



// async function callApi(){
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let resp = await data.json();
//     console.log(resp)
// }

// callApi();


// -------------------------

// 2. axios -> 3rd library -> cdn -> returns  a promise -> with entire data
// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then((resp)=>{console.log(resp.data ,"data")})
// .catch((err)=>{console.log(err , "err")})


async function callAxios(){
    let data = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
    console.log(data.data)
}
callAxios()

