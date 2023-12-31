// components/ExpenseGraph.js
"use client"
import { ExpenseType, GraphType } from '../types/commonTypes';
import ExpenseList from '../expenseList/expenseList';
const ExpenseGraph = ({ data}) => {
  const options = {
    // Customize your graph options here
  };

  return <Bar data={data} options={options} />;
};


// components/ExpenseGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';


const Graph = ({ data }:GraphType) => {
  const options = {
    
  };

  return <Bar data={data} options={options} />;
};

export default Graph;
