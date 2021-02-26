import chalk from 'chalk';

import { commandsInfos } from './commandInfos.js';

const kickUserCommand = (commandInfos, data, users, currentUser) => {
    const nameCommand = commandInfos[1];
    const kickCommand = data.match(commandes.commandsInfos[nameCommand].regex);
    const idUserToKick = parseInt(kickCommand[1]);
    const userToKick = users[idUserToKick];
    console.log(users.length);
    users.splice(idUserToKick, 1);
    console.log(users.length);
    users.forEach(user => {
        user.write(chalk.bgRedBright(`\n${userToKick.name} kicked by ${currentUser.name}\n\r`));
        user.write('ecrivez un message: ');
    })
    userToKick.emit('end');
}

const privateMessageCommand = (commandInfos, message, users, currentUser) => {
    const nameCommand = commandInfos[1];
    const commandPrivateMessage = message.match(commandes.commandsInfos[nameCommand].regex);
    const idToUser = parseInt(commandPrivateMessage[1]);
    console.log(commandPrivateMessage);
    if(users[idToUser] !== currentUser){
        users[idToUser].write(chalk.bgMagentaBright(`${currentUser.name} sended private message: ${commandPrivateMessage[2]}\n\r`));
        users[idToUser].write('ecrivez un message: ');
        currentUser.write('ecrivez un message: ');
    }else{
        currentUser.write(chalk.bgRedBright("vous ne pouvez pas vous envoyez un message privé"));
    }
}

export const commandes = {
    commandsInfos,
    kickUserCommand,
    privateMessageCommand
}
