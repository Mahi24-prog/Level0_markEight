import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😬": "Grimacing Face",
  "😵": "Dizzy Face"
};

const emojiList = Object.keys(emojiDict);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDict) {
      setMeaning(emojiDict[userInput]);
    } else {
      setMeaning("Match not found");
    }
  }

  function onClickHandler(item) {
    setMeaning(emojiDict[item]);
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Know your emoji</h1>
        <input
          className="input-box"
          onChange={changeHandler}
          placeholder="Enter Emoji"
        />
        <h2>{meaning}</h2>
        <h5>Emoji's we know</h5>
        <div className="emoji-list">
          <div className="emoji-list">
            {emojiList.map((item) => {
              return (
                <span
                  key={item}
                  onClick={() => onClickHandler(item)}
                  className="emoji"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
