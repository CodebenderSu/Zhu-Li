const ping = require('./commands/Ping');
const help = require('./commands/Help');
const purge = require('./commands/Purge');
const role = require('./commands/Role');
const doTheThing = require('./commands/DoTheThing');
const bravo = require('./commands/Bravo');
const whoIs = require('./commands/WhoIs');
const info = require('./commands/Info');
const { Error } = require('./settings/messages.json');
//const { OwnerID } = require(`./settings/${process.env.ENV_CONFIG}config.js`);

const commandHandler = (message, command, args) => {
  switch(command) {
    case 'PING': //"!ping"
      ping(message);
      break;
    case 'HELP': //"!help"
      help(message);
      break;
    case 'PURGE': //"!purge n"
      purge(message, args);
      break;
    case 'ROLE': //"!role rolename"
      role(message, args);
      break;
    case 'DO': //"!do the thing"
      doTheThing(message, args);
      break;
    case 'BRAVO': //"!bravo"
      bravo(message);
      break;
    case 'WHOIS': //"!whois @user"
      whoIs(message);
      break;
    case 'INFO': //"!info args"
      info(message, args);
      break;
    default: // Unknown command response
      message.channel.send(Error.UnknownCMD);
  };
};

module.exports = commandHandler;
