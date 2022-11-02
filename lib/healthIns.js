function taxSubmitionDirectory(a, p) {

        let allFunc = {
            penTax: pensionTax(a, p),
            hthTax: healthTax(a, p),
            unpTax: unemploymentTax(a, p),
            chTax: churchTax(a, p),
            caTax: careTax(a, p)
        };

        return(  
          `
           Pension Tax:      ${allFunc.penTax}
           Health Insurance: ${allFunc.hthTax}
           Unemployment Tax: ${allFunc.unpTax} 
           Church Tax:       ${allFunc.chTax} 
           Care Tax:         ${allFunc.caTax} 
        `);
};

const  pensionTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 9.3;

    if(amount >= 1) {
        let penResult = percentage * amount;
            return penResult
    }
}


const healthTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 7.9;

    if(amount >= 1) {
        return percentage * amount;
    }
}

const unemploymentTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 1.2;

    if(amount >= 1) {
        return percentage * amount;
    }
}

const churchTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 0.9196;

    if(amount >= 1) {
        return percentage * amount;
    }
}

const careTax = (a, p) => {
    let amount = a = a / 100;
    let percentage = p = 1.875;

    if(amount >= 1) {
        return percentage * amount;
    }
};


const subnmitTaxResult = taxSubmitionDirectory(2500);
setTimeout(() => {
    console.log(
        `%cTax Paid: ${subnmitTaxResult}`, " color: #000; font-size: 16px; font-weight: bold"
        );
}, 1000);


