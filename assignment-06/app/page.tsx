import React from 'react';
import ExpenseList from "./components/expenseList/expenseList";
import Graph from "./components/graph/graph";
export default function Expense() {
  const expenseData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Expenses',
        backgroundColor: '#3490dc',
        borderColor: '#3490dc',
        borderWidth: 1,
        hoverBackgroundColor: '#4fa3d1',
        hoverBorderColor: '#4fa3d1',
        data: [500, 700, 1000, 800, 1200],
      },
    ],
  };
  return (<>
    <div>
        <h1 className="text-5xl text-center m-5">Expense Tracker App</h1>   
        <ExpenseList/>
    </div>
    <div>
    <Graph data={expenseData} />
  </div></>
  )
}
