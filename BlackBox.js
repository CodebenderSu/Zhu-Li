const { BlackBoxChannel } = require('./data/config.json');

const blackBox = (message) => {
  if (!BlackBoxChannel) return;
  else {
    if (message.channel.name == BlackBoxChannel) {
      message.delete();
    } else return;
  };
};

module.exports = blackBox;
