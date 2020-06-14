import React from 'react';
import { Header } from './component/header';
import { Balance } from './component/balance';
import { IncomeExpences } from './component/IncomeExpences';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';
import {GlobalProvider } from './context/GlobalState';


import './App.css';

function App() {
  return (
    <GlobalProvider> 
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
     </GlobalProvider> 
    
  );
}

export default App;
