import React from "react";
import BotCard from "./BotCard";

function BotArmy({ troops, removeTroop }) {
  const soldiers = troops
    ? troops.map((troop) => (
        <div key={troop.id}>
          <BotCard
            img={troop.avatar_url}
            name={troop.name}
            botClass={troop.bot_class}
            health={troop.health}
            armor={troop.armor}
            damage={troop.damage}
            deleteBot={() => {removeTroop(troop.id,"army")}}
            id={troop.id}
          />
        </div>
      ))
    : "No Army";

  return (
   
    <div id="xyz">{soldiers}</div>
  );
}

export default BotArmy;
