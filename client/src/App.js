import './App.css';
import { Header } from './components/Header.jsx'
import {Balance} from './components/Balance.jsx'
import {IncomeExpenses} from './components/IncomeExpenses.jsx'
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
