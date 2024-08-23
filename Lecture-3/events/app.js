function harkat(){
    console.log("cheen tapak dum dum")
}
let sam = function (){
    console.log("vo launda")
}

let btnnn = document.querySelector('button');
// btnnn.onclick = sam;
// btnnn.onclick = harkat;


// addEventListener
// addEventListener('event' , function)
btnnn.addEventListener('click' , sam )
btnnn.addEventListener('click' , harkat )
