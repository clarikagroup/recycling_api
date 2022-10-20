import * as dotenv from 'dotenv';
dotenv.config();

import "reflect-metadata";
import express from 'express';
import { InversifyExpressServer } from "inversify-express-utils";
import  recyclingContainer from './inversify.config';
import bodyParser  from "body-parser";

import './api'

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

let server = new InversifyExpressServer(recyclingContainer, null, { rootPath: "/api"}, app);
let appToRun = server.build();
let serve : any = appToRun.listen(process.env.PORT || 3000, () => `App running on ${serve.address().port}`);


