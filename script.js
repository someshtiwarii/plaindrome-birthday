const pass = `<div class="label">Yay!! Your birthday is a palindrome number!</div>`
const fail = `<div class="label">Oops!! Your birthday is not a palindrome number!</div>`


const date = document.querySelector("#pickDate");

const outputDiv = document.querySelector(".output");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateString = ((date.value).split('-')).join("");
    var rem, temp, final = 0;
    var number = Number(dateString);
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;

    }
    if (final == temp) {
        outputDiv.innerHTML = pass;
    } else {
        outputDiv.innerHTML = fail;
    }

});




/* const luckyNoJS= Number(luckyNo.value);
    if(sum%luckyNoJS ===0){
        outputDiv.innerHTML = pass;
    }
    else{
        outputDiv.innerHTML = fail;
    }
} );
*/