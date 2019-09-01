import upload from "../utils/upload";
import * as restify from 'restify'
const initRoute = server =>{
    server.get('/inicio',(req, res, next)=>{
        res.send({api: 'It works'})
        next()
    })
    server.post('/save',(req, res, next)=>{
        console.log('campos',req.body);
        res.send(req.body)
        next()  
    })
    server.get('/search/:id', (req, res, next)=>{
        console.log('campos',req.params);
        res.send(req.params)
        next()  
    })
    server.post('/saveFile', upload.array('uploads[]',12),(req, res, next)=>{       
        res.send( {msg: 'teste'} )
        next()  
    })
    server.get('/arquivo/*', restify.plugins.serveStatic({
        directory: './public',
        appendRequestPath: false
    }))

}

export default initRoute