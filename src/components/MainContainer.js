import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [displayStocks, setDisplayStocks] = useState([])
  const [startFilter, setStartFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  const handleFilterStocks = (selection='') => {
    if(selection === '') {
      setDisplayStocks(stocks)
    } else {
      const filtered = stocks.filter(stock => stock.type === selection)
      setDisplayStocks(filtered) 
    }
  }

  function handleAddStock(addStock) {  
    const found = myStocks.find(stock => stock.id === addStock.id)
    if(!found) {
      setMyStocks([...myStocks, addStock])
    } else {
      alert("Stock is already in your portfolio!")
    }
  }

  function handleRemoveStock(stock) {
    const updatedStocks = myStocks.filter(myStock => myStock.id !== stock.id)
    setMyStocks(updatedStocks)
  }

  function handleSortStocks(sortBy) {
    if(sortBy === 'Alphabetically') {
      stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))      
      setStocks([...stocks])
    } else if( sortBy === 'Price') {
      stocks.sort((a, b) => a.price - b.price)
      setStocks([...stocks])
    }
  }

  return (
    <div>
      <SearchBar 
        onSortStocks={handleSortStocks} 
        onFilterStocks={handleFilterStocks}
        setStartFilter={setStartFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={startFilter ? displayStocks : stocks} handleAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
