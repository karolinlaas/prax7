// DOM elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ozOutput = document.getElementById('ozOutput');

// Listening to events
kgInput.addEventListener('input', event => {    // addEventsListeneri sisse läheb kaks parameetrit, millest üks on function
    let kg = event.target.value;                // targetime sedasama elementi, kust event välja tuli, tahame sealt valuet kätte saada
    
    gramOutput.innerHTML = `${kg * 1000} g`;    // muudame teksti, mis ilmub html-is tagide vahele
    poundOutput.innerHTML = `${kg * 2.20462262} lb`;
    ozOutput.innerHTML = `${kg * 35.2739619} oz`;
});

