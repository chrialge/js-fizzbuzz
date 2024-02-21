console.log("hello");

// dichiaro la variabile dove includo container_square(controllino con console.log)
const containerSquare = document.getElementById("container_square");
console.log(containerSquare)
let fizz = "fizz";
let buzz = "buzz";

for (let i = 1; i <= 100; i++){
    console.log(i)
    
    if (i% 3 === 0) {
        console.log(fizz);
    } else if (i%5 ===0){
       console.log(buzz); 
    }else{
        console.log(i)
    }

    containerSquare.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
}
