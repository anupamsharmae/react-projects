import { InvestmentData } from "../../Models/Models";
import { calculateInvestmentResults, formatter } from "../../Util/Util";

export default function Results({userInput}:{userInput:InvestmentData}) {
   // console.log(userInput);
   const results = calculateInvestmentResults(userInput);
   const initalInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
   // console.log(results);
   const tableRows = results.map((result) => {
      const totalInterest = result.valueEndOfYear - (userInput.annualInvestment * result.year) - initalInvestment;
      const totalInvestment = result.valueEndOfYear - totalInterest;
      return (
         <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvestment)}</td>
         </tr>
      );
   });
   return (
      <table id="result">
         <thead>
            <tr>
               <th>Year</th>
               <th>Investment Value</th>
               <th>Interest (Year)</th>
               <th>Total Interest</th>
               <th>Invest</th>
            </tr>
         </thead>
         <tbody>
            {tableRows}
         </tbody>
      </table>
   );

}