import React from 'react';
import PropTypes from 'prop-types';
import BotCard from './BotCard';

function BotCollection({ botCollection, updateTroops, removeBot }) {
  const bots = botCollection.map((bot) => (
    <div key={bot.id} onClick={() => updateTroops(bot.id)}>
      <BotCard
        img={bot.avatar_url}
        name={bot.name}
        botClass={bot.bot_class}
        health={bot.health}
        armor={bot.armor}
        damage={bot.damage}
        deleteBot={() => removeBot(bot.id, "collection")}
        id={bot.id}
      />
    </div>
  ));

  return <div id="bot_cont">{bots}</div>;
}

BotCollection.propTypes = {
  botCollection: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTroops: PropTypes.func.isRequired,
  removeBot: PropTypes.func.isRequired,
};

export default BotCollection;