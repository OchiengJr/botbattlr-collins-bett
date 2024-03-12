import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";

function Home() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
 
  useEffect(() => {
    fetch(`https://json-server-q9ux.onrender.com/bots`)
      .then((res) => res.json())
      .then((data) => {

        setBots(data);
      });
  }, []);

  const updateArmy = (armyId) => {
    setArmy((previousArmy) => {
      const isExistBot = previousArmy.find((item) =>
        item.id === armyId ? true : false
      ); // checks whether bot is in army

      if (isExistBot) return previousArmy;
      const selectedBot = bots.find((item) =>
        item.id === armyId ? true : false
      );
      const newArmy = [...previousArmy, selectedBot]; // Add the new bot to the array
      return newArmy;
    });
  };

  const deleteBot = (armyId, context) => {
    console.log(armyId,context)
    function deleteFromBotArmy() {
      setArmy((previousArmy) => {
        return previousArmy.filter((item) => item.id !== armyId);
      });
    }
    switch (context) {
      case "army":
        deleteFromBotArmy();
        break;
      case "collection":
        deleteFromBotArmy();
        setBots((previousBots) => {
          return previousBots.filter((item) => item.id !== armyId);
        });
        fetch(`https://json-server-q9ux.onrender.com/bots/${armyId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
          break;
    }
  };

  return (
    <>
      <BotArmy troops={army} removeTroop={deleteBot}/>
      <BotCollection botCollectionArmy={bots} updateTroops={updateArmy} removeBot={deleteBot} />
    </>
  );
}

export default Home;
