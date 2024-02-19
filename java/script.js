function play() {
    // console.log('play now')
    const hideEverything = document.getElementById('hide');
  
    hideEverything.classList.add('hidden');

    const showSuccess = document.getElementById('success');
  
    showSuccess.classList.remove('hidden');
    console.log(showSuccess.classList);
}


let seatCount =1;
let totalPrice = 0;

const cards = document.querySelectorAll(".seat");

for (let index = 0; index < cards.length; index++) {
    const seat = cards[index];
    console.log(seat)
seat.addEventListener("click", function(){
// console.log('clicked')
const seatNumber = seat.querySelector("p").innerText;
console.log(seatNumber);
// const price = ticket.querySelector("span").innerText;
// console.log(price) 
const seatSelected = document.getElementById("seat-selected");
console.log(seatSelected)
const p = document.createElement("p");
p.innerText = seatNumber;
seatSelected.appendChild(p); 

const classType = "Economy";
const classP = document.createElement("p");
classP.innerText = classType;
seatSelected.appendChild(classP);

const privceIn = "550";
const priceA = document.createElement("p");
priceA.innerText = privceIn;
seatSelected.appendChild(priceA);
});
     
}

const seats = document.querySelectorAll(".seat")
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function colorSet() {
        const currentNumber =document.getElementById('count-seat-booking');
    const currentText = currentNumber.innerText;
    const currentSeat =parseInt(currentText);
    // console.log(currentSeat)
    const newBooking = currentSeat + 1;
    // console.log(newBooking);
    currentNumber.innerText = newBooking;
    const totalMoney = newBooking * 550;
    // console.log(totalMoney);
    // if (newBooking < 0 ) {
    //     const totalMoney = newBooking * 550;
    //     console.log(totalMoney)
    //     // return (totalMoney);
        
    // }
    //  calculate price 
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2);
    
    //  grand total 

    const grandTotal = document.getElementById('total').innerText; 
    document.getElementById('total').innerText = totalMoney.toFixed(2);
     if (newBooking > 4) {
        alert('You can not book more than four seat')
        document.getElementById("count-seat-booking").value = "";
     }
    const totalSeat = document.getElementById("tseat").innerText;
    const convertedNumber =parseInt(totalSeat);
    document.getElementById("tseat").innerText = convertedNumber -1;
    }
    );

    // copoun apply

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function() {
//   get the value from input
const couponElement = document.getElementById('input-field').value;
const couponCode= couponElement.split(" ").join("").toUpperCase();
console.log(couponCode)
if ( totalMoney>= 550 ) {
    if ( couponCode === "NEW15"){
        // discount calculation 
        // const discountElement = document.getElementById('discountPrice');
        const discountAmount = grandTotal * 0.15;
        console.log(discountAmount);
        discountElement.innerText = discountAmount.toFixed(2);
        // rest total calculation
        // const totalMoney = document.getElementById('total')
        //   totalMoney.innerText = totalMoney - discountAmount.toFixed(2);
        //   document.getElementById('input-field').value= "";

    } else  if (couponCode === "Couple 20") {
        const discountAmount = totalPrice * 0.20;
    }
    else { 
        document.getElementById('input-field').value= "";
    }

} else {
    document.getElementById('input-field').value= "";
}

})


    
}


document.getElementById("dis1").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}

document.getElementById("dis2").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis3").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis4").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis5").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis6").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis7").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}
document.getElementById("dis8").onclick = function() {
    //disable
    this.disabled = true;

    //do some validation stuff
}


