const form = document.querySelector('.tax');
const amountTaxable = document.querySelector('.input1');
// const paMultiplier = document.querySelector('.input2');
const submitBtn = document.querySelector('.submit-btn');
const calculatedTax = document.querySelector('.result');


let totalTaxSumation = null;

function taxTotal(targetNum, numbers, memo={}) {
    if(targetNum in memo) return memo[targetNum]
    if(targetNum === 0) return [];
    if(targetNum < 0) return null;

    for(let num of numbers) {
        const taxSum = targetNum - num;
        const rememderTaxSum = taxTotal(taxSum, numbers, memo);
        if(rememderTaxSum !== null) {
            const taxSumation = [ ...rememderTaxSum, num]
            if(totalTaxSumation === null || taxSumation.length < totalTaxSumation.length ) {
                totalTaxSumation = taxSumation
            }
        }
    }
    memo[targetNum] = totalTaxSumation;
    return totalTaxSumation;
};

console.log(taxTotal(7, [2, 4]))//null
console.log(taxTotal(9, [2, 4, 3, 7]))//

function taxSubmitionDirectory(a, p) {
  const taxData = taxParcentage(a, p);

  return taxData
};


const taxParcentage = (input1, p) => {
    //This section will handle user inputs. It take user input1 & input2
    //as two parameters of the taxWorkings() function that it's calling inside itself
    //and sets them to the value collected from user in the input fields
    input1 = amountTaxable.value
    let allFunc = { 
        penTax: pensionTax(input1, p),
        hthTax: healthTax(input1, p),
        unpTax: unemploymentTax(input1, p),
        chTax: churchTax(input1, p),
        caTax: careTax(input1, p)          
    };
    return(
    `
        Pension Tax:      ${allFunc.penTax},
        Health Insurance: ${allFunc.hthTax}, 
        Unemployment Tax: ${allFunc.unpTax}, 
        Church Tax:       ${allFunc.chTax}, 
        Care Tax:         ${allFunc.caTax} 
     `
     );
};

const  pensionTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 0.093 * 100;
     if(amount >= 1) {
        let penResult = percentage * amount;
         return penResult
    }
};

const healthTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 7.9;
     if(amount >= 1) {
      return percentage * amount;
    }
};

const unemploymentTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 1.2;
     if(amount >= 1) {
      return percentage * amount;
    }
};

const churchTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 0.9196;
     if(amount >= 1) {
      return percentage * amount;
    }
};

const careTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 1.875;
     if(amount >= 1) {
      return percentage * amount;
    }
};


submitBtn.addEventListener('click', (e) => { 
    e.preventDefault(); 
    setTimeout(() => {
        calculatedTax.textContent = taxSubmitionDirectory(0, ) 
        console.log(
            `%cTax Paid: ${taxSubmitionDirectory()}`, " color: #000; color: green; font-size: 16px; font-weight: bold"
            );
    }, 1000);
}, false);





