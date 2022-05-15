import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

//1. 기본 ui 설계.
//2. 버튼을 클릭하면 클릭한 값이 사용자 값이 되고 화면에 나타남.
//3. 버튼을 클릭하면 랜덤한 값이 컴퓨터 값이 되고 화면에 나타남.
//4. 3,4의 결과로 승패를 판단하고 화면에 나타남.
//5. 승패에 따라 박스의 색이 변함.

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("tie");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) return "tie";
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "winner" : "loser";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "winner" : "loser";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "winner" : "loser";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

      <h1 className="main">{result}</h1>
    </div>
  );
}

export default App;
