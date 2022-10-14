const form = document.querySelector('.tax');
const amountTaxable = document.querySelector('.input1');
const paMultiplier = document.querySelector('.input2');
const submitBtn = document.querySelector('.submit_btn');


const taxPayment = (amount, parcentage) => {
   const tax = taxParcentage( amount, parcentage);

   return tax;
};


const taxParcentage = (input1, input2) => {
    //Here we will take user input this means
    //the program will be integrated to frontend inside here.
    multiplierAmount(input1, input2);
   
    return multiplierAmount;
};

const calculatedTax = document.querySelector('.result');

const multiplierAmount = (amt, pa) => {
    let amount = amt = amt / 100;
    let parcentage = pa = pa * 100;
     
    if(amount >= 1 || pa !== null ) {
        const result =  amount * parcentage; 
        console.log('Tax: ', result);

        return calculatedTax.textContent =  `Tax:  ${result.toPrecision(2)}`;
    }

    return console.log("Please Enter Amount.");
};


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taxPayment(paMultiplier.value, amountTaxable.value);
    const tax = JSON.stringify(taxPayment);

    return  tax;

}, false);


taxPayment(0, 0);