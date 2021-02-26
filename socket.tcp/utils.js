import chalk from 'chalk';

export function broadCastMessage(users, currentUser, data){
    users.forEach(user  => {
        if(user !== currentUser){
            user.write(chalk.bgBlueBright(`\n\r${currentUser.name} sended message: ${data}\n\r`));
            user.write('ecrivez un message: ');
        }else{
            user.write('ecrivez un message: ');
        }
    });
}

export function isCommand(data){
    const isCommandTapped = data.match(/^\/([a-zA-Z]+)/i);
    if(isCommandTapped){
        return isCommandTapped;
    }
    return false;
}

export function _displayNameListUser(users, currentUser){
    if(users.length > 1){
        users.forEach(user => {
            if(user !== currentUser){
                currentUser.write(chalk.bgBlackBright(`name users connected: ${user.name}\n\r`));
            }
        });
    }
}

export function userConnect(socket, users){
    users.push(socket);
    socket.name = `user ${users.indexOf(socket)}`;
    socket.write(chalk.blueBright('=======Bienvenue sur le server de tchat en TCP :)======\n\n\n\r'));
    _displayNameListUser(users, socket)
    socket.write('ecrivez un message: ');
    
}