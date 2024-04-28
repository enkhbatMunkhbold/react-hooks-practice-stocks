import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, handleRemoveStock }) {

  const renderMyStocks = myStocks.map(stock => {
    return <Stock key={stock.id} stock={stock} onStockClick={handleRemoveStock}/>
  }) 

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderMyStocks}
    </div>
  );
}

export default PortfolioContainer;
