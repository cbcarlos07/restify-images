import * as restify from 'restify'
import * as corsMiddleware from 'restify-cors-middleware'
import config from '../environment'
import routes from '../routes';
import * as bodyParser from 'body-parser'
import jwtMiddlewre from '../utils/jw';
class Server {
    server: any
    port: number
    constructor(){
        this.config()
    }

    config(){
        this.server = restify.createServer();
        this.port = config.PORT_SERVER
    }

    listen(){
        //this.server.use(restify.plugins.bodyParser())        
        //this.server.use(restify.plugins.urlEncodedBodyParser())
        this.server.use(bodyParser.json())
        this.server.use(bodyParser.urlencoded({ extended: true }));

        this.enableCors()        
        this.configRoutes()
        this.routeProtect()
        this.server.listen(this.port, ()=>{
            console.log(`Server listening on port ${this.port}`);            
        })
    }

    enableCors(){
        const cors = corsMiddleware({
            preflightMaxAge: 5,
            origins: ['*'],
            allowHeaders: ['*'],
            exposeHeaders: ['*']
        })
        this.server.pre( cors.preflight )
        this.server.use( cors.actual )

    }
    configRoutes(){        
        routes(this.server)
    }

    routeProtect(){
        let exclusions = ['/','/arquivo/','/saveFile']
        this.server.use( jwtMiddlewre( {exclusions} ) )

    }
}
const server = new Server()
export default server