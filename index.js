
setInterval(setClock, 1000);


const hourHand = document.getElementById("data-hour-hand");
const minuteHand = document.getElementById("data-minute-hand");
const secondHand = document.getElementById("data-second-hand");

// const hourHand = document.querySelector('[data-hour-hand]');
// const minuteHand = document.querySelector('[data-minute-hand]');
// const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date()
    const Second = currentDate.getSeconds() / 60
    const Minute = (Second + currentDate.getMinutes()) / 60
    const Hour = (Minute + currentDate.getHours()) / 12
    setRotation(secondHand, Second)
    setRotation(minuteHand, Minute)
    setRotation(hourHand, Hour)
};


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360 );
};


setClock();
