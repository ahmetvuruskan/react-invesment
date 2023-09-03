import React from "react";
import '../../assets/css/ResultTable.css'
const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits:2,
    maximumFractionDigits:2,
});
const ResultTable = props => {

    return <table className="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {props.yearlyData.map((yearlyData) => {
           return <tr key={yearlyData.year}>
                <td>{yearlyData.year}</td>
                <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearlyData.yearlyInterest)}</td>
                <td>{formatter.format(yearlyData.savingsEndOfYear - props.initialInvesment - yearlyData.yearlyContribution * yearlyData.year)}</td>
                <td>{formatter.format(props.initialInvesment + yearlyData.yearlyContribution * yearlyData.year)}</td>
            </tr>
        })}

        </tbody>
    </table>
}

export default ResultTable;