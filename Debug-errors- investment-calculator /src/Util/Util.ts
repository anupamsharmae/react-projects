import { InvestmentData, InvestmentResults } from '../Models/Models';

export const INITIAL_INVESTMENT:InvestmentData = {
   initialInvestment: 10000,
   annualInvestment: 1000,
   expectedReturn: 6,
   duration: 10
}

// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
   initialInvestment,
   annualInvestment,
   expectedReturn,
   duration
}:InvestmentData, results:InvestmentResults[]) {
   // const annualData = [];
   let investmentValue = initialInvestment;

   for (let index = 0; index < duration; index++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      results.push({
         year: index + 1, // year identifier
         interest: interestEarnedInYear, // the amount of interest earned in this year
         valueEndOfYear: investmentValue, // investment value at end of year
         annualInvestment: annualInvestment, // investment added in this year
      });
   }

   // return results;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 0,
   maximumFractionDigits: 0,
});