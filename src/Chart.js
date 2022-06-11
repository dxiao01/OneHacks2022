


import React from "react";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  const sendText = _ => {
    fetch(`http://127.0.0.1:4000/send-text?recipient=8179959430&textmessage=Someone_is_falling!`)
    .catch(err => console.error(err))
  }
  return (
    <div>
      <h3>Classification Confidence: {label}</h3>  
      {confidence*100}%
      {label === "Patient Falling/Fallen Detected" && sendText}
    </div>
  );
};
export default Chart;