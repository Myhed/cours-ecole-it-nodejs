import {readdir, opendir, readFileSync, rmSync, rm, chmod, mkdir} from 'fs';
import {spawn, exec} from 'child_process';
// import {createServer} from 'http';
import {createServer} from 'net';


// readdir('/home/myhed', (err,contentDir) => {
//     console.log('contentDir: ', contentDir);
// });


/**
 * @SPANW permet d'éxécuter des commades shell ou autre qui permet de récupérer certaine donnée depuis un système
 */
// console.log(spawn('ls /home/myhed', ["-a"], {shell: true}));

/**
 * @EXEC permet d'éxécuter de façons asynchrone une command systeme
 */

// exec(' ls -a /home/myhed', (err, stdout, stderr) => {
//     console.log('err:', err);
//     console.log('stdout: ', stdout);
//     console.log('stack trace error: ', stderr);
// });

/**
 * @OPENDIR
 */

//  readdir('/home/myhed', (err, files) => {
//     opendir('/home/myhed',(err, dir) => {
//         console.log(dir.path);
//         const opendir = files.map((__, index) => {
//             return dir.read()
//         });
//         Promise.all(opendir).then(result => {
//             result.forEach(fileOrDirectoryOpen => {
//                 // console.log(fileOrDirectoryOpen.name);
//                 // fileOrDirectoryOpen.isDirectory();
//                 if(fileOrDirectoryOpen.isFile() && fileOrDirectoryOpen.name === "testFile.txt"){
//                     // rmSync(`${dir.path}/${fileOrDirectoryOpen.name}`);
//                     // console.log(readFileSync(`${dir.path}/${fileOrDirectoryOpen.name}`, 'utf8'))
//                     chmod(`${dir.path}/${fileOrDirectoryOpen.name}` , 0o774, (err) => {
//                         console.log('err:', err);
//                         console.log('permission for this file changed');
//                     });
//                 }
//             });
//         });
//         mkdir(`${dir.path}/testFolder`, function(err){
//             console.log(err);
//             console.log('folder is created');
//         });
//     });
// });

/**
 * @WEBSERVER
 * @Accept_method @param {PUT,GET,DELTE,POST}
 */
// const webServer = createServer((request, response) => {
//     console.log(request.method);
//     if(request.url === '/' && request.method === "GET"){
//         response.writeHead(200,{
//             'content-Type': "text/plain"
//         }).end('home');
//     } else if(request.url == '/connection' && request.method === "POST"){
//         response.writeHead(200,{
//             'content-Type': "Application/json"
//         }).end(JSON.stringify({route: "connection"}));
//         request.on('data', data => {
//             console.log(JSON.parse(data.toString()));
//         });
//     }
// });
// // console.log(dirs);

// webServer.listen(8080, () => {
//     console.log('server started...');
// });