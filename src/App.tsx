import React, {useState} from 'react';
import './App.css';
type FilterType = 'all' | 'RUBLS' | 'Dollars'
function App() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])
let [filter, setFilter] = useState<FilterType>('all')
  let currentMoney = money
  if (filter === 'Dollars') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
  }
  if (filter === 'RUBLS') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
  }
  const onClickFilterHandler = (nameButton: FilterType) => {
  setFilter(nameButton)
  }

  return (
      <>
      <ul>
        {currentMoney.map((obj,index) => {
          return (
              <li key={index}>
                <span>{obj.banknots} </span>
                <span>{obj.value}</span>
                <span>{obj.number}</span>
              </li>
          )
        })}
      </ul>
        <div style={{marginLeft: '35px'}}>
        <button onClick={()=> onClickFilterHandler('all')}>All</button>
        <button onClick={()=> onClickFilterHandler('RUBLS')}>RUBLS</button>
        <button onClick={()=> onClickFilterHandler('Dollars')}>Dollars</button>
        </div>
      </>

  );
}

export default App;
