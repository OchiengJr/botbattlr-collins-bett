import React from 'react'
import BotCard from './BotCard'
import BotArmy from './BotArmy'

function BotCollection({botCollectionArmy, updateTroops, removeBot}) {
    
  const bots = botCollectionArmy.map((bot) => 
    <div key={bot.id} onClick={() => {updateTroops(bot.id)}}>
         <BotCard
        img={bot.avatar_url}
        name={bot.name}
        botClass={bot.bot_class}
        health={bot.health}
        armor={bot.armor}
        damage={bot.damage}
        deleteBot={() => {removeBot(bot.id,"collection")}}
        id={bot.id}
      />
    </div>
  )
  
  return (
    <div id='bot_cont'>{bots}</div>
  )
}

export default BotCollection