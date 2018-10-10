// DOM elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');

// Listening to events
kgInput.addEventListener('input', event => {    // addEventsListeneri sisse läheb kaks parameetrit, millest üks on function
    let kg = event.target.value;                // targetime sedasama elementi, kust event välja tuli, tahame sealt valuet kätte saada
    
    gramOutput.innerHTML = `${kg * 1000} g`;    // muudame teksti, mis ilmub html-is tagide vahele
});

