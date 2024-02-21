console.log("hello");

// dichiaro la variabile dove includo container_square(controllino con console.log)
const containerSquare = document.getElementById("container_square");
console.log(containerSquare)
const square = document.createElement('li')
square.classList.add("box");
// crea tre variabili con il contenuto dei tre riquadri non numerati
const fizz = "fizz";
const buzz = "buzz";
const fizzBuzz = "fizzbuzz"

// crea un ciclo per creare una serie di riquadri
for (let i = 1; i <= 100; i++){

    
    /* 
    crea delle condizioni in cui se e divisibile per 3(fizz), per 5(buzz), per 15(fizzbuzz) il resto numeri a pregressione
    */
    if (i% 3 === 0 && i% 5 ===0) {
        // SE e divisibili per 3 e per 5
        console.log(fizzBuzz); 
        square.classList.add("fizzbuzz_bg")
        square.append(`${fizzBuzz}`)
        containerSquare.append(square)
        console.log(square)
    } else if (i%5 ===0){
        // ALTRIMENTI SE e divisibile per 5
       console.log(buzz); 
       containerSquare.insertAdjacentHTML('beforeend', `<li class="box buzz_bg">${buzz}</li>`)
    }else if(i%3 ===0){
        // ALTRIMENTI SE e divisibile per 3
       console.log(fizz);
       containerSquare.insertAdjacentHTML('beforeend', `<li class="box fizz_bg">${fizz}</li>`)
    }else{
        // ALTRIMENTI dai il numero momentaneo del conto
        console.log(i)
        containerSquare.insertAdjacentHTML('beforeend', `<li class="box bg_secondary">${i}</li>`)
    }

}
