let imgEl = document.querySelector('img');
let arrr = [
    'https://images.unsplash.com/photo-1723118641440-485d9630c3c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1723465739996-d14b6791b2a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1723444059817-50635ba04ffc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
];

let num = 0;
let id = setInterval(()=>{
    imgEl.setAttribute('src' , arrr[num]);
    num = (num + 1)%arrr.length
} , 2000)

setTimeout(()=>{
    clearInterval(id)
} , 20000)-