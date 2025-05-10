import { InvestmentData, InvestmentResults } from "../../Models/Models";
import { calculateInvestmentResults, formatter } from "../../Util/Util";

export default function Results({userInput}:{userInput:InvestmentData}) {
   const results: InvestmentResults[] = [];
   calculateInvestmentResults(userInput, results);

   if(results.length === 0) {
      return <p className="center">Please enter a valid duration</p>
   }

   const initalInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

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