// DOM elements
let kgInput = document.getElementById('kgInput');

// Listening to events
kgInput.addEventListener('input', event => {    // addEventsListeneri sisse läheb kaks parameetrit, millest üks on function
    let kg = event.target.value;                // targetime sedasama elementi, kust event välja tuli, tahame sealt valuet kätte saada
    console.log(kg);
});