import React from "react";
import "./styles.css";
import { useState } from "react";

const portFolioDB = {
  myPortfolio: [
    { name: "L&T Infotech", currentValue: "Total value: 6,63,075 Rs" },
    { name: "Titan Company", currentValue: "Total value: 1,50,200 Rs" }
  ],

  watchlist: [
    { name: "Alkyl Amines Chem", currentValue: "Total value: 3,84,500 Rs" },
    { name: "Escorts", currentValue: "Total value: 6,63,075 Rs" }
  ],

  commodity: [
    { name: "Gold", currentValue: "Today's value: 51,200 Rs" },
    { name: "Silver", currentValue: "Today's value: 56,500 Rs" }
  ]
};

var stock = Object.keys(portFolioDB);

export default function App() {
  const [data, newdata] = useState("myPortfolio");

  function stockClickHandler(stocksmall) {
    newdata(stocksmall);
  }

  return (
    <div className="App">
      <h1 style={{ margin: "2rem" }}> 🗠 Market Manager 🗠</h1>
      <p style={{ fontSize: "medium", margin: "2rem" }}>
        Here's your stock portfolio. Click below for details
      </p>
      <div>
        {stock.map((stocksmall) => (
          <button
            key={stocksmall}
            onClick={() => stockClickHandler(stocksmall)}
            style={{
              cursor: "pointer",
              padding: "0.6rem 0.5rem",
              borderRadius: "0.5rem 0.5rem",
              margin: "0.5rem 1rem",
              border: "1px solid black"
            }}
          >
            {stocksmall}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {portFolioDB[data].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                margin: "0.5rem",
                border: "1px solid black",
                borderRadius: "2rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.currentValue} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
