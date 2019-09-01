import * as jwt from 'jsonwebtoken'
import env from '../environment'

const jwtMiddlewre = deps =>{
    
    return async (req, res, next)=>{
        console.log(req.url);
        console.log(req.url.substr( 0,req.url.lastIndexOf('/') ));
        console.log(req.url.lastIndexOf('/'));
        console.log(req.url.charAt(req.url.length-1));
        console.log(deps.exclusions.includes( req.href() ));
        
        if( !deps.exclusions.includes(req.url.substr( 0,req.url.lastIndexOf('/') )) ){
            const token = req.headers['x-access-token']
            if( !token ){
                res.send(403, {error: 'Token não fornecedido'})
                return false
            }
            try {
                req.decoded = jwt.verify( token, env.JWT_SECRET )
            } catch (error) {
                res.send(403, {error: 'Falha ao autentiar token'})
                return false
            }
        }
        next()
    }
}

export default jwtMiddlewre