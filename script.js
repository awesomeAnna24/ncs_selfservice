"use strict";
// VARIABLES
// 1. Read the loan input
let loanAmount = Number(document.querySelector("#loan-input").value);
// 2. Read the monthly repayment
let monthlyRepayment = document.querySelector("#total-monthly").innerHTML;
// 3. Read the total months input
let numberOfMonths = Number(document.querySelector("#months-number").value);
//Onclick items
document.querySelector("#loan-btn").addEventListener("click", displayLoan);
document.querySelector("#reset-btn").addEventListener("click", loanReset);

// FUNCTIONS
function displayLoan(){
    if(numberOfMonths > 1){
        let newMonths = numberOfMonths - 1;
        let interestRate = ((newMonths * 0.75) + 1.5);
        let interest = ((loanAmount * interestRate)/100);
        let totalLoanAmount = loanAmount + interest;
        let loanMonthlyRepayment = Math.round(totalLoanAmount/numberOfMonths);
        document.querySelector("#total-monthly").innerHTML =loanMonthlyRepayment;
    }
}
