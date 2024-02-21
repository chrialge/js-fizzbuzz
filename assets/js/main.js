console.log("hello");

// dichiaro la variabile dove includo container_square(controllino con console.log)
const containerSquare = document.getElementById("container_square");
console.log(containerSquare)
let fizz = "fizz";
let buzz = "buzz";

// crea un ciclo per creare una serie di riquadri
for (let i = 1; i <= 100; i++){
    console.log(i)
    
    /* 
    crea delle condizioni in cui se e divisibile per 3(fizz) per 5(buzz) il resto numeri a pregressione
    */
    if (i% 3 === 0) {
        console.log(fizz);
        containerSquare.insertAdjacentHTML('beforeend', `<li class="box fizz_bg">${fizz}</li>`)
    } else if (i%5 ===0){
       console.log(buzz); 
       containerSquare.insertAdjacentHTML('beforeend', `<li class="box buzz_bg">${buzz}</li>`)
    }else{
        console.log(i)
        containerSquare.insertAdjacentHTML('beforeend', `<li class="box bg_secondary">${i}</li>`)
    }

}
