// 1 ticket = 120

// let name1 = prompt("What is your name?");
// alert("Hello, " + name1 + "!");
//💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300


function ticketPrice(ticket){

    if(ticket < 0){
        return "Invalid Number"
    }

    else{
        return (ticket * 120) -(500 + (8*50))
    }
  
}

console.log(ticketPrice(10))
console.log(ticketPrice(1055))
console.log(ticketPrice(-130))
