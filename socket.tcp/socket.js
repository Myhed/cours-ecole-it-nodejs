import net from 'net';
import {commandManager} from './commandes.js';
import {userConnect, broadCastMessage, isCommand} from './utils.js';

let address;
let port = 1337;
const server = net.createServer();
const users = [];

server.on('connection', socket => {
    userConnect(socket, users);
    socket.on('data', data => {
        data = data.toString();
        const command = isCommand(data);
        if(command){
            commandManager(command, {message: data, users, currentUser: socket});
        }else{
            broadCastMessage(users, socket, data);
        }
    });

    socket.on('end', () => {
        socket.end();
        socket.destroy();
    });
});


server.listen(port,() => {
    address = server.address().address;

    console.log(`server started on ${address}:${port}`);
});