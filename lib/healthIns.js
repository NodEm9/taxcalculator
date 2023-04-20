const form = document.querySelector(".tax");
const amountTaxable = document.querySelector(".input1");
const submitBtn = document.querySelector(".submit-btn");
const calculatedTax = document.querySelector(".result");

//Main access function
function taxDirectory(a, p) {
  const _taxData = taxParcentage(a, p);
  return _taxData;
}

const taxParcentage = (input1, p) => {
  //This section will handle user inputs. It take user input1 & input2
  //as two parameters of the taxWorkings() function that it's calling inside itself
  //and sets them to the value collected from user in the input fields
  input1 = amountTaxable.value;
  let allFunc = {
    penTax: pensionTax(input1, p),
    hthTax: healthTax(input1, p),
    unpTax: unemploymentTax(input1, p),
    chTax: religonTax(input1, p),
    caTax: careTax(input1, p),
  };

  const taxSum =
    allFunc.penTax +
    allFunc.hthTax +
    allFunc.unpTax +
    allFunc.chTax +
    allFunc.caTax;

  console.log("Gesamtbeitrage: ", taxSum.toPrecision(5), "€");
  return [`
        Esteuer ltd.: ${allFunc.penTax}€,
        KV. ltd.:     ${allFunc.hthTax}€, 
        AV. ltd.:     ${allFunc.unpTax}€, 
        Ksteuer ltd.: ${allFunc.chTax}€, 
        PV. ltd.:     ${allFunc.caTax}€ 
     `];
};


/**
 * 
 * @param {*} a 
 * @param {*} p 
 * @returns 
 */
const pensionTax = (a, p) => {
  let amount = (a = a / 100);
  let percentage = (p = 0.093 * 100);
    let penResult = percentage * amount;
    return penResult;
};

const healthTax = (a, p) => {
  let amount = (a = a / 100);
  let percentage = (p = 7.9);
    return percentage * amount;
};

const unemploymentTax = (a, p) => {
  let amount = (a = a / 100);
  let percentage = (p = 1.2);
    return percentage * amount;
};

const religonTax = (a, p) => {
  let amount = (a = a / 100);
  let percentage = (p = 0.9196);
    return percentage * amount;
};

const careTax = (a, p) => {
  let amount = (a = a / 100);
  let percentage = (p = 1.875);
    return percentage * amount;
};

submitBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    // setTimeout(() => {
      calculatedTax.textContent = taxDirectory(0);
      // calculatedTax.style.color = 'green';
      console.log(
        `%cTax Paid: ${taxDirectory()}`,
        " color: green; font-size: 16px; font-weight: bold"
      );
    // }, 500);
  }, 
  false
);
