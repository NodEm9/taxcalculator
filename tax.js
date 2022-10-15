const form = document.querySelector('.tax');
const amountTaxable = document.querySelector('.input1');
const paMultiplier = document.querySelector('.input2');
const submitBtn = document.querySelector('.submit_btn');
const calculatedTax = document.querySelector('.result');


//Main function 
const taxPayment = (a, p) => {
   const tax = taxParcentage(a, p);

   return tax;
};

const taxParcentage = (input1, input2) => {
    //This section will handle user inputs. It take user input1 & input2
    //as two parameters of the taxWorkings() function that it's calling inside himself
    //and sets them to the value collected from user in the input fields
    taxWorkings(input1 = [paMultiplier.value], input2 = [amountTaxable.value]);
   
    return taxWorkings;
};

//Tax workings
const taxWorkings = (a, p) => {
    let amount = a = a / 100;
    let parcentage = p = p * 100;
     
    if(amount >= 1 || parcentage !== null ) {
        const result =  amount * parcentage; 
        console.log('Tax: ', result);

        return calculatedTax.textContent =  `Tax:  ${result}`;
    }

    return [ amount, parcentage ]; 
};

//Add event listener to the button and call taxParcentage()
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const tax = taxParcentage();
    return  tax;

}, false);

taxPayment(0, 0);