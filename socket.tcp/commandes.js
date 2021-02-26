import chalk from "chalk";
import {commandes} from './commandsFunction.js';

export function commandManager(infoCommand, argsCommand = Object.assign({message, users, currentUser})){
    const {currentUser, message, users} = argsCommand;
    let nameCommande = infoCommand[1];
    // console.log(argsCommand);
    if(typeof commandes.commandsInfos[nameCommande] === "undefined"){
        currentUser.write(chalk.bgRedBright('command tapped doesnt existe\n\r'))
        currentUser.write('\n ecrivez un message: ');
        return;
    }
    nameCommande = nameCommande + 'Command';

    // commandes[nameCommande](message, users, currentUser);
    commandes[nameCommande](infoCommand, message, users, currentUser);
}