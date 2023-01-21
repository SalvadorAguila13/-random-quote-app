import React from "react";

const QuoteButtom = ({ newRandomQuote, color }) => {
  return (
    <div>
      <button
        className="quoteBox_buttom"
        onClick={newRandomQuote}
        style={{ backgroundColor: color }}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
};

export default QuoteButtom;
