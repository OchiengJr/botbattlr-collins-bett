import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";

function Home() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch(`https://json-server-q9ux.onrender.com/bots`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bots");
        }
        return res.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateArmy = (armyId) => {
    setArmy((previousArmy) => {
      const isExistBot = previousArmy.find((item) => item.id === armyId);

      if (isExistBot) return previousArmy;

      const selectedBot = bots.find((item) => item.id === armyId);
      const newArmy = [...previousArmy, selectedBot];
      return newArmy;
    });
  };

  const deleteFromBotArmy = (armyId) => {
    setArmy((previousArmy) => {
      return previousArmy.filter((item) => item.id !== armyId);
    });
  };

  const deleteFromBotCollection = (armyId) => {
    setBots((previousBots) => {
      return previousBots.filter((item) => item.id !== armyId);
    });
  };

  const deleteBot = (armyId, context) => {
    switch (context) {
      case "army":
        deleteFromBotArmy(armyId);
        break;
      case "collection":
        deleteFromBotArmy(armyId);
        deleteFromBotCollection(armyId);
        fetch(`https://json-server-q9ux.onrender.com/bots/${armyId}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete bot");
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <BotArmy troops={army} removeTroop={deleteBot} />
      <BotCollection
        botCollectionArmy={bots}
        updateTroops={updateArmy}
        removeBot={deleteBot}
      />
    </>
  );
}

export default Home;
