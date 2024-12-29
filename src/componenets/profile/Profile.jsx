import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Profile({ category }) {
  const inputRef = useRef(null);
  const [name, setName] = useState("(Edit Name)");
  const [showInputName, setShowInputName] = useState(false);
  const [coins, setCoins] = useState(0);
  const [level,setLevel] = useState(1)
  //   const handleintelligence = () => {
  //   setCoins()
  // }
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (category === "intelligence") {
      setCoins((prevCoins) => prevCoins + 25);
    } else if (category === "strength") {
      setCoins((prevCoins) => prevCoins + 20);
    } else if (category === "creativity") {
      setCoins((prevCoins) => prevCoins + 15);
    } else if (category === "charisma") {
      setCoins((prevCoins) => prevCoins + 10);
    }
  }, [category]); 

  
  useEffect(() => {
    // if (progress < 100) {
      setProgress(coins);
    // } else {
    //   setProgress(0);
    //   setLevel((prevLevel) => prevLevel + 1);
    // }
  });

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setLevel((prevLevel) => prevLevel + 1);
      console.log("ok")
    }
  },[]);

  

  const handleNameEdit = () => {
    setShowInputName(true);
    inputRef.current.focus();
  };
  const handleSaveName = () => {
    setShowInputName(false);
    setName(inputRef.current.value);
  };

  return (
    <div id="profile">
      <div id="prof">
        {" "}
        <img id="profileImg" src="/images/anime.png" alt="" />
        <div id="name">
          <h2>WELCOME ,</h2>
          {showInputName ? (
            <input type="text" ref={inputRef} defaultValue={name} />
          ) : (
            <span>{name}</span>
          )}
        </div>
        {showInputName ? (
          <img
            id="savenametick"
            onClick={handleSaveName}
            src="/images/check-mark.png"
            alt=""
          />
        ) : (
          <i onClick={handleNameEdit} className="fas fa-edit fa-xs"></i>
        )}
      </div>
      <div id="prog">
        {/* <p>{progress}</p> */}
        <progress value={progress} max="100"></progress>
        <h3>Level {level} </h3>
      </div>
      <div id="grid1">
        <div className="gridbox">
          <h4>Intelligence</h4>
          <h2>25</h2>
        </div>
        <div className="gridbox">
          <h4>Strenght</h4>
          <h2>20</h2>
        </div>
        <div className="gridbox">
          <h4>Creativiy</h4>
          <h2>15</h2>
        </div>
        <div className="gridbox">
          <h4>Charisma</h4>
          <h2>10</h2>
        </div>
      </div>
      <div>
        {/* {category === "intelligence" ? (
          handleintelligence()
        ) : category === "strength" ? (
          handlestrength()
        ) : category === "creativity" ? (
          handlecreativity()
        ) : category === "charisma" ? (
          handlecharisma()
        ) : (
          <h1>coins</h1>
        )} */}
        <h1> {coins} Coins </h1>
      </div>
    </div>
  );
}

export default Profile;
