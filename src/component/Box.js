import React from "react";

const Box = (props) => {
  console.log("props: ", props);

  let result = "";
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.item !== ""
  ) {
    result = props.result == "winner" ? "loser" : "winner";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="img" src={props.item && props.item.img}></img>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
