import React from "react";
import QuoteButtom from "./QuoteButtom";

const QuoteBox = ({ quote, newRandomQuote, color }) => {
  return (
    <div className="quoteBox" style={{ color: color }}>
      <p className="quoteBox_quote">{quote.quote}</p>
      <h3 className="quoteBox_author">{quote.author} </h3>
      <i className="quoteBox_icon bx bxs-quote-left"></i>
      <QuoteButtom color={color} newRandomQuote={newRandomQuote} />
    </div>
  );
};

export default QuoteBox;
