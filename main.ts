#!   /usr/bin/env node 


import inquirer from "inquirer"

type Rates = {
    [key: string] : number
}
 const rates : Rates = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR:280,
 };

const user_answar = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency: ",
        type: "list",
        choices: Object.keys(rates)
    },
    {
        name: "to",
        message: "Enter To currency: ",
        type: "list",
        choices: Object.keys(rates)
    }, 
    {
        name: "amount",
        message: "Enter your amount: ",
        type: "number"
    }
]); 
 let amount = user_answar.amount;
 let fromRate = rates[user_answar.from];
 let toRate = rates[user_answar.to];
 let baseCurrency = amount / fromRate;
 let finalAmount = baseCurrency * toRate


 console.log(finalAmount);
 


// let baseCurrency = user_answar.amount / rates[user_answar.from];
// let finalAmount = baseCurrency * rates[user_answar.to]
// console.log(finalAmount)
















































































































