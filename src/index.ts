import "reflect-metadata";
import express from 'express'
import { InversifyExpressServer } from "inversify-express-utils";
import  recyclingContainer from './inversify.config'
import "./controllers/InfoController"

const app = express();
app.use(express.json());

let server = new InversifyExpressServer(recyclingContainer, null, { rootPath: "/api"}, app);
let appToRun = server.build();
let serve : any = appToRun.listen(process.env.PORT || 3000, () => `App running on ${serve.address().port}`);


