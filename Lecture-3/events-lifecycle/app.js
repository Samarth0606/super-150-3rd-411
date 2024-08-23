let child = document.querySelector('#child')
let parent = document.querySelector('#parent')
let grandparent = document.querySelector('#grandparent')




grandparent.addEventListener('click' , function(e){
    console.log("mai hu dadda")
} , false)
parent.addEventListener('click' , function(e){
    console.log("mai hu papa")
} , true)
child.addEventListener('click' , function(e){
    e.stopPropagation()
    console.log("mai hu child")
} , true)


// let btn = document.querySelector('button');
// let inpEl = document.querySelector('input');

// inpEl.addEventListener('keydown' , function(e){
//     if(e.which === 13){
//         console.log(e.target.value)
//     }
//     // console.log(e)
// })

// btn.addEventListener('click' , function(event){
//     console.log(event)
// })



