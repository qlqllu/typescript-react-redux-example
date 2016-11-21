"use strict";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const errorHandler = require('errorhandler');
const api_routes_1 = require('./routes/api.routes');
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        // create expressjs application
        this.app = express();
        // configure application
        this.config();
        // add routes
        this.routes();
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    config() {
        // add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));
        // configure pug
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');
        // mount logger
        //  this.app.use(logger('dev'));
        // mount json form parser
        this.app.use(bodyParser.json());
        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // mount cookie parker
        this.app.use(cookieParser('SECRET_GOES_HERE'));
        // mount override?
        //  this.app.use(methodOverride());
        //  catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        // error handling
        this.app.use(errorHandler());
    }
    /**
     * Create and return Router.
     *
     * @class Server
     * @method config
     * @return void
     */
    routes() {
        // use router middleware
        this.app.use('/rest', api_routes_1.default);
        if (process.env.NODE_ENV === 'production') {
            this.app.use('/', express.static(path.join(__dirname, '../client/builder')));
        }
        else {
            const proxy = require('express-http-proxy');
            this.app.use('/', proxy('localhost:8080'));
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2ZXJDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxVQUFVLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDMUMsTUFBWSxZQUFZLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDOUMsTUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsTUFBWSxJQUFJLFdBQU0sTUFBTSxDQUFDLENBQUE7QUFFN0IsTUFBTyxZQUFZLFdBQVcsY0FBYyxDQUFDLENBQUM7QUFFOUMsNkJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFFNUM7Ozs7R0FJRztBQUNIO0lBZ0JFOzs7OztPQUtHO0lBQ0g7UUFDRSwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUVyQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsYUFBYTtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBM0JEOzs7Ozs7O09BT0c7SUFDSCxPQUFjLFNBQVM7UUFDckIsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQW1CRDs7Ozs7T0FLRztJQUNJLE1BQU07UUFDWCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuQyxlQUFlO1FBQ2YsZ0NBQWdDO1FBRWhDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQyxDQUFDO1FBRUosc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFL0Msa0JBQWtCO1FBQ2xCLG1DQUFtQztRQUVuQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ25HLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLE1BQU07UUFDWix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFTLENBQUMsQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0FBRUgsQ0FBQztBQTdGWSxjQUFNLFNBNkZsQixDQUFBIn0=