// 

// let allH1 = document.getElementsByTagName('h1');
// console.log(allH1[0])
// console.log(allH1[1])

// let allClasses = document.getElementsByClassName('sam');
// console.log(allClasses)


// let allIds = document.getElementById('sammy');
// console.log(allIds)

// let h1 = document.querySelector('h1')
// let classesEl = document.querySelector('.sam')
// let IdEl =  document.querySelector('#sammy')

// console.log(h1 , classesEl , IdEl)

// let allId = document.querySelectorAll('#sammy')
// console.log(allId)


// -------------------------

// let firstH1 = document.querySelector('h1');
// firstH1.style.color = "red"
// firstH1.style.backgroundColor = "yellow"
// firstH1.style.fontSize = "60px"

// firstH1.style.cssText = `
//         color : red;
//         background-color : green;
//         font-size : 100px;
// `


// -----------------------------------

let firstH1 = document.querySelector('h1');
// console.log(firstH1.innerText = "<strong> lolipop </strong>") //brainful
console.log(firstH1.innerHTML = "<strong> lolipop </strong>") //brainful
console.log(firstH1.textContent) //brainless


let an = document.querySelector('a');
// let out=an.getAttribute('href');
an.setAttribute('href' , 'http://instagram.com');
// console.log(out)



