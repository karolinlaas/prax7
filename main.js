// DOM elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ozOutput = document.getElementById('ozOutput');
let output = document.getElementById('output');

output.style.visibility = 'hidden';

// Listening to events
kgInput.addEventListener('input', event => {    // addEventsListeneri sisse läheb kaks parameetrit, millest üks on function
    let kg = event.target.value;                // targetime sedasama elementi, kust event välja tuli, tahame sealt valuet kätte saada
    
    if (kg === '0') {                           // == tähedab, et on truthy, ilma ülakomadeta. === puhul '0' stringina
        output.style.visibility = 'hidden';
    } else {
        output.style.visibility = 'visible';
    }
    
    gramOutput.innerHTML = `${kg * 1000} g`;    // muudame teksti, mis ilmub html-is tagide vahele
    poundOutput.innerHTML = `${kg * 2.20462262} lb`;
    ozOutput.innerHTML = `${kg * 35.2739619} oz`;
});

