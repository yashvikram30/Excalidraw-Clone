import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_SECRET } from "@repo/backend-common/config";
dotenv.config();

const secret = JWT_SECRET;

const wss = new WebSocketServer({port : 8080});

wss.on('connection',function connection(ws, request){

    // PROCESS OF IDENTIFYING THE USER ON WEBSOCKETS

    // Step:1 get the url when the user connects
    const url = request.url;
    if(!url){
        return;
    }

    // Step:2 get the token param from the query parameters
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = String(queryParams.get('token'));

    // Step:3 verify if the user has the correct jwt or not, if no close the connection
    const verifiedUser = jwt.verify(token, secret);
    if(typeof verifiedUser=="string"){
        ws.close();
        return;
    }
    if(!verifiedUser || !verifiedUser.userId){
        ws.close();
        return;
    }

    ws.on('message', function connection(data){

        ws.send('pong');
    })
})