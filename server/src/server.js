"use strict";
const http = require('http');
const ServerClass_1 = require('./ServerClass');
const httpPort = normalizePort(process.env.PORT || 8080);
const app = ServerClass_1.Server.bootstrap().app;
app.set('port', httpPort);
const httpServer = http.createServer(app);
// listen on provided ports
httpServer.listen(httpPort);
// add error handler
httpServer.on('error', onError);
// start listening on port
httpServer.on('listening', onListening);
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server 'error' event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof httpPort === 'string'
        ? 'Pipe ' + httpPort
        : 'httpPort ' + httpPort;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server 'listening' event.
 */
function onListening() {
    const addr = httpServer.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxNQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUk3Qiw4QkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3pELE1BQU0sR0FBRyxHQUFHLG9CQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFMUMsMkJBQTJCO0FBQzNCLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFNUIsb0JBQW9CO0FBQ3BCLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRWhDLDBCQUEwQjtBQUMxQixVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUd4Qyx1QkFBdUIsR0FBRztJQUN4QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRS9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsYUFBYTtRQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsaUJBQWlCLEtBQUs7SUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVE7VUFDckMsT0FBTyxHQUFHLFFBQVE7VUFDbEIsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUUzQix1REFBdUQ7SUFDdkQsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsS0FBSyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsK0JBQStCLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQztRQUNSLEtBQUssWUFBWTtZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLENBQUM7UUFDUjtZQUNFLE1BQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSDtJQUNFLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRO1VBQ2pDLE9BQU8sR0FBRyxJQUFJO1VBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQyJ9