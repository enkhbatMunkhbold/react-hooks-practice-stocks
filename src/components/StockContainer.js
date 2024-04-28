import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddStock }) {

  const renderStocks = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} onStockClick={handleAddStock}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
