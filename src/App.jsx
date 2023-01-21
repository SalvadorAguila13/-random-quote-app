import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors = [
  "#1d3d33",
  "#ff7360",
  "#7052ff",
  "#ebb7ce",
  "#3f8880",
  "#bd4c42",
  "#00c6ab",
  "#15ab92",
  "#1e91ed",
];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const indexRandom = Math.floor(Math.random() * quantityValues);
  return arrayElements[indexRandom];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors));

  const newRandomQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} newRandomQuote={newRandomQuote} color={color} />
    </div>
  );
}

export default App;
