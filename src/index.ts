import * as dotenv from 'dotenv' 
dotenv.config()

import "reflect-metadata";
import express from 'express'
import { InversifyExpressServer } from "inversify-express-utils";
import  recyclingContainer from './inversify.config'
import "./api/v1/InfoController"
import bodyParser  from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

console.log(process.env.PORT);

let server = new InversifyExpressServer(recyclingContainer, null, { rootPath: "/api"}, app);
let appToRun = server.build();
let serve : any = appToRun.listen(process.env.PORT || 3000, () => `App running on ${serve.address().port}`);


