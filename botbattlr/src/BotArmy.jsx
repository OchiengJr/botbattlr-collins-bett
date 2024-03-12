import React from "react";
import BotCard from "./BotCard";

function BotArmy({ troops = [], removeBotFromArmy }) {
  const soldiers = troops.map((troop) => (
    <div key={troop.id}>
      <BotCard
        img={troop.avatar_url}
        name={troop.name}
        botClass={troop.bot_class}
        health={troop.health}
        armor={troop.armor}
        damage={troop.damage}
        deleteBot={() => removeBotFromArmy(troop.id)}
        id={troop.id}
      />
    </div>
  ));

  return <div id="xyz">{soldiers.length ? soldiers : "No Army"}</div>;
}

export default BotArmy;